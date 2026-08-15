import { useCallback, useEffect, useMemo, useState } from 'react'
import { notifyToast } from '~/shared/utils/toast.utils'
import { usePostFilesExample } from '../api/pubsub.mutations'

export interface IUsePostFiles {
  data: any[] | null
  isLoading: boolean
  execute: () => void
}

const usePostFiles = ({
  body,
  onSuccess,
}: {
  body: File[]
  onSuccess?: () => void
}): IUsePostFiles => {
  const [dataState, setDataState] = useState<null | any[]>(null)

  const { data, isLoading, isSuccess, isError, mutate } = usePostFilesExample()

  useEffect(() => {
    if (isLoading) return

    if (isError) {
      notifyToast('Error al ejecutar la operación', 'error')
      return
    }

    if (isSuccess) {
      setDataState(data?.data ?? null)
      notifyToast('Operación ejecutada correctamente', 'success')
      onSuccess?.()
    }
  }, [isLoading, isError, isSuccess, data])

  const execute = useCallback(() => {
    mutate(body)
  }, [mutate, body])

  const result = useMemo(() => {
    return {
      data: dataState,
      isLoading,
      execute,
    }
  }, [dataState, isLoading, execute])

  return result
}

export default usePostFiles
