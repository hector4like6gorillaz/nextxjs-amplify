'use client'

// TODO: `~/assets/logos/remix.png` was never migrated from the previous project - restore this logo once it's copied over.
import useLogin from '~/features/login/hooks/useLogin'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { Button } from 'antd'
import { FaGoogle, FaMicrosoft } from 'react-icons/fa6'
import { memo } from 'react'

const LoginModule = () => {
  const { state, login } = useLogin()
  const { loading } = state

  return (
    <div className="min-h-dvh flex items-center justify-center bg-linear-to-br from-background to-primary-100 px-6">
      <div className="relative w-full max-w-md bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-black-100 p-8 flex flex-col items-center">
        {loading && (
          <div className="absolute top-4 right-4 animate-spin">
            <AiOutlineLoading3Quarters className="text-primary" />
          </div>
        )}

        <div className="mb-6 flex flex-col items-center">
          <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center shadow-md" />

        </div>

        <div className="text-center mb-6">
          <h1 className="text-xl font-semibold text-text">Bienvenido</h1>
          <p className="text-sm text-black-300 mt-1">
            Inicia sesión para continuar
          </p>
        </div>

        <div className="w-full flex flex-col gap-3">
          <Button
            icon={<FaMicrosoft className="h-5 w-5" />}
            type="primary"
            className="w-full! h-[3.2rem]! rounded-xl! shadow-md! hover:scale-[1.01]! transition-all!"
            loading={loading}
            onClick={login}
          >
            Continuar con Microsoft
          </Button>

          <Button
            icon={<FaGoogle className="h-5 w-5" />}
            className="w-full! h-[3.2rem]! rounded-xl! border border-black-200! hover:border-primary! hover:scale-[1.01]! transition-all!"
            loading={loading}
          >
            Continuar con Google
          </Button>
        </div>

        <div className="w-full flex items-center gap-3 my-6">
          <div className="flex-1 h-px bg-black-100" />
          <span className="text-xs text-black-300">o</span>
          <div className="flex-1 h-px bg-black-100" />
        </div>

        <p className="text-xs text-black-300 text-center leading-relaxed">
          Al continuar, aceptas los términos y condiciones
        </p>
      </div>
    </div>
  )
}

export default memo(LoginModule)
