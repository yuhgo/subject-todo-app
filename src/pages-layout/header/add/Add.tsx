import { PlusIcon } from "@heroicons/react/outline"
import { Modal } from "@mantine/core"
import { Button } from "@src/lib/mantine"
import { AddTaskForm } from "@src/pages-layout/header/add"
import { useAppDispatch, useAppSelector } from "@src/redux/apps"
import {
  changeState as changeStateForHeader,
  selectHeader,
} from "@src/redux/feature/header"
import React, { FC } from "react"

/** @package */
export const Add: FC = () => {
  const dispatch = useAppDispatch()
  const headerSelector = useAppSelector(selectHeader)

  return (
    <>
      <Button
        className="
        m-0
        h-10 w-10
        bg-transparent
        p-0
        shadow-[3px_3px_8px_1px_rgba(113,113,112,0.3)]
        "
        color="gray"
        variant="outline"
        onClick={() => {
          dispatch(
            changeStateForHeader({
              ...headerSelector,
              isOpenAddModal: true,
            }),
          )
        }}
      >
        <PlusIcon className="h-6 w-6 text-gray-600" />
      </Button>

      <Modal
        opened={headerSelector.isOpenAddModal}
        onClose={() => {
          dispatch(
            changeStateForHeader({ ...headerSelector, isOpenAddModal: false }),
          )
        }}
        title="タスクを追加"
        lockScroll
        classNames={{
          header: "items-center justify-center",
          title: "text-xl mr-0 ml-auto",
          close: "mr-0 ml-auto",
        }}
      >
        <AddTaskForm />
      </Modal>
    </>
  )
}
