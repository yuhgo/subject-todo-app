import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit"

// Reducer
// import demoReducer from ''

const reducer = {}

export const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV === "development",
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
