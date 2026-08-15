import { useEffect, useMemo, useState } from 'react'

import { notifyToast } from '~/shared/utils/toast.utils'
import { useFetchSubscription } from '../api/pubsub.querys'

export interface IUseGetSubscription {
  data: string[] | null
  isLoading: boolean
  refetch: () => void
}

const useGetSubscriptions = (): IUseGetSubscription => {
  const [dataState, setDataState] = useState<null | string[]>(null)
  const { data, isFetching, isSuccess, isError, refetch } =
    useFetchSubscription()

  useEffect(() => {
    if (isFetching) return

    if (isError) {
      notifyToast('Error al obtener los datos', 'error')
      return
    }

    if (isSuccess) {
      setDataState(data?.data ?? null)
    }
  }, [isFetching, isError, isSuccess, data])

  const result = useMemo(() => {
    return {
      data: dataState,
      isLoading: isFetching,
      refetch,
    }
  }, [dataState, isFetching, refetch])

  return result
}

export default useGetSubscriptions
