import type { AppDispatch, RootState } from "@src/redux/apps/store"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"

/** @package **/
export const useAppDispatch = () => {
  return useDispatch<AppDispatch>()
}
/** @package **/
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
