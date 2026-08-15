import type { IBaseApi } from '~/interfaces/baseApi.interface'
import type { IUserInfo } from '../splash.interfaces'
import { AUTHSERVICE } from '~/shared/http/axios'

export const getUserInfo = async (): Promise<IBaseApi<IUserInfo>> => {
  const { data } = await AUTHSERVICE.get(`/v1/auth/me`)
  return data
}
