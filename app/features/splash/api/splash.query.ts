import type { AxiosError } from 'axios'
import { useQuery } from 'react-query'
import { getUserInfo } from '~/features/splash/api/splash.service'
import type { IBaseApi } from '~/interfaces/baseApi.interface'
import type { CustomError } from '~/interfaces/errors.interface'
import type { IUserInfo } from '../splash.interfaces'

const cacheKeys = {
  userInfoMe: 'user-information-me',
}

export const useUserInformation = () => {
  return useQuery<IBaseApi<IUserInfo>, AxiosError<CustomError>>({
    queryKey: [cacheKeys.userInfoMe],
    queryFn: getUserInfo,
    refetchOnWindowFocus: false,
    retry: false,
  })
}
