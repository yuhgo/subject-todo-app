import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "@src/redux/apps"
import { dummySection, Section } from "@src/redux/feature/todo"

const initialState: Section[] = dummySection

/** @package */
export const sectionSlice = createSlice({
  name: "section",
  initialState,
  reducers: {
    addSection: {
      reducer: (state: Section[], action: PayloadAction<Section>) => {
        state.push(action.payload)
      },
      prepare: (sectionID: string, sectionName: string) => {
        return {
          payload: {
            sectionID,
            sectionName,
          },
        }
      },
    },
    // updateSection: (state: Section[], action: PayloadAction<Section[]>) => {},
    resetSection: (state: Section[]) => {
      state.slice(0)
    },
  },
})

/** @package */
export const { addSection, resetSection } = sectionSlice.actions
/** @package */
export const selectSection = (state: RootState) => {
  return state.section
}

/** @package */
export const sectionReducer = sectionSlice.reducer
