import { TrashIcon } from "@heroicons/react/outline"
import { TaskList } from "@src/pages-component/index/board/type"
import React, { FC } from "react"
import { Draggable } from "react-beautiful-dnd"

type TaskProps = {
  index: number
  task: TaskList
  taskList: TaskList[]
  setTaskList: React.Dispatch<React.SetStateAction<TaskList[]>>
}

/** @package */
export const Task: FC<TaskProps> = (props) => {
  const { index, setTaskList, task, taskList } = props

  const onDelete = (id: string) => {
    setTaskList(
      taskList.filter((task) => {
        return task.id !== id
      }),
    )
  }

  return (
    <Draggable index={index} draggableId={task.draggableId}>
      {(provided) => {
        return (
          <div
            className="
            mt-3
            flex items-center justify-between
            rounded-md
            bg-white
            py-4
            shadow-xl
            "
            key={task.id}
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <p className="ml-3 text-lg">{task.text}</p>
            <button
              onClick={() => {
                return onDelete(task.id)
              }}
              className="
              mr-2
              cursor-pointer
              rounded-full border-none
              bg-transparent
              p-0
              "
            >
              <TrashIcon className="m-0 h-6 w-6 p-0" />
            </button>
          </div>
        )
      }}
    </Draggable>
  )
}
