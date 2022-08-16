import { PlusIcon } from "@heroicons/react/outline"
import { Button } from "@src/lib/mantine"
import { TaskCards } from "@src/pages-component/index/board"
import React, { FC } from "react"
import { v4 as uuid } from "uuid"

type AddTaskButtonProps = {
  taskCardsList: TaskCards[]
  setTaskCardsList: React.Dispatch<React.SetStateAction<TaskCards[]>>
}

/** @package */
export const AddTaskButton: FC<AddTaskButtonProps> = (props) => {
  const { setTaskCardsList, taskCardsList } = props

  const addTaskCard = () => {
    const taskCardID = uuid()
    // タスクカードを追加
    setTaskCardsList([
      ...taskCardsList,
      {
        id: taskCardID,
        draggableId: `item1${taskCardID}`,
      },
    ])
  }

  return (
    <div className="ml-[1%] mt-3">
      <Button
        className="
        m-0
        h-12 w-12
        bg-transparent
        p-0
        shadow-[3px_3px_8px_1px_rgba(113,113,112,0.3)]"
        color="gray"
        variant="outline"
        onClick={addTaskCard}
      >
        <PlusIcon className="h-6 w-6 text-gray-600" />
      </Button>
    </div>
  )
}
