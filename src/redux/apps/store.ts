import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit"
import { headerReducer } from "@src/redux/feature/header"

const reducer = {
  header: headerReducer,
}

/** @package **/
export const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV === "development",
})

/** @package **/
export type AppDispatch = typeof store.dispatch
/** @package **/
export type RootState = ReturnType<typeof store.getState>
/** @package **/
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
