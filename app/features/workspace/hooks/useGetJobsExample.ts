import { useCallback, useEffect, useMemo, useState } from 'react'

import { notifyToast } from '~/shared/utils/toast.utils'
import { useFetchJobs } from '../api/pubsub.querys'
import type { IJobWorkedExample } from '../interfaces/jobs.interface'
import type { IPagination } from '~/interfaces/baseApi.interface'

export interface IUseGetJobsExample {
  data: null | IPagination<IJobWorkedExample[]>
  isLoading: boolean
  refetch: () => void
  onChangePage: (page: number) => void
  page: number
}

const useGetJobsExample = (): IUseGetJobsExample => {
  const [page, setPage] = useState(1)

  const [dataState, setDataState] = useState<null | IPagination<
    IJobWorkedExample[]
  >>(null)

  const { data, isFetching, isSuccess, isError, refetch } = useFetchJobs({
    page,
  })

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

  const onChangePage = useCallback((newPage: number) => {
    setPage(newPage)
  }, [])

  const result = useMemo(() => {
    return {
      data: dataState,
      isLoading: isFetching,
      refetch,
      onChangePage,
      page,
    }
  }, [dataState, isFetching, refetch, onChangePage, page])

  return result
}

export default useGetJobsExample
