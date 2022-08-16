import { Group, TextInput } from "@mantine/core"
import { useForm } from "@mantine/form"
import { Button } from "@src/lib/mantine"
import React, { FC } from "react"

/** @package */
export const AddTaskForm: FC = () => {
  const form = useForm({
    initialValues: {
      taskTitle: "",
      taskContent: "",
      status: "",
    },

    validate: {
      taskTitle: (value) => {
        return value.length <= 30
          ? "タスクのタイトルは30文字以下で入力してください"
          : null
      },
      taskContent: (value) => {
        return value.length <= 100
          ? "タスクの内容は100文字以下で入力してください"
          : null
      },
      status: (value) => {
        return value.length <= 10
          ? "タスクの内容は10文字以下で入力してください"
          : null
      },
    },
  })

  return (
    <div>
      <form>
        <TextInput
          required
          label="タスクタイトル"
          placeholder="Reactを勉強する"
          {...form.getInputProps("taskTitle")}
        />
        <TextInput
          label="タスク本文"
          placeholder="Reactを勉強する"
          {...form.getInputProps("taskContent")}
        />
        <TextInput
          required
          label="ステータス"
          placeholder="TODO"
          {...form.getInputProps("status")}
        />

        <Group position="right" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </div>
  )
}
