import { Task, TaskList } from "@src/pages-component/index/board"
import React, { FC } from "react"
import {
  DragDropContext,
  Droppable,
  DropResult,
  resetServerContext,
} from "react-beautiful-dnd"

type TasksProps = {
  taskList: TaskList[]
  setTaskList: React.Dispatch<React.SetStateAction<TaskList[]>>
}

/** @package */
export const Tasks: FC<TasksProps> = (props) => {
  const { setTaskList, taskList } = props

  // react-beautiful-dndのSSR対策
  resetServerContext()

  const reorder = (
    taskList: TaskList[],
    startIndex: number,
    endIndex: number,
  ) => {
    // タスクを並び替える
    const remove = taskList.splice(startIndex, 1)
    taskList.splice(endIndex, 0, remove[0])
  }

  const onDragEnd = (result: DropResult) => {
    // @ts-ignore
    reorder(taskList, result.source.index, result.destination.index)
    // setTaskList(taskList)
  }

  return (
    <ul className="m-0 list-none p-0">
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId={"droppable"}>
          {(provided) => {
            return (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {taskList.map((task, index) => {
                  return (
                    <li key={task.id} className="list-none">
                      <Task
                        index={index}
                        task={task}
                        taskList={taskList}
                        setTaskList={setTaskList}
                      />
                    </li>
                  )
                })}
                {provided.placeholder}
              </div>
            )
          }}
        </Droppable>
      </DragDropContext>
    </ul>
  )
}
