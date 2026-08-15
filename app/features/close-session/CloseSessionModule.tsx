'use client'

import { Spin } from 'antd'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
// TODO: `~/assets/logos/remix.png` was never migrated from the previous project - restore this logo once it's copied over.
import useCommonFunctions from '~/shared/hooks/useCommonFunctions'
import { mapRoutes } from '~/shared/routes/routesMap'
import { localForageKeys, storeKeys } from '~/shared/storage/keys'
import { removeItemForage } from '~/shared/storage/localForage.store'
import { handleAutenticated } from '~/store/reducers/userSlice'

const CloseSessionModule = () => {
  const dispatch = useDispatch()

  useCommonFunctions({
    redirect: true,
    path: mapRoutes.login,
    delay: 2500,
  })

  useEffect(() => {
    removeItemForage({
      store: storeKeys.authentication,
      key: localForageKeys.token,
    })

    dispatch(handleAutenticated(false))
  }, [])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-linear-to-br from-background to-primary-100">
      <div className="flex flex-col items-center gap-6 w-full max-w-xs px-6">
        <div className="w-20 h-20 rounded-2xl bg-primary flex items-center justify-center shadow-lg animate-pulse" />
        <div className="text-center">
          <h1 className="text-lg font-semibold text-text">Cerrando sesión</h1>
          <p className="text-sm text-black-300 mt-1">
            Estamos finalizando tu sesión de forma segura...
          </p>
        </div>
        <Spin />
        <p className="text-xs text-black-300 text-center">
          Serás redirigido en unos segundos
        </p>
      </div>
    </div>
  )
}

export default CloseSessionModule
