import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { IUserInfo } from '~/features/splash/splash.interfaces'

export interface UserInitState {
  userInfo: IUserInfo | null
  splashDone: boolean
  isAutenticated: boolean
}

const initialState: UserInitState = {
  userInfo: null,
  splashDone: false,
  isAutenticated: false,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserInfo: (state, action: PayloadAction<any | null>) => {
      state.userInfo = action.payload
    },
    handleSplashDone: (state, action: PayloadAction<boolean>) => {
      state.splashDone = action.payload
    },
    handleAutenticated: (state, action: PayloadAction<boolean>) => {
      state.isAutenticated = action.payload
    },
  },
})

export const { setUserInfo, handleAutenticated, handleSplashDone } =
  userSlice.actions

export default userSlice.reducer
