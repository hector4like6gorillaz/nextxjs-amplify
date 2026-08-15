export interface IBaseApi<T> {
  data: T
}

export interface IPagination<T> {
  results: T
  pagination: {
    currentPage: number
    perPage: number
    totalItems: number
  }
}
