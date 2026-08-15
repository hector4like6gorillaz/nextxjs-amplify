import type { TableProps } from 'antd'
import { useMemo } from 'react'
import dayjs from 'dayjs'
import type { IJobWorkedExample } from '../interfaces/jobs.interface'

export const useWorkerJobsColumns =
  (): TableProps<IJobWorkedExample>['columns'] => {
    return useMemo(
      () => [
        {
          title: 'ID',
          dataIndex: 'id',
          key: 'id',
          ellipsis: true,
          width: 220,
        },
        {
          title: 'Tipo',
          dataIndex: 'job_type',
          key: 'job_type',
        },
        {
          title: 'Folder',
          dataIndex: 'folder_id',
          key: 'folder_id',
          render: (value: string | null) =>
            value ? (
              <span className="text-xs break-all">{value}</span>
            ) : (
              <span className="text-gray-400">—</span>
            ),
        },
        {
          title: 'Status',
          dataIndex: 'status',
          key: 'status',
          render: (status: string) => {
            const base = 'px-2 py-1 rounded-full text-xs font-semibold'

            if (status === 'done') {
              return (
                <span className={`${base} bg-green-100 text-green-700`}>
                  DONE
                </span>
              )
            }

            if (status === 'error') {
              return (
                <span className={`${base} bg-red-100 text-red-700`}>ERROR</span>
              )
            }

            return (
              <span className={`${base} bg-yellow-100 text-yellow-700`}>
                {status.toUpperCase()}
              </span>
            )
          },
        },
        {
          title: 'Archivos',
          key: 'files',
          render: (_: any, item: IJobWorkedExample) => {
            const files = item.payload?.files ?? []
            return <span>{files.length}</span>
          },
        },
        {
          title: 'Resultado',
          key: 'result',
          render: (_: any, item: IJobWorkedExample) => {
            return item.result?.length ? (
              <span className="text-green-600 font-medium">
                {item.result.length} ✔
              </span>
            ) : (
              <span className="text-gray-400">0</span>
            )
          },
        },
        {
          title: 'Error',
          dataIndex: 'error',
          key: 'error',
          render: (error: string | null) =>
            error ? (
              <span className="text-red-500 text-xs break-all">{error}</span>
            ) : (
              <span className="text-gray-400">—</span>
            ),
        },
        {
          title: 'Creado',
          dataIndex: 'created_at',
          key: 'created_at',
          render: (date: string) => dayjs(date).format('DD/MM/YYYY HH:mm:ss'),
        },
        {
          title: 'Procesado',
          dataIndex: 'processed_at',
          key: 'processed_at',
          render: (date: string | null) =>
            date ? (
              dayjs(date).format('DD/MM/YYYY HH:mm:ss')
            ) : (
              <span className="text-gray-400">—</span>
            ),
        },
      ],
      [],
    )
  }
