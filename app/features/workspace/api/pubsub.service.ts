import type { IBaseApi, IPagination } from '~/interfaces/baseApi.interface'
import { SERVICE, SERVICE_FORMDATA } from '~/shared/http/axios'
import type { ICreateTopicsSubscriptions } from '../interfaces/pubsub.interfaces'
import type { IJobWorkedExample } from '../interfaces/jobs.interface'

export const PUBSUB_ENDPOINTS = {
  topics: '/v1/pubsub/topics',
  subscriptions: '/v1/pubsub/subscriptions',
  jobs: '/v1/pubsub/jobs',
  setup: '/v1/pubsub/setup-dev',
  files: '/v1/files/upload',
}

export const getHellowWorld = async (): Promise<
  IBaseApi<{
    message: string
  }>
> => {
  const { data } = await SERVICE.get(`/v1/hellow/`)
  return data
}

//servicios de get pubsub
export const getTopics = async (): Promise<IBaseApi<any>> => {
  const { data } = await SERVICE.get(PUBSUB_ENDPOINTS.topics)
  return data
}

export const getSubscriptions = async (): Promise<IBaseApi<any>> => {
  const { data } = await SERVICE.get(PUBSUB_ENDPOINTS.subscriptions)
  return data
}

export const getJobs = async (
  page: number,
): Promise<IBaseApi<IPagination<IJobWorkedExample[]>>> => {
  const { data } = await SERVICE.get(PUBSUB_ENDPOINTS.jobs, {
    params: { page },
  })
  return data
}

//servicios post pubsub

export const postSetup = async (): Promise<
  IBaseApi<ICreateTopicsSubscriptions[]>
> => {
  const { data } = await SERVICE.post(PUBSUB_ENDPOINTS.setup)
  return data
}

export const postFiles = async (body: File[]): Promise<IBaseApi<any>> => {
  const formData = new FormData()

  body.forEach((file) => {
    formData.append('files', file)
  })

  const { data } = await SERVICE_FORMDATA.post(PUBSUB_ENDPOINTS.files, formData)

  return data
}
