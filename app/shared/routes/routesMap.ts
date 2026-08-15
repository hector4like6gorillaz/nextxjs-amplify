export const mapRoutes = {
  // Active routes — exposed under app/ and navigable today.
  home: '/',
  pokemon: '/pokemon',

  // Reserved — referenced by in-progress features, not yet exposed as app routes.
  // Add the matching app/**/page.tsx when a feature is ready to go live.
  workspace: '/workspace',
  login: '/login',
  dashboard: '/dashboard',
  closeSession: '/close-session',
  claveteador: '/claveter',
  upload: '/upload',
} as const
