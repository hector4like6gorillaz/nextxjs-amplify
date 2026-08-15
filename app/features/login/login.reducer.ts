// 🧠 Reducer Base — 	Nombre: Login

export interface LoginState<T = any> {
  loading: boolean
  count: number
  data: T[] | null
}

export const initialStateLogin: LoginState = {
  loading: false,
  count: 0,
  data: null,
}

export type LoginAction<T = any> =
  | { type: 'SET_LIST'; payload: T[] | null }
  | { type: 'SET_COUNTER'; payload: number }
  | { type: 'SET_LOADING'; payload: boolean }

export function LoginReducer<T = any>(state: LoginState<T>, action: LoginAction<T>): LoginState<T> {
  switch (action.type) {
    case 'SET_LIST':
      return { ...state, data: action.payload, loading: false }
    case 'SET_COUNTER':
      return { ...state, count: action.payload }
    case 'SET_LOADING':
      return { ...state, loading: action.payload }
    default:
      return state
  }
}
