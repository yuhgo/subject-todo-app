import { Board } from "@src/pages-component/index/board"
import React from "react"

/** @package **/
export const Index: React.FC = () => {
  return (
    <div className="p-2">
      {/*<h1>Trello風アプリ</h1>*/}
      <Board />
    </div>
  )
}
