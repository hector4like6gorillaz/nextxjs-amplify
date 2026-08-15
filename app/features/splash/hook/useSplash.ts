import { useEffect, useState } from 'react'

import useCommonFunctions from '../../../shared/hooks/useCommonFunctions'
import { useDispatch, useSelector } from 'react-redux'
import { useUserInformation } from '~/features/splash/api/splash.query'
import type { RootState } from '~/store'
import { usePathname } from 'next/navigation'

import {
  handleAutenticated,
  handleSplashDone,
  setUserInfo,
} from '~/store/reducers/userSlice'
import { mapRoutes } from '~/shared/routes/routesMap'

const useSplash = () => {
  const { data, error, isError, isSuccess, isFetching, refetch } =
    useUserInformation()
  const { splashDone } = useSelector((state: RootState) => state.user)
  const { navigate } = useCommonFunctions()
  const dispatch = useDispatch()
  const [loading, setloading] = useState(false)

  const handleReload = () => {
    setloading(true)
    refetch()
  }

  const pathname = usePathname()

  const isLoginRoute = pathname === mapRoutes.login

  useEffect(() => {
    if (isFetching) return
    if (splashDone) return

    let timer: NodeJS.Timeout

    if (isError) {
      console.error('error', error, 'hectorito el father')
      dispatch(setUserInfo(null))

      const needsRedirect = !isLoginRoute

      timer = setTimeout(() => {
        if (needsRedirect) navigate(mapRoutes.login, { replace: true })
        dispatch(handleSplashDone(true))
        setloading(false)
      }, 1500)
    }

    if (isSuccess && data) {
      dispatch(setUserInfo(data.data))
      dispatch(handleAutenticated(true))

      const needsRedirect = isLoginRoute

      timer = setTimeout(() => {
        if (needsRedirect) navigate(mapRoutes.claveteador, { replace: true })
        setloading(false)
        dispatch(handleSplashDone(true))
      }, 2000)
    }

    return () => {
      clearTimeout(timer)
    }
  }, [isError, isSuccess])

  return {
    //variables
    splashDone,
    isFetching,
    loading,
    //functions
    handleReload,
  }
}

export default useSplash
