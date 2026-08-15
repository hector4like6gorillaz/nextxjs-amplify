'use client'

import { Button } from 'antd'
import { useRouter } from 'next/navigation'
// TODO: `app/assets/404.svg` was never migrated from the previous project - restore this image once it's copied over.

const NotFoundPage = () => {
  const router = useRouter()

  return (
    <div className="min-h-dvh flex items-center justify-center bg-linear-to-br from-background to-primary-100 px-6">
      <div className="w-full max-w-md bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-black-100 p-8 flex flex-col items-center text-center">
        <h1 className="text-5xl font-bold text-text tracking-tight">404</h1>

        <p className="text-base text-black-300 mt-2">
          No pudimos encontrar la página que buscas
        </p>

        <p className="text-sm text-black-200 mt-1">
          Puede que haya sido movida o que la URL sea incorrecta
        </p>

        <Button
          type="primary"
          className="mt-6 w-full! h-12! rounded-xl! shadow-md! hover:scale-[1.01]! transition-all!"
          onClick={() => router.push('/')}
        >
          Volver al inicio
        </Button>
      </div>
    </div>
  )
}

export default NotFoundPage
