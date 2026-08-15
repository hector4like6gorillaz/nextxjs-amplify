import { Popover, type PopoverProps } from 'antd'

interface ModalCustomProps extends PopoverProps {
  children?: React.ReactNode
}

const PopoverCustom = ({ className, ...rest }: ModalCustomProps) => {
  return (
    <Popover
      styles={{
        container: {
          padding: 0,
          backgroundColor: 'transparent',
          borderRadius: '16px',
          boxShadow: 'none',
          ...rest.overlayInnerStyle,
        },
      }}
      {...rest}
      overlayClassName={className}
    >
      {rest.children}
    </Popover>
  )
}
export default PopoverCustom
