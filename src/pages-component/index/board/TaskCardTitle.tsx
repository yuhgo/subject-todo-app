import React, { FC, useState } from "react"

type TaskCardTitleProps = {
  title: string
}

/** @package */
export const TaskCardTitle: FC<TaskCardTitleProps> = (props) => {
  const { title } = props

  const [isTitleClick, setIsTitleClick] = useState(false)
  const [inputCartTitle, setInputCardTitle] = useState(title)

  const onTitleClick = () => {
    setIsTitleClick(true)
  }

  const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputCardTitle(e.target.value)
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsTitleClick(false)
  }

  const onBlur = () => {
    setIsTitleClick(false)
  }

  return (
    <>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
      <div onClick={onTitleClick} className="w-[60%] cursor-pointer">
        {isTitleClick ? (
          <form onSubmit={onSubmit}>
            <input
              type="text"
              // eslint-disable-next-line jsx-a11y/no-autofocus
              autoFocus={true}
              onChange={onTitleChange}
              value={inputCartTitle}
              onBlur={onBlur}
              maxLength={10}
              className="mt-2 mb-1.5 rounded-md border-none px-1 py-4 text-sm outline-none"
            />
          </form>
        ) : (
          <h3>{inputCartTitle}</h3>
        )}
      </div>
    </>
  )
}
