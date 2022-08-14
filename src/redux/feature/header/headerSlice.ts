import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "@src/redux/apps"
import { HeaderState } from "@src/redux/feature/header"

const initialState: HeaderState = {
  isOpenAddModal: false,
  isOpenMenu: false,
}

/** @package */
export const headerSlice = createSlice({
  name: "snackbar",
  initialState,
  reducers: {
    changeState: (state: HeaderState, action: PayloadAction<HeaderState>) => {
      state.isOpenAddModal = action.payload.isOpenAddModal
      state.isOpenMenu = action.payload.isOpenMenu
    },
    resetState: (state: HeaderState) => {
      state.isOpenAddModal = false
      state.isOpenMenu = false
    },
  },
})

/** @package */
export const { changeState, resetState } = headerSlice.actions
/** @package */
export const selectHeader = (state: RootState) => {
  return state.header
}

/** @package */
export const headerReducer = headerSlice.reducer
