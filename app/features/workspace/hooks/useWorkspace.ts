import { useRef, useState } from 'react'
import useGetJobsExample from './useGetJobsExample'
import useGetSubscriptions from './useGetSubscriptions'
import useGetTopics from './useGetTopics'
import useSetupTopicsSubscriptions from './useSetupTopicsSubscriptions'
import { useWorkerJobsColumns } from './useWorkerJobsColumns'
import usePostFiles from './usePostFiles'

const useWorkspace = () => {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const [files, setFiles] = useState<File[]>([])

  const jobs = useGetJobsExample()
  const topics = useGetTopics()
  const subscriptions = useGetSubscriptions()
  const columns = useWorkerJobsColumns()

  const uploadFiles = usePostFiles({
    body: files,
    onSuccess: () => setFiles([]),
  })

  const refetchTopicsAndSubscriptions = () => {
    topics.refetch()
    subscriptions.refetch()
  }

  const setupTopicsSubscriptions = useSetupTopicsSubscriptions({
    onSuccess: refetchTopicsAndSubscriptions,
  })

  const handleSelectFile = () => {
    inputRef.current?.click()
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files

    if (!selectedFiles) return

    const filesArray = Array.from(selectedFiles)

    setFiles((prev) => [...prev, ...filesArray])

    e.target.value = ''
  }

  return {
    topics,
    subscriptions,
    setupTopicsSubscriptions,
    jobs,
    columns,
    inputRef,
    handleSelectFile,
    handleFileChange,
    uploadFiles,
    files,
  }
}

export default useWorkspace
