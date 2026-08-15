'use client'

import { IoClose } from 'react-icons/io5'

import { PiHouseLineBold } from 'react-icons/pi'
import { memo, useEffect, useState } from 'react'
import { FaPowerOff, FaRegCopy } from 'react-icons/fa6'
import MenuIcon from './MenuIcon'
import { Divider } from 'antd'

import CloseSessionModal from './CloseSessionModal'
import { LuSend } from 'react-icons/lu'
import ModalCustom from '../custom-modal/ModalCustom'
import { usePathname, useRouter } from 'next/navigation'

// TODO: `~/assets/logos/remix.png` was never migrated from the previous project - restore this logo once it's copied over.
import { useSelector } from 'react-redux'
import type { RootState } from '~/store'
import { obtenerIniciales } from '~/shared/utils/words-utilities'
import { mapRoutes } from '~/shared/routes/routesMap'

const LateralMenu = () => {
  const { userInfo } = useSelector((state: RootState) => state.user)
  const pathname = usePathname()

  const name = obtenerIniciales(userInfo?.nombre_usuario || '')
  const router = useRouter()
  const [closeSessionModal, setcloseSessionModal] = useState(false)
  const [selected, setselected] = useState(1)
  const [showReportProblem, setshowReportProblem] = useState(false)

  useEffect(() => {
    switch (pathname) {
      case mapRoutes.claveteador:
        setselected(1)
        break
      case mapRoutes.dashboard:
        setselected(2)

        break

      default:
        break
    }
  }, [pathname])

  return (
    <aside className="w-89.5 h-screen bg-white border-r border-gray-200 flex flex-col justify-between font-sans">
      <CloseSessionModal
        open={closeSessionModal}
        closeModal={() => setcloseSessionModal(false)}
      />
      <ModalCustom
        footer={null}
        open={showReportProblem}
        closable={false}
        onCancel={() => setshowReportProblem(false)}
      >
        <div className="flex flex-col  justify-around gap-y-1.5 bg-black-200 rounded-xl h-fit p-1.5 relative">
          <div className="flex absolute z-10 right-spacing-0.5-r top-spacing-0.5-r">
            <IoClose
              onClick={() => setshowReportProblem(false)}
              className="cursor-pointer fill-primary w-spacing-1-r h-spacing-1-r"
            />
          </div>

          <p className="p-0 m-0 text-xl">Reportar Problema</p>
          <div className="flex flex-col bg-black-100 rounded-xl p-1.5">
            <div className="flex items-end justify-between gap-2 w-full bg-transparent rounded-2xl ">
              <textarea
                className="w-full h-24 max-h-40 resize-none bg-transparent text-black outline-none scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-[#666]"
                placeholder="Describe el problema..."
              />
            </div>
            <Divider className="my-1.5! p-0!"></Divider>
            <div className="w-full flex items-end justify-end">
              <button className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center hover:bg-primary-300 active:bg-primary-200">
                <LuSend className="text-white w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </ModalCustom>
      <div>
        <div className="h-20 flex items-center px-6 border-b border-gray-100" />

        <nav className="flex flex-col gap-1 p-4 mt-2">
          <MenuIcon
            onClick={() => router.push(mapRoutes.dashboard)}
            selected={selected === 2}
            Icon={FaRegCopy}
            label="Dashboard"
          />
          <MenuIcon
            onClick={() => router.push(mapRoutes.claveteador)}
            selected={selected === 1}
            Icon={PiHouseLineBold}
            label="Claveteador"
          />

          <MenuIcon
            onClick={() => setcloseSessionModal(true)}
            selected={false}
            Icon={FaPowerOff}
            label="Cerrar sesión"
          />
        </nav>
      </div>

      <div className="p-4 border-t border-gray-100">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-200 bg-primary flex items-center justify-center">
            <p className="text-white">{name} </p>
          </div>

          <div className="flex flex-col">
            <span className="text-sm font-bold text-gray-900 leading-none">
              {userInfo?.nombre_usuario}
            </span>

            <span className="text-xs text-gray-500 mt-1">
              {userInfo?.area_name}
            </span>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default memo(LateralMenu)
