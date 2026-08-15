'use client'

import { Button } from 'antd'
import { memo } from 'react'
import { useRouter } from 'next/navigation'

import ModalCustom from '../custom-modal/ModalCustom'
import { mapRoutes } from '~/shared/routes/routesMap'

const CloseSessionModal = ({
  open,
  closeModal,
}: {
  open: boolean
  closeModal?: () => void
}) => {
  const router = useRouter()
  return (
    <ModalCustom
      open={open}
      onCancel={closeModal}
      footer={null}
      title={null}
      closable={false}
    >
      <div className="relative bg-white rounded-lg overflow-hidden">
        <div className="bg-primary text-white text-center py-3 font-semibold h-[2.7rem]">
          <p className="p-0 m-0">¿Deseas cerrar sesión?</p>
        </div>

        <div className="p-6 text-center">
          <div className="flex justify-center gap-3 mt-6">
            <Button
              type="default"
              className="w-[7.9rem]! h-[3.24rem]! hover:bg-black-100! active:bg-primary-200! hover:border-primary! hover:text-black! rounded-2xl!"
              onClick={closeModal}
            >
              Cancelar
            </Button>
            <Button
              type="primary"
              className="w-[7.9rem]! h-[3.24rem]! hover:bg-primary-300! active:bg-primary-200! rounded-2xl!"
              onClick={() => router.push(mapRoutes.closeSession)}
            >
              Cerrar sesión
            </Button>
          </div>
        </div>
      </div>
    </ModalCustom>
  )
}

export default memo(CloseSessionModal)
