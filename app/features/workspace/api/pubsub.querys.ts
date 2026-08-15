import { useQuery } from '@tanstack/react-query'
import type { IBaseApi, IPagination } from '~/interfaces/baseApi.interface'

import type { AxiosError } from 'axios'
import type { CustomError } from '~/interfaces/errors.interface'
import {
  getHellowWorld,
  getJobs,
  getSubscriptions,
  getTopics,
} from './pubsub.service'
import type { IJobWorkedExample } from '../interfaces/jobs.interface'

const cacheKeys = {
  hellow: 'dashboard-hellow',
  getTopics: 'pubsub-get-topics',
  getSubscriptions: 'pubsub-get-subscriptions',
}

export const useGetHellow = () => {
  return useQuery<
    IBaseApi<{
      message: string
    }>,
    AxiosError<CustomError>
  >({
    queryKey: [cacheKeys.hellow],
    queryFn: getHellowWorld,
    retry: false,
    refetchOnWindowFocus: false,
  })
}

export const useFetchTopics = () => {
  return useQuery<IBaseApi<string[]>, AxiosError<CustomError>>({
    queryKey: [cacheKeys.getTopics],
    queryFn: getTopics,
    retry: false,
    refetchOnWindowFocus: false,
  })
}

export const useFetchSubscription = () => {
  return useQuery<IBaseApi<string[]>, AxiosError<CustomError>>({
    queryKey: [cacheKeys.getSubscriptions],
    queryFn: getSubscriptions,
    retry: false,
    refetchOnWindowFocus: false,
  })
}

export const useFetchJobs = ({ page }: { page: number }) => {
  return useQuery<
    IBaseApi<IPagination<IJobWorkedExample[]>>,
    AxiosError<CustomError>
  >({
    queryKey: [cacheKeys.getSubscriptions, page],
    queryFn: () => getJobs(page),
    retry: false,
    refetchOnWindowFocus: false,
  })
}
