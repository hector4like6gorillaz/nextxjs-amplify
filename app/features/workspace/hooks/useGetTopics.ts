import { useEffect, useMemo, useState } from 'react'
import { useFetchTopics } from '../api/pubsub.querys'
import { notifyToast } from '~/shared/utils/toast.utils'

export interface IUseGetTopics {
  data: string[] | null
  isLoading: boolean
  refetch: () => void
}

const useGetTopics = (): IUseGetTopics => {
  const [dataHellow, setdataHellow] = useState<null | string[]>(null)
  const { data, isFetching, isSuccess, isError, refetch } = useFetchTopics()

  useEffect(() => {
    if (isFetching) return

    if (isError) {
      notifyToast('Error al obtener los datos', 'error')
      return
    }

    if (isSuccess) {
      setdataHellow(data?.data ?? null)
    }
  }, [isFetching, isError, isSuccess, data])

  const result = useMemo(() => {
    return {
      data: dataHellow,
      isLoading: isFetching,
      refetch,
    }
  }, [dataHellow, isFetching, refetch])

  return result
}

export default useGetTopics
