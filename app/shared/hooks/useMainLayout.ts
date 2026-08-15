import { useRef } from 'react'

const useMainLayout = () => {
  const scrollRef = useRef<HTMLDivElement>(null)

  const handleScrollToTop = () => {
    if (!scrollRef.current) return

    scrollRef.current.scrollTo({
      top: 0,
      behavior: 'smooth', // <-- para un scroll suave
    })
  }

  return {
    //variables
    scrollRef,
    //functions
    handleScrollToTop,
  }
}

export default useMainLayout
