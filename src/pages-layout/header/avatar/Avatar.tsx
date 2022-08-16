import { LogoutIcon, MoonIcon, TrashIcon } from "@heroicons/react/outline"
import { Dropdown } from "@src/component/menu/dropdown"
import { useAppDispatch, useAppSelector } from "@src/redux/apps"
import {
  changeState as changeStateForHeader,
  selectHeader,
} from "@src/redux/feature/header"
import Image from "next/image"
import React, { FC } from "react"

/** @package */
export const Avatar: FC = () => {
  const dispatch = useAppDispatch()
  const headerSelector = useAppSelector(selectHeader)

  return (
    <Dropdown
      menuItems={[
        {
          id: 0,
          icon: <MoonIcon className="h-5 w-5" />,
          text: "テーマ",
          isLabel: false,
          isDivider: false,
        },
        {
          id: 1,
          icon: <LogoutIcon className="h-5 w-5" />,
          text: "サインアウト",
          isLabel: false,
          isDivider: false,
        },
        {
          id: 2,
          isLabel: false,
          isDivider: true,
        },
        {
          id: 3,
          text: "Danger zone",
          className: "text-red-500",
          isLabel: true,
          isDivider: false,
        },
        {
          id: 4,
          icon: <TrashIcon className="h-5 w-5" />,
          text: "Delete all tasks",
          className: "hover:text-red-500",
          isLabel: false,
          isDivider: false,
        },
      ]}
    >
      <button
        className="
        flex items-center rounded-full border-none p-0
        shadow-[3px_3px_8px_1px_rgba(113,113,112,0.3)]
        "
        onClick={() => {
          dispatch(
            changeStateForHeader({
              ...headerSelector,
              isOpenMenu: !headerSelector.isOpenMenu,
            }),
          )
        }}
      >
        <Image
          alt="avatar"
          src="https://firebasestorage.googleapis.com/v0/b/ec-template-45bdd.appspot.com/o/avatar%2Favatar.png?alt=media&token=bb87c697-58bf-483f-8702-a7534a1e7462"
          height={45}
          width={45}
          className="rounded-full"
        />
      </button>
    </Dropdown>
  )
}
