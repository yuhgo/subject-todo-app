import { XIcon } from "@heroicons/react/outline"
import { TaskCards } from "@src/pages-component/index/board"
import React, { FC } from "react"

type TaskCardDeleteButtonProps = {
  taskCardsList: TaskCards[]
  setTaskCardsList: React.Dispatch<React.SetStateAction<TaskCards[]>>
  taskCard: TaskCards
}

/** @package */
export const TaskCardDeleteButton: FC<TaskCardDeleteButtonProps> = (props) => {
  const { setTaskCardsList, taskCard, taskCardsList } = props

  const onTaskCardDelete = (id: string) => {
    // タスクカードを削除する
    setTaskCardsList(
      taskCardsList.filter((e) => {
        return e.id !== id
      }),
    )
  }

  return (
    <div>
      <button
        className="rounded-full border-none bg-transparent"
        onClick={() => {
          return onTaskCardDelete(taskCard.id)
        }}
      >
        <XIcon className="h-5 w-5 text-red-500" />
      </button>
    </div>
  )
}
