import { Table, type TableProps } from 'antd'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { IoFileTrayFull } from 'react-icons/io5'
import { Fragment } from 'react/jsx-runtime'

interface TableCustomProps<T> extends TableProps<T> {
  loading?: boolean
}

const TableCustom = <T extends object>({
  className = '',
  locale,
  loading,
  ...rest
}: TableCustomProps<T>) => {
  return (
    <div
      className=" w-full rounded-xl border bg-white border-gray-200 shadow-sm overflow-hidden dark:bg-dark-div! dark:border-dark-border! dark:shadow-[0_8px_30px_rgba(0,0,0,0.6)]!
        /* HEADER */
        dark:[&_.ant-table-thead>tr>th]:bg-dark-red!
        dark:[&_.ant-table-thead>tr>th]:text-gray-200!
        dark:[&_.ant-table-thead>tr>th]:border-dark-border!
        /* BODY */
        dark:[&_.ant-table-tbody>tr>td]:bg-dark-div!
        dark:[&_.ant-table-tbody>tr>td]:text-gray-300!
        dark:[&_.ant-table-tbody>tr>td]:border-dark-border!
        /* ROW HOVER */
        dark:[&_.ant-table-tbody>tr:hover>td]:bg-dark-modal!
        /* EMPTY */
        dark:[&_.ant-empty-description]:text-gray-400!
        /* PAGINATION */
        dark:[&_.ant-pagination]:bg-dark-div!
        dark:[&_.ant-pagination-item]:bg-dark-modal!
        dark:[&_.ant-pagination-item]:border-dark-border!
        dark:[&_.ant-pagination-item>a]:text-gray-200!
        dark:[&_.ant-pagination-item-active]:bg-dark-red!
        dark:[&_.ant-pagination-item-active]:border-primary!
        dark:[&_.ant-pagination-item-active>a]:text-white!
        dark:[&_.ant-pagination-prev_.ant-pagination-item-link]:bg-dark-modal!
        dark:[&_.ant-pagination-next_.ant-pagination-item-link]:bg-dark-modal!
        dark:[&_.ant-pagination-prev_.ant-pagination-item-link]:border-dark-border!
        dark:[&_.ant-pagination-next_.ant-pagination-item-link]:border-dark-border!
        dark:[&_.ant-pagination-prev_.anticon]:text-gray-200!
        dark:[&_.ant-pagination-next_.anticon]:text-gray-200!
        dark:[&_.ant-pagination-item:hover]:border-dark-red!
        dark:[&_.ant-pagination-prev:hover_.ant-pagination-item-link]:border-primary!
        dark:[&_.ant-pagination-next:hover_.ant-pagination-item-link]:border-primary!
      "
    >
      <Table<T>
        {...rest}
        loading={loading}
        className={className}
        locale={{
          emptyText: (
            <div className="flex flex-col items-center gap-[1rem] py-10">
              {loading ? (
                <Fragment>
                  <AiOutlineLoading3Quarters className="fill-primary animate-spin w-12 h-auto" />
                  <p className="font-AktivBold! text-2xl text-gray-700 dark:text-gray-200!">
                    Cargando datos
                  </p>
                </Fragment>
              ) : (
                <Fragment>
                  <IoFileTrayFull className="fill-primary w-20 h-auto" />
                  <p className="font-AktivBold! text-2xl text-gray-700 dark:text-gray-200!">
                    No hay información disponible
                  </p>
                </Fragment>
              )}
            </div>
          ),
          ...locale,
        }}
      />
    </div>
  )
}

export default TableCustom
