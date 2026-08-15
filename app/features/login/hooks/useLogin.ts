import { usePostLogin } from '../api/login.mutations'
import { useCallback, useMemo, useReducer } from 'react'
import { initialStateLogin, LoginReducer } from '../login.reducer'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/navigation'
import { useUserInformation } from '~/features/splash/api/splash.query'
import { setItemForage } from '~/shared/storage/localForage.store'
import { localForageKeys, storeKeys } from '~/shared/storage/keys'
import { setUserInfo } from '~/store/reducers/userSlice'

import { notifyToast } from '~/shared/utils/toast.utils'
import { mapRoutes } from '~/shared/routes/routesMap'
import { getMsalInstance } from '~/shared/integrations/azure/msal.service'

const useLogin = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const [state, dispatchReducer] = useReducer(LoginReducer, initialStateLogin)
  const { mutate } = usePostLogin()
  const { refetch } = useUserInformation()

  const sendCredentialAzure = useCallback(
    (token: string) => {
      dispatchReducer({ type: 'SET_LOADING', payload: true })

      mutate(
        { token },
        {
          onSuccess: async (data) => {
            try {
              await setItemForage({
                store: storeKeys.authentication,
                value: data.data.token,
                key: localForageKeys.token,
              })
              const result = await refetch()
              if (data) {
                dispatch(setUserInfo(result.data!.data))
                router.replace(mapRoutes.claveteador)
              } else {
                notifyToast(
                  'Error al almacenar la credencial de acceso.',
                  'error',
                )
              }
            } catch (e) {
              console.error(e)
              notifyToast('Error al procesar el inicio de sesión.', 'error')
              router.replace(mapRoutes.login)
            }
          },
          onError(error: any) {
            const response: any = error.response?.data
            console.error(response?.message)
            if (response?.code === 401) notifyToast(response.message, 'error')
            else
              notifyToast(
                'Error al obtener credenciales de acceso. Revisar los datos ingresados.',
                'error',
              )
          },
          onSettled() {
            dispatchReducer({ type: 'SET_LOADING', payload: false })
          },
        },
      )
    },
    [mutate, refetch, dispatch, router],
  )

  const login = useCallback(async () => {
    try {
      // 1. Obtenemos la instancia de forma segura
      // Esto soluciona el error "possibly undefined"
      const msal = await getMsalInstance()

      // 2. Ahora TypeScript sabe que 'msal' existe y tiene los métodos
      const response = await msal.loginPopup({
        scopes: ['User.Read'],
        prompt: 'select_account',
      })

      const idToken = response.idToken

      // Es buena práctica usar await aquí si sendCredentialAzure hace operaciones async
      await sendCredentialAzure(idToken)
    } catch (err) {
      console.error('Error login Microsoft:', err)
      return { ok: false, error: err }
    }
  }, [sendCredentialAzure])

  return useMemo(
    () => ({
      //local variables
      state,
      //local functions
      login,
    }),
    [login, state],
  )
}

export default useLogin
