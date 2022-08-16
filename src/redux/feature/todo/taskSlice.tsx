import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "@src/redux/apps"
import { dummyTask, Task } from "@src/redux/feature/todo"

const initialState: Task[] = dummyTask

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: {
      reducer: (state: Task[], action: PayloadAction<Task>) => {
        state.push(action.payload)
      },
      prepare: (
        taskID: string,
        taskTitle: string,
        taskContent: string,
        sectionID: string,
      ) => {
        return {
          payload: {
            taskID,
            taskTitle,
            taskContent,
            sectionID,
          },
        }
      },
    },
    // updateTask: (state: Task[], action: PayloadAction<Task[]>) => {},
    resetTask: (state: Task[]) => {
      state.slice(0)
    },
  },
})

/** @package */
export const { addTask, resetTask } = taskSlice.actions
/** @package */
export const selectTask = (state: RootState) => {
  return state.task
}

/** @package */
export const taskReducer = taskSlice.reducer
