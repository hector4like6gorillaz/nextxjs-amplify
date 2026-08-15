import { useMutation } from '@tanstack/react-query'
import { postFiles, postSetup } from './pubsub.service'

export const usePostSetupTopicsSubs = () => {
  return useMutation({
    mutationFn: postSetup,
  })
}

export const usePostFilesExample = () => {
  return useMutation({
    mutationFn: postFiles,
  })
}
