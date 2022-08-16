import {
  TaskCardDeleteButton,
  TaskCards,
  TaskList,
  Tasks,
} from "@src/pages-component/index/board"
import { TaskAddInput } from "@src/pages-component/index/board/TaskAddInput"
import { TaskCardTitle } from "@src/pages-component/index/board/TaskCardTitle"
import React, { FC, useState } from "react"
import { Draggable, resetServerContext } from "react-beautiful-dnd"

type TaskCardProps = {
  taskTitle: string
  index: number
  taskCardsList: TaskCards[]
  setTaskCardsList: React.Dispatch<React.SetStateAction<TaskCards[]>>
  taskCard: TaskCards
}

/** @package */
export const TaskCard: FC<TaskCardProps> = (props) => {
  const { index, setTaskCardsList, taskCard, taskCardsList, taskTitle } = props

  const [inputText, setInputText] = useState<string>("")
  const [taskList, setTaskList] = useState<TaskList[]>([])

  // react-beautiful-dndのSSR対策
  resetServerContext()

  return (
    <Draggable draggableId={taskCard.id} index={index}>
      {(provided) => {
        return (
          <div
            className="mt-2.5 mr-2 min-w-[300px] rounded-md bg-gray-200 px-5 pt-2 pb-5"
            ref={provided.innerRef}
            {...provided.draggableProps}
          >
            <div
              className="flex items-center justify-between"
              {...provided.dragHandleProps}
            >
              <TaskCardTitle title={taskTitle} />
              <TaskCardDeleteButton
                taskCardsList={taskCardsList}
                setTaskCardsList={setTaskCardsList}
                taskCard={taskCard}
              />
            </div>
            <TaskAddInput
              inputText={inputText}
              setInputText={setInputText}
              taskList={taskList}
              setTaskList={setTaskList}
            />
            <Tasks taskList={taskList} setTaskList={setTaskList} />
          </div>
        )
      }}
    </Draggable>
  )
}
