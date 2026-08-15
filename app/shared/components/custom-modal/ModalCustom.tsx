import { Modal, type ModalProps } from 'antd'

interface ModalCustomProps extends ModalProps {
  children?: React.ReactNode
}

const ModalCustom = ({ children, className, ...rest }: ModalCustomProps) => {
  return (
    <Modal
      {...rest}
      closable={false}
      className={className}
      modalRender={() => (
        <div
          className="bg-transparent pointer-events-auto"
          onMouseDown={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      )}
    >
      {children}
    </Modal>
  )
}

export default ModalCustom
