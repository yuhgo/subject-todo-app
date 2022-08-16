import {
  AddTaskButton,
  TaskCard,
  TaskCards,
} from "@src/pages-component/index/board"
import React, { FC, useState } from "react"
import {
  DragDropContext,
  Droppable,
  DropResult,
  resetServerContext,
} from "react-beautiful-dnd"

/** @package */
export const Board: FC = () => {
  const [taskCardsList, setTaskCardsList] = useState<TaskCards[]>([
    {
      id: "0",
      draggableId: "item0",
    },
  ])

  // react-beautiful-dndのSSR対策
  resetServerContext()

  const reorder = (
    taskCardsList: TaskCards[],
    startIndex: number,
    endIndex: number,
  ) => {
    // タスクを並び替える
    const remove = taskCardsList.splice(startIndex, 1)
    taskCardsList.splice(endIndex, 0, remove[0])
  }

  const onDragEnd = (result: DropResult) => {
    // @ts-ignore
    reorder(taskCardsList, result.source.index, result.destination.index)
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable" direction="horizontal">
        {(provided) => {
          return (
            <div
              className="flex w-[100vh] items-start justify-start"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {taskCardsList.map((taskCard, index) => {
                return (
                  <TaskCard
                    taskTitle={"Todo"}
                    key={taskCard.id}
                    index={index}
                    taskCardsList={taskCardsList}
                    setTaskCardsList={setTaskCardsList}
                    taskCard={taskCard}
                  />
                )
              })}
              {provided.placeholder}
              <AddTaskButton
                taskCardsList={taskCardsList}
                setTaskCardsList={setTaskCardsList}
              />
            </div>
          )
        }}
      </Droppable>
    </DragDropContext>
  )
}
