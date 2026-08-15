// ~/services/auth/msal.service.ts
import { PublicClientApplication } from '@azure/msal-browser'
import { getConfigAzure } from './azure-config'

let msalInstance: PublicClientApplication | undefined

export const getMsalInstance = async (): Promise<PublicClientApplication> => {
  if (typeof window === 'undefined') {
    throw new Error('MSAL no puede instanciarse en el servidor')
  }

  if (msalInstance) {
    return msalInstance
  }

  const config = getConfigAzure()

  console.log('🔵 Inicializando MSAL con config:', config)

  if (!config.auth.authority || !config.auth.clientId) {
    throw new Error(
      'La configuración de MSAL (Authority o ClientID) está vacía. Revisa tus variables de entorno.',
    )
  }

  msalInstance = new PublicClientApplication(config)

  await msalInstance.initialize()

  return msalInstance
}
