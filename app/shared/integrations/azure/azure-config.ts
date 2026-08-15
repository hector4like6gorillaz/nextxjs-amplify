// ~/configs/azure-config.ts

// TODO: `window.ENV` was a Remix server-injected global with no Next.js
// equivalent yet - typed loosely here so this compiles until that's decided.
const getEnv = (key: string) => {
  const win = window as unknown as { ENV?: Record<string, string> }
  if (typeof window !== 'undefined' && win.ENV) {
    return win.ENV[key]
  }
  return ''
}

// CAMBIO: Ya no es una constante, es una función generadora
export const getConfigAzure = () => {
  const redirectUri = getEnv('AZURE_REDIRECT_URI')
  const tenantId = getEnv('AZURE_TENANT_ID')
  const clientId = getEnv('AZURE_CLIENT_ID')
  const jwksUrlTemplate = getEnv('AZURE_JWKS_URL') // Asegúrate que esta variable se llame así en tu ENV

  // Validación básica para debug
  if (!clientId || !tenantId) {
    console.error('⚠️ Faltan variables de entorno para Azure:', { clientId, tenantId, jwksUrlTemplate })
  }

  const jwksUrl = jwksUrlTemplate && tenantId
    ? jwksUrlTemplate.replace('<TENANT_ID>', tenantId)
    : `https://login.microsoftonline.com/${tenantId}` // Fallback común por si falla tu template

  return {
    auth: {
      clientId: clientId,
      redirectUri: redirectUri,
      scopes: ['user.read'],
      authority: jwksUrl, // Si esto es '' o null, MSAL explota
    },
    cache: {
      cacheLocation: 'sessionStorage',
      storeAuthStateInCookie: false,
    },
  }
}