import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "@src/redux/apps"
import type { AddTaskForm } from "@src/redux/feature/todo"

/** @package */
const initialState: AddTaskForm = {
  taskTitle: "",
  taskContent: "",
  sectionName: "",
}

export const addTaskFormSlice = createSlice({
  name: "addTaskForm",
  initialState,
  reducers: {
    addForm: (state: AddTaskForm, action: PayloadAction<AddTaskForm>) => {
      state.taskTitle = action.payload.taskTitle
      state.taskContent = action.payload.taskContent
      state.sectionName = action.payload.sectionName
    },
    resetForm: (state: AddTaskForm) => {
      state.taskTitle = ""
      state.taskContent = ""
      state.sectionName = ""
    },
  },
})

/** @package */
export const { addForm, resetForm } = addTaskFormSlice.actions
/** @package */
export const selectAddTaskForm = (state: RootState) => {
  return state.addTaskForm
}

/** @package */
export const addTaskFormReducer = addTaskFormSlice.reducer
