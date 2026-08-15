import { SERVICE } from '~/shared/http/axios'
import type { ILoginResponse } from '../login.interface'
import type { IBaseApi } from '~/interfaces/baseApi.interface'

export const postLogin = async (body: {
  token: string
}): Promise<IBaseApi<ILoginResponse>> => {
  const { data } = await SERVICE.post(`/v1/auth/login`, body)
  return data
}
