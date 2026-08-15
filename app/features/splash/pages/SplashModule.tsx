'use client'

import { useEffect, useState } from 'react'
// TODO: `~/assets/logos/remix.png` was never migrated from the previous project - restore this logo once it's copied over.

const SplashModule = () => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const t1 = setTimeout(() => setProgress(30), 400)
    const t2 = setTimeout(() => setProgress(70), 900)
    const t3 = setTimeout(() => setProgress(100), 1500)

    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
    }
  }, [])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-linear-to-br from-background to-primary-100">
      <div className="flex flex-col items-center gap-6 w-full max-w-xs px-6">
        <div className="w-20 h-20 rounded-2xl bg-primary flex items-center justify-center shadow-lg animate-pulse" />

        <p className="text-sm text-black-300 text-center">
          Cargando aplicación...
        </p>

        <div className="w-full h-2 bg-black-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-primary transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  )
}

export default SplashModule
