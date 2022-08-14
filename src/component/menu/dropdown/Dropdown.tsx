import { Menu } from "@mantine/core"
import { MenuItem } from "@src/component/menu/dropdown/type"
import React, { FC } from "react"

type DropdownProps = {
  menuItems: MenuItem[]
  children: React.ReactNode
}

/** @package */
export const Dropdown: FC<DropdownProps> = (props) => {
  const { children, menuItems } = props

  return (
    <Menu
      shadow="md"
      width={200}
      offset={20}
      position="bottom-end"
      closeOnClickOutside
      closeOnEscape
    >
      <Menu.Target>{children}</Menu.Target>

      <Menu.Dropdown>
        <ul className="m-0 list-none p-0">
          {menuItems.map((item) => {
            return item.isDivider ? (
              <li key={item.id}>
                <Menu.Divider />
              </li>
            ) : item.isLabel ? (
              <li key={item.id}>
                <Menu.Label className={item.className}>{item.text}</Menu.Label>
              </li>
            ) : (
              <li key={item.id}>
                <Menu.Item icon={item.icon}>{item.text}</Menu.Item>
              </li>
            )
          })}
        </ul>
      </Menu.Dropdown>
    </Menu>
  )
}

// item.isDivider ? <Menu.Divider /> : <Menu.Item icon={item.icon}>{item.text}</Menu.Item>
