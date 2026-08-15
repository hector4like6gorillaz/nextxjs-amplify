'use client'

import { Badge } from 'antd'
import { useEffect, useState } from 'react'
import { FaBell } from 'react-icons/fa6'
import { usePathname } from 'next/navigation'
import { mapRoutes } from '~/shared/routes/routesMap'

const TopStatusBar = () => {
  //const { userInfo } = useSelector((state: RootState) => state.user)
  const pathname = usePathname()
  const [titleDescription, settitleDescription] = useState({
    title: '',
    description: '',
  })

  useEffect(() => {
    switch (pathname) {
      case mapRoutes.claveteador:
        settitleDescription({
          title: 'Claveteador',
          description: 'Resumen de datos y métricas principales',
        })
        break
      case mapRoutes.upload:
        settitleDescription({
          title: 'Carga Masiva',
          description: 'Clavetea múltiples unidades de manera sencilla',
        })
        break
      case mapRoutes.dashboard:
        settitleDescription({
          title: 'Dashboard',
          description: 'Clavetea múltiples unidades de manera sencilla',
        })
        break

      default:
        break
    }
  }, [pathname])
  return (
    <div className="flex flex-col items-center">
      <div
        className={`w-full px-spacing-2-r py-spacing-1-r h-20 flex items-center justify-between `}
      >
        <div
          className=""
          //onClick={() => tourService.start("claveteador")}
        >
          <p className="text-2xl font-AktivBold!">{titleDescription.title} </p>
        </div>

        <Badge
          className="cursor-pointer bg-transparent! rounded-full w-[2.18rem]! h-[2.18rem]! flex! items-center! justify-center!"
          count={1}
          size={'default'}
        >
          <FaBell className="fill-black-100 w-6 h-auto" />
        </Badge>
      </div>
      <div className="border-b border-b-black-100 w-[98%]"></div>
    </div>
  )
}

export default TopStatusBar
