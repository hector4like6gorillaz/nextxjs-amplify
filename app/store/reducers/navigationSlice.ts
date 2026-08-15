import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  showMenuMovile: boolean
  collapseDesktop: boolean
}

const initialState: CounterState = {
  showMenuMovile: false,
  collapseDesktop: false,
}

export const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    handleCollapseMovile: (state, action: PayloadAction<boolean>) => {
      state.showMenuMovile = action.payload
    },
    handleCollapseDesktop: (state, action: PayloadAction<boolean>) => {
      state.collapseDesktop = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { handleCollapseMovile, handleCollapseDesktop } =
  navigationSlice.actions

export default navigationSlice.reducer
