# Next.js Template

A production-ready **Next.js starter template**, built to be cloned and extended — not a business application. It ships with the App Router, TypeScript, Tailwind CSS v4, a working global state and data-fetching setup, and one fully wired example feature (**Pokémon**) that demonstrates the conventions every new feature should follow.

The goal: clone it, `npm install`, `npm run dev`, and start building on top of consistent, working patterns instead of setting them up from scratch.

## Tech stack

| Layer | Library | Version |
| --- | --- | --- |
| Framework | [Next.js](https://nextjs.org) (App Router) | `16.3.1` |
| UI | [React](https://react.dev) / React DOM | `19.2.8` |
| Language | [TypeScript](https://www.typescriptlang.org) | `^5` |
| Styling | [Tailwind CSS](https://tailwindcss.com) | `^4` |
| Global state | [Redux Toolkit](https://redux-toolkit.js.org) + [React Redux](https://react-redux.js.org) | `^2.12.0` / `^9.3.0` |
| Server state / caching | [TanStack React Query](https://tanstack.com/query) | `^5.101.4` |
| HTTP client | [Axios](https://axios-http.com) | `^1.19.0` |
| UI components | [Ant Design](https://ant.design) | `^6.6.0` |
| Icons | [React Icons](https://react-icons.github.io/react-icons) | `^5.7.0` |
| Notifications | [React Toastify](https://fkhadra.github.io/react-toastify) | `^11.1.0` |
| Local persistence | [localForage](https://localforage.github.io/localForage) + [crypto-js](https://github.com/brix/crypto-js) | `^1.10.0` / `^4.2.0` |

Also present in `package.json` but not currently wired into any active route: `@azure/msal-browser`, `driver.js`, `dayjs`, `rxjs`. They're available if a future feature needs them, but nothing in the template depends on them today.

### TanStack React Query

The template was migrated from `react-query` v3 (incompatible with React 19) to `@tanstack/react-query` v5. `QueryClientProvider` is mounted once, globally, in `app/shared/http/query-client.provider.tsx` and wraps the app from `app/layout.tsx`. Every feature's `*.querys.ts` / `*.mutations.ts` files use the standard `useQuery({ queryKey, queryFn, ... })` / `useMutation({ mutationFn })` object syntax.

### Redux Toolkit + local persisted storage

`app/store/` holds a Redux Toolkit store (`counter`, `navigation`, `user` slices) created per component tree via a `makeStore()` factory — not a module-level singleton — so state can't leak across requests when the App Router renders on the server. `StoreProvider` (a client component) creates the store once with `useState` and mounts `<Provider>` in the root layout.

There is **no `redux-persist` dependency** in this project. Instead, `app/shared/storage/` implements a standalone, AES-encrypted async storage layer on top of `localForage` (IndexedDB):

- `localForage.store.ts` — `setItemForage` / `getItemForage` / `removeItemForage` / `clearStoreForage`, encrypting values with `crypto-js` before writing.
- `storage-config.service.ts` — fetches the encryption key from an internal endpoint (`/internal/storage`) at runtime.
- `keys.ts` — storage/instance key identifiers.

This layer is independent of the Redux store — it's used directly by feature hooks (e.g. to persist a session token) rather than rehydrating Redux state automatically. The `/internal/storage` endpoint it depends on isn't implemented yet in this template, so encrypted storage isn't functional out of the box — wire that route up when persistence is actually needed.

### Tailwind CSS v4 configuration

The template targets Tailwind v4's CSS-first configuration — there's no `tailwind.config.js`. Everything lives under `app/styles/`, imported once from `app/layout.tsx`:

```
app/styles/index.css       → imports tailwindcss + every file below
app/styles/global.css      → resets, forced base font, scrollbar, Ant Design overrides, gradient utilities
app/styles/theme.colors.css→ --color-primary/secondary/background/surface/text (+ "-d" dark variants), black scale, warning colors
app/styles/theme.spacing.css → custom spacing tokens (--spacing-spacing-*-r)
app/styles/theme.media.css → custom breakpoints: tablet (37.5rem), desktop (75rem), ultrawide (120rem)
app/styles/theme.shadow.css→ --shadow-button
app/styles/theme.font.css  → --font-BariolBold/Regular, --font-AktivBold/BoldItalic/Italic/Regular
```

All of these are declared inside `@theme { ... }` blocks, so Tailwind auto-generates matching utilities (`bg-primary`, `text-primary`, `shadow-button`, `font-AktivBold`, `tablet:`/`desktop:`/`ultrawide:` variants, etc.) directly from the tokens — no separate config file to keep in sync.

Fonts are **not** loaded via plain `@font-face`. The real font files live in `app/assets/fonts/` and are loaded through `next/font/local` in `app/assets/fonts/fonts.ts`, which exposes each weight/style as a CSS variable. `theme.font.css`'s `--font-*` tokens point at those variables, so the `font-AktivBold` / `font-BariolRegular` utilities resolve to Next's self-hosted, optimized fonts.

## Architecture

### Feature structure

Each feature under `app/features/<feature>/` follows the same shape:

```
app/features/<feature>/
├── api/
│   ├── <feature>.service.ts     # raw Axios calls
│   └── <feature>.querys.ts      # TanStack Query hooks (useQuery/useMutation) wrapping the service
├── hooks/
│   └── use<Feature>.ts          # feature-facing hook: derived state, side effects, UI-ready return value
├── interfaces/
│   └── <feature>.interfaces.ts  # feature-scoped types
└── pages/
    └── <Feature>Module.tsx      # the actual page/module component
```

The route file under `app/<route>/page.tsx` stays a thin wrapper that just renders the feature's `Module` component — routing and feature logic are kept separate.

### `api → service → query → hook → module/page` flow

Using the Pokémon feature as the live example:

```
pokemon.service.ts        getPokemon(name) → SERVICE.get(`/pokemon/${name}`)  (Axios)
        ↓
pokemon.querys.ts         usePokemonQuery(name) → useQuery({ queryKey, queryFn: getPokemon })
        ↓
hooks/usePokemon.ts        debounces input, reads the query state, fires success/error toasts,
                            returns UI-ready { data, isLoading, isError, search, handlers }
        ↓
pages/PokemonModule.tsx    renders the search UI purely from what usePokemon returns
        ↓
app/pokemon/page.tsx       route file, just renders <PokemonModule />
```

New features should follow this exact chain: never call Axios or `useQuery` directly from a component — go through a service, a query hook, and a feature hook.

### The `shared/` directory

`app/shared/` holds everything that isn't specific to one feature:

- `components/` — reusable UI (`custom-modal`, `custom-table`, `custom-popover`, `main-nav`, `menu-lateral`, `top-statusbar`, `toast-provider`).
- `hooks/` — cross-feature hooks (`useDebounce`, `useCommonFunctions`, `useMainLayout`).
- `http/` — the Axios instance(s) (`axios.ts`) and the global `QueryClientProvider` wrapper.
- `storage/` — the encrypted localForage persistence layer described above.
- `routes/` — `routesMap.ts`, the single source of truth for route paths (see below).
- `utils/` — small stateless helpers (toast, formatting, scroll, security, env).
- `integrations/` — third-party integrations that exist in the codebase but aren't wired into any active route yet (`drive-js` onboarding tours, `azure` MSAL config).

Other top-level app folders: `app/store/` (Redux), `app/interfaces/` (cross-feature shared types like `IBaseApi`/`IPagination`), `app/assets/` (fonts, logos, lotties), `app/configs/` (reserved, currently empty — for future app-level configuration).

### Routing

Routing is plain Next.js App Router — folders under `app/` map to URL segments, each with a `page.tsx`. `app/shared/routes/routesMap.ts` centralizes every route path as a typed constant (`mapRoutes.home`, `mapRoutes.pokemon`, ...), so components navigate via `router.push(mapRoutes.x)` instead of hardcoded strings.

Currently wired and reachable:

- `/` — home (`app/page.tsx`)
- `/pokemon` — Pokémon search (`app/pokemon/page.tsx`)

`routesMap.ts` also reserves paths for features that already have scaffolding under `app/features/` (`workspace`, `login`, `dashboard`, `close-session`, etc.) but don't have a matching `app/**/page.tsx` yet — they exist as reference/in-progress code, not as active routes.

### The Pokémon feature (working example)

`app/features/pokemon/` is the template's proof that the full stack works end to end: Axios → TanStack Query → a feature hook (with debounced search and toast feedback) → a module component, reachable at `/pokemon`. Use it as the reference implementation when adding a new feature.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

Next.js auto-loads `.env.development` during `npm run dev` (and `.env` in every environment). Copy `.env.example` to `.env.development` and fill in the values:

| Variable | Required | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_API_BASE_URL` | Yes | Base URL for the Axios client (`app/shared/http/axios.ts`). The Pokémon feature points this at the public PokeAPI. |
| `STORAGE_ENCRYPTION_KEY` | No (not yet wired) | Intended for the encrypted local storage layer; currently unused until the `/internal/storage` endpoint it depends on is implemented. |
| `ENVIRONMENT` | No | Present for environment identification; not currently read anywhere in the app. |

> A `.env.dev` file may also exist locally — Next.js does not read that filename automatically (it only recognizes `.env`, `.env.local`, `.env.development`, `.env.production`, etc.), so `.env.development` is the one that actually takes effect in `npm run dev`.

## Commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Turbopack dev server. |
| `npm run build` | Production build (also runs TypeScript type-checking). |
| `npm run start` | Serve the production build. |
| `npm run lint` | Run ESLint (flat config, `eslint.config.mjs`). |

There's no separate `typecheck` script — type errors surface during `npm run build`, or run `npx tsc --noEmit` directly for a faster standalone check.

## Adding a new feature

1. Create `app/features/<feature>/` with `api/`, `hooks/`, `interfaces/`, and `pages/` following the Pokémon structure above.
2. Add the route path to `app/shared/routes/routesMap.ts`.
3. Add a thin `app/<route>/page.tsx` that renders your feature's `Module` component.
4. Reach for `app/shared/` before writing something feature-specific — check `components/`, `hooks/`, and `utils/` first.

This template is meant to be a ready-to-code foundation: the conventions above are already in place and working — build on them rather than introducing parallel patterns.
