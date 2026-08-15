import { memo, useCallback } from "react"
import type { IconType } from "react-icons/lib"

const MenuIcon = ({
  label,
  selected,
  Icon,
  onClick,
}: {
  Icon: IconType
  label: string
  onClick?: () => void
  selected: boolean
}) => {
  const click = useCallback(() => {
    if (onClick) onClick()
  }, [onClick])

  return (
    <button
      onClick={click}
      className={`flex w-full items-center gap-3 px-4 py-3  hover:bg-gray-50 hover:text-gray-900 rounded-lg transition-colors font-medium ${selected ? "bg-red-100 text-red-700" : "text-gray-600"}`}
    >
      <Icon className='w-6 h-auto text-primary' />
      <span>{label} </span>
    </button>
  )
}

export default memo(MenuIcon)
