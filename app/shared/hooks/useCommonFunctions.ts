import { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { timer, Subscription } from 'rxjs'

const useCommonFunctions = (props?: {
  redirect: boolean
  path: string
  delay?: number
}) => {
  const { delay = 3000 } = props ?? {}

  const router = useRouter()

  // Adapter kept so existing callers written against react-router's
  // navigate(path, { replace }) signature don't need to change.
  const navigate = useCallback(
    (path: string, options?: { replace?: boolean }) => {
      if (options?.replace) router.replace(path)
      else router.push(path)
    },
    [router],
  )

  const [isMovile, setisMovile] = useState(false)

  const [screenSize, setScreenSize] = useState({
    width: 0,
    height: 0,
  })

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    if (screenSize.width > 0 && screenSize.width < 599) {
      setisMovile(true)
    } else {
      setisMovile(false)
    }
  }, [screenSize])

  useEffect(() => {
    if (!props?.redirect) return

    const sub: Subscription = timer(delay).subscribe(() => {
      navigate(props.path)
    })

    return () => sub.unsubscribe()
  }, [navigate, delay, props?.redirect, props?.path])

  return {
    navigate,
    screenSize,
    isMovile,
  }
}

export default useCommonFunctions
