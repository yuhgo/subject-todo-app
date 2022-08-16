/** @package */
export type Task = {
  taskID: string
  taskTitle: string
  taskContent: string
  sectionID: string
}

/** @package */
export type Section = {
  sectionID: string
  sectionName: string
}

/** @package */
export type AddTaskForm = {
  taskTitle: string
  taskContent: string
  sectionName: string
}
