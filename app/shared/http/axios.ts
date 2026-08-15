import axios from 'axios'

import { getItemForage } from '../storage/localForage.store'
import { localForageKeys, storeKeys } from '../storage/keys'

export const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL

const getSecureToken = async (): Promise<string | null> => {
  try {
    const token = await getItemForage({
      store: storeKeys.authentication,
      key: localForageKeys.token,
    })

    return token ?? null
  } catch {
    return null
  }
}

const createAxiosInstance = (contentType = 'application/json') => {
  return axios.create({
    baseURL,
    headers: {
      'Content-Type': `${contentType}; charset=utf-8`,
    },
  })
}

const SERVICE = createAxiosInstance()

const SERVICE_FORMDATA = createAxiosInstance('multipart/form-data')

const AUTHSERVICE = createAxiosInstance()

const AUTHSERVICE_FORMDATA = createAxiosInstance('multipart/form-data')

/**
 * Instancias que requieren autenticación.
 */
const authServices = [AUTHSERVICE, AUTHSERVICE_FORMDATA]

authServices.forEach((service) => {
  service.interceptors.request.use(
    async (config) => {
      const token = await getSecureToken()

      if (!token) {
        return Promise.reject(new Error('No token found'))
      }

      config.headers.Authorization = `Bearer ${token}`

      return config
    },
    (error) => Promise.reject(error),
  )
})

export { SERVICE, AUTHSERVICE, AUTHSERVICE_FORMDATA, SERVICE_FORMDATA }
