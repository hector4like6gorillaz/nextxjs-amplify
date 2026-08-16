import Link from 'next/link'
import {
  FiLayout,
  FiCpu,
  FiCode,
  FiDroplet,
  FiLayers,
  FiRefreshCw,
  FiSend,
  FiGrid,
  FiStar,
  FiBell,
  FiFolder,
  FiGitBranch,
  FiTerminal,
  FiArrowRight,
  FiCheckCircle,
} from 'react-icons/fi'
import { mapRoutes } from '~/shared/routes/routesMap'

const techStack = [
  {
    name: 'Next.js',
    version: '16.3.1',
    desc: 'App Router, file-based routing and the framework this template is built on.',
    icon: <FiLayout className="h-6 w-6 text-primary" />,
  },
  {
    name: 'React',
    version: '19.2.8',
    desc: 'UI library powering every component and hook in the app.',
    icon: <FiCpu className="h-6 w-6 text-primary" />,
  },
  {
    name: 'TypeScript',
    version: '^5',
    desc: 'Strict typing across services, hooks, and components.',
    icon: <FiCode className="h-6 w-6 text-primary" />,
  },
  {
    name: 'Tailwind CSS',
    version: '^4',
    desc: 'CSS-first theme in app/styles — colors, spacing, shadows, fonts, breakpoints.',
    icon: <FiDroplet className="h-6 w-6 text-primary" />,
  },
  {
    name: 'Redux Toolkit',
    version: '^2.12.0',
    desc: 'Global state via a per-request store factory, wired through StoreProvider.',
    icon: <FiLayers className="h-6 w-6 text-primary" />,
  },
  {
    name: 'TanStack Query',
    version: '^5.101.4',
    desc: 'Server-state caching, refetching, and loading/error states for every query.',
    icon: <FiRefreshCw className="h-6 w-6 text-primary" />,
  },
  {
    name: 'Axios',
    version: '^1.19.0',
    desc: 'The HTTP client every feature service is built on.',
    icon: <FiSend className="h-6 w-6 text-primary" />,
  },
  {
    name: 'Ant Design',
    version: '^6.6.0',
    desc: 'Component library available for tables, modals, and form controls.',
    icon: <FiGrid className="h-6 w-6 text-primary" />,
  },
  {
    name: 'React Icons',
    version: '^5.7.0',
    desc: 'Icon set used across the shared UI — this page included.',
    icon: <FiStar className="h-6 w-6 text-primary" />,
  },
  {
    name: 'React Toastify',
    version: '^11.1.0',
    desc: 'Global toast notifications, mounted once and usable from any hook.',
    icon: <FiBell className="h-6 w-6 text-primary" />,
  },
]

const architecture = [
  {
    title: 'app/features/<feature>/',
    desc: 'api (service + query), hooks, interfaces, and a pages/<Feature>Module.tsx — the same shape for every feature.',
    icon: <FiFolder className="h-5 w-5 text-primary" />,
  },
  {
    title: 'app/shared/',
    desc: 'Cross-feature building blocks: components, hooks, the Axios/query-client setup, storage, routes, and utils.',
    icon: <FiFolder className="h-5 w-5 text-primary" />,
  },
  {
    title: 'app/store/',
    desc: 'The Redux Toolkit store factory and its App Router-safe provider.',
    icon: <FiLayers className="h-5 w-5 text-primary" />,
  },
  {
    title: 'app/styles/',
    desc: 'Tailwind v4 theme tokens — colors, spacing, shadows, fonts, and breakpoints.',
    icon: <FiDroplet className="h-5 w-5 text-primary" />,
  },
  {
    title: 'app/interfaces/',
    desc: 'Shared TypeScript contracts used across more than one feature.',
    icon: <FiCode className="h-5 w-5 text-primary" />,
  },
  {
    title: 'app/<route>/page.tsx',
    desc: 'A thin route file that renders its feature’s Module component — routing stays separate from feature logic.',
    icon: <FiGitBranch className="h-5 w-5 text-primary" />,
  },
]

const dataFlow = [
  { label: 'Component', detail: 'PokemonModule.tsx' },
  { label: 'Hook', detail: 'usePokemon.ts' },
  { label: 'Query', detail: 'pokemon.querys.ts' },
  { label: 'Service', detail: 'pokemon.service.ts' },
  { label: 'Axios / API', detail: 'SERVICE → PokeAPI' },
]

const commands = [
  { cmd: 'npm run dev', desc: 'Start the Turbopack dev server' },
  { cmd: 'npm run build', desc: 'Production build + type-check' },
  { cmd: 'npm run start', desc: 'Serve the production build' },
  { cmd: 'npm run lint', desc: 'Run ESLint' },
]

const HomeModule = () => {
  return (
    <div className="min-h-full bg-background text-text">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-24 right-0 h-80 w-80 rounded-full bg-gradient-primary opacity-30 blur-[100px]" />
          <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-gradient-secondary opacity-30 blur-[100px]" />
        </div>

        <div className="mx-auto max-w-5xl px-6 py-20 text-center sm:py-28">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-100 px-3 py-1 text-sm font-semibold text-primary">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            App Router &middot; TypeScript &middot; Tailwind v4
          </span>

          <h1 className="font-AktivBold! mt-6 text-4xl tracking-tight text-text sm:text-5xl md:text-6xl">
            Next.js Template
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-secondary-500 sm:text-xl">
            A production-ready foundation to start building.
          </p>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-secondary-400">
            This starter ships with a working App Router setup, global state,
            server-state caching, a themed Tailwind v4 configuration, and one
            fully wired example feature &mdash; so new features have a proven
            pattern to follow from day one.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href={mapRoutes.pokemon}
              className="shadow-button inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-500"
            >
              View the Pokémon example
              <FiArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="https://github.com/hector4like6gorillaz/nextxjs-amplify"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-secondary-200 px-5 py-3 text-sm font-semibold text-text transition-colors hover:bg-surface"
            >
              Repository
            </a>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 pb-24">
        {/* Tech stack */}
        <section className="mb-20">
          <div className="mb-10 text-center">
            <h2 className="font-AktivBold! text-2xl text-text sm:text-3xl">
              Tech Stack
            </h2>
            <p className="mt-2 text-secondary-400">
              What&rsquo;s actually installed and wired into this template.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="rounded-xl border border-secondary-200 bg-surface p-5 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-100">
                    {tech.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-text">{tech.name}</p>
                    <p className="font-mono text-xs text-secondary-400">
                      {tech.version}
                    </p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-secondary-500">
                  {tech.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Architecture */}
        <section className="mb-20">
          <div className="mb-10 text-center">
            <h2 className="font-AktivBold! text-2xl text-text sm:text-3xl">
              Architecture &amp; Project Structure
            </h2>
            <p className="mt-2 text-secondary-400">
              The conventions every feature in this template follows.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-spacing-1-r tablet:grid-cols-2 desktop:grid-cols-3">
            {architecture.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-secondary-200 bg-surface p-5"
              >
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-primary-100">
                  {item.icon}
                </div>
                <p className="font-mono text-sm font-semibold text-text">
                  {item.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-secondary-500">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Data flow */}
        <section className="mb-20">
          <div className="mb-10 text-center">
            <h2 className="font-AktivBold! text-2xl text-text sm:text-3xl">
              Data Flow
            </h2>
            <p className="mt-2 text-secondary-400">
              Component &rarr; Hook &rarr; Query &rarr; Service &rarr;
              Axios/API &mdash; how the Pokémon feature actually works.
            </p>
          </div>

          <div className="flex flex-col items-stretch gap-3 rounded-2xl border border-secondary-200 bg-surface p-6 md:flex-row md:items-center md:justify-between">
            {dataFlow.map((step, index) => (
              <div key={step.label} className="flex items-center gap-3">
                <div className="flex-1 rounded-lg bg-primary-100 px-4 py-3 text-center md:min-w-40">
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                    {step.label}
                  </p>
                  <p className="mt-1 font-mono text-xs text-secondary-500">
                    {step.detail}
                  </p>
                </div>
                {index < dataFlow.length - 1 && (
                  <FiArrowRight className="hidden h-5 w-5 shrink-0 text-secondary-300 md:block" />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Features / Modules */}
        <section className="mb-20">
          <div className="mb-10 text-center">
            <h2 className="font-AktivBold! text-2xl text-text sm:text-3xl">
              Features &amp; Modules
            </h2>
            <p className="mt-2 text-secondary-400">
              The working example this template ships with.
            </p>
          </div>

          <Link
            href={mapRoutes.pokemon}
            className="group flex flex-col justify-between gap-6 rounded-2xl border border-secondary-200 bg-surface p-8 transition-shadow hover:shadow-lg md:flex-row md:items-center"
          >
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-primary-100 px-3 py-1 text-xs font-semibold text-primary">
                Live example
              </span>
              <h3 className="font-AktivBold! mt-4 text-xl text-text">
                Pokémon
              </h3>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-secondary-500">
                A debounced search against the PokeAPI, built end to end with
                this template&rsquo;s conventions: service &rarr; query &rarr;
                hook &rarr; module, plus success/error toast feedback wired
                straight from the hook.
              </p>
            </div>
            <span className="inline-flex items-center gap-2 self-start whitespace-nowrap text-sm font-semibold text-primary md:self-center">
              Open /pokemon
              <FiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        </section>

        {/* Getting started */}
        <section className="mb-20">
          <div className="grid grid-cols-1 gap-8 rounded-2xl border border-secondary-200 bg-surface p-8 md:grid-cols-2 md:p-10">
            <div>
              <h2 className="font-AktivBold! text-2xl text-text">
                Getting Started
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-secondary-500">
                Clone the repository, install dependencies, and start the dev
                server.
              </p>
              <div className="mt-6 space-y-2 font-mono text-sm">
                <div className="rounded-lg bg-background px-4 py-3 text-text">
                  npm install
                </div>
                <div className="rounded-lg bg-background px-4 py-3 text-text">
                  npm run dev
                </div>
              </div>
              <p className="mt-4 text-sm text-secondary-400">
                Then open{' '}
                <code className="rounded bg-primary-100 px-1.5 py-0.5 text-primary">
                  localhost:3000
                </code>
                .
              </p>
            </div>

            <div>
              <h3 className="font-AktivBold! text-lg text-text">
                Environment Configuration
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-secondary-500">
                Copy{' '}
                <code className="rounded bg-primary-100 px-1.5 py-0.5 text-primary">
                  .env.example
                </code>{' '}
                to{' '}
                <code className="rounded bg-primary-100 px-1.5 py-0.5 text-primary">
                  .env.development
                </code>{' '}
                &mdash; the file Next.js actually loads in dev.
              </p>
              <div className="mt-4 space-y-2 font-mono text-xs">
                <div className="flex items-center gap-2 rounded-lg bg-background px-3 py-2">
                  <FiCheckCircle className="h-4 w-4 shrink-0 text-primary" />
                  <span className="text-text">NEXT_PUBLIC_API_BASE_URL</span>
                </div>
                <div className="flex items-center gap-2 rounded-lg bg-background px-3 py-2 text-secondary-400">
                  <FiCheckCircle className="h-4 w-4 shrink-0 text-secondary-300" />
                  <span>STORAGE_ENCRYPTION_KEY (not yet wired)</span>
                </div>
                <div className="flex items-center gap-2 rounded-lg bg-background px-3 py-2 text-secondary-400">
                  <FiCheckCircle className="h-4 w-4 shrink-0 text-secondary-300" />
                  <span>ENVIRONMENT (unused today)</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Commands - terminal style */}
        <section>
          <div className="overflow-hidden rounded-2xl border border-secondary-200 bg-black-500">
            <div className="flex items-center gap-2 border-b border-black-400 px-5 py-3">
              <span className="h-3 w-3 rounded-full bg-warning-red" />
              <span className="h-3 w-3 rounded-full bg-warning-yellow" />
              <span className="h-3 w-3 rounded-full bg-warning-green" />
              <span className="ml-2 flex items-center gap-2 font-mono text-xs text-black-200">
                <FiTerminal className="h-3.5 w-3.5" />
                template
              </span>
            </div>
            <div className="space-y-3 p-6 font-mono text-sm">
              {commands.map((c) => (
                <div key={c.cmd} className="flex flex-wrap items-baseline gap-3">
                  <span className="text-black-200">$</span>
                  <span className="text-warning-green">{c.cmd}</span>
                  <span className="text-black-300">&mdash; {c.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default HomeModule
