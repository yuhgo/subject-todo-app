import { TaskList } from "@src/pages-component/index/board/type"
import React, { FC } from "react"
import { v4 as uuid } from "uuid"

type TaskAddInputProps = {
  inputText: string
  setInputText: React.Dispatch<React.SetStateAction<string>>
  taskList: TaskList[]
  setTaskList: React.Dispatch<React.SetStateAction<TaskList[]>>
}

/** @package */
export const TaskAddInput: FC<TaskAddInputProps> = (props) => {
  const { inputText, setInputText, setTaskList, taskList } = props

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const taskID = uuid()

    e.preventDefault()
    if (inputText === "") {
      return
    }
    // カードを追加する
    setTaskList([
      ...taskList,
      {
        id: taskID,
        draggableId: `task-${taskID}`,
        text: inputText,
      },
    ])
    setInputText("")
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value)
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={inputText}
          placeholder="add a task"
          onChange={onChange}
          className="w-full rounded border-none p-2.5 text-sm outline-none"
        />
      </form>
    </div>
  )
}
