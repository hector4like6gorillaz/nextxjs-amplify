import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './reducers/counterSlice'
import navigationReducer from './reducers/navigationSlice'
import userReducer from './reducers/userSlice'

// A store factory instead of a module-level singleton: the App Router can
// render on the server, and a shared singleton would leak state between
// requests there. StoreProvider calls this once per component tree.
export const makeStore = () => {
  return configureStore({
    reducer: {
      counter: counterReducer,
      navigation: navigationReducer,
      user: userReducer,
    },
  })
}

// Infer the `RootState` and `AppDispatch` types from the store itself
export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
