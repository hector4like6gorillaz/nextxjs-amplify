import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './reducers/counterSlice'
import navigationReducer from './reducers/navigationSlice'
import userReducer from './reducers/userSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    navigation: navigationReducer,
    user: userReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
