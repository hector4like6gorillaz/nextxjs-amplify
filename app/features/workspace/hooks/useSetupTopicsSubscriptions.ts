import { useCallback, useEffect, useMemo, useState } from 'react'
import { notifyToast } from '~/shared/utils/toast.utils'
import { usePostSetupTopicsSubs } from '../api/pubsub.mutations'
import type { ICreateTopicsSubscriptions } from '../interfaces/pubsub.interfaces'

export interface IUseSetupTopicsSubscriptions {
  data: ICreateTopicsSubscriptions[] | null
  isLoading: boolean
  execute: () => void
}

const useSetupTopicsSubscriptions = ({
  onSuccess,
}: {
  onSuccess?: () => void
}): IUseSetupTopicsSubscriptions => {
  const [dataState, setDataState] = useState<
    null | ICreateTopicsSubscriptions[]
  >(null)

  const { data, isPending: isLoading, isSuccess, isError, mutate } =
    usePostSetupTopicsSubs()

  useEffect(() => {
    if (isLoading) return

    if (isError) {
      notifyToast(
        'Error al crear los topics y subscriptions. Revisar que se este en dev en workspace.',
        'error',
      )
      return
    }

    if (isSuccess) {
      setDataState(data?.data ?? null)
      notifyToast('Topics y subscriptions creados correctamente', 'success')
      onSuccess?.()
    }
  }, [isLoading, isError, isSuccess, data])

  const execute = useCallback(() => {
    mutate()
    // mutate(payload)
  }, [mutate])

  const result = useMemo(() => {
    return {
      data: dataState,
      isLoading,
      execute,
    }
  }, [dataState, isLoading, execute])

  return result
}

export default useSetupTopicsSubscriptions
