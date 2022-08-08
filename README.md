# 選考の技術課題

## 【TODOアプリ】← こちらからアプリに飛べます

### 課題内容
- 制約
  1. CRA（Create React App）等を使って、Reactによる実装を⾏うこと
  2. TypeScriptで実装すること
  3. Reactは（クラスコンポーネントでなく）関数コンポーネントのみで実装すること
  4. 以下のライブラリ等を使⽤しても良い（必要がないと感じた場合は使⽤しなくても
     問題ありません）
     1. Redux
     2. Recoil
     3. Chakra UI などのUIライブラリ
     4. その他のライブラリ
  5. Vercel等を使ってデプロイし、アプリケーションを実際に使えるURLを提供すること

- 実装内容
  1. TODOリストにTODOを追加できる機能
     1. TODOは以下の情報を持つ
        - タイトル
        - 内容
  2. TODOリストの⼀覧表⽰する機能
     1. 未完了TODO → 完了済みTODO の順にTODOが並んでいる状態を初期状態と
     する
     2. TODOリストはcookie 等に保存し、永続化を⾏うこと。
  3. TODOリストをフィルターできる機能
     1. 未完了
     2. 完了済み
  4. TODOを完了済みにできる機能
     1. 完了済みにしたタイミングで
     未完了TODO → 完了済みTODO の順に並び替えが⾏われること
  5. 完了済みのTODOを未完了に戻せる機能
     1. 未完了にしたタイミングで未完了TODO → 完了済みTODO の順に並び替えが⾏われること
  6. 使いやすいUI
     1. 実装したUIの根拠を説明できること
  7. その他、ユーザーにとって有益な機能の実装
     1. あなたが考えるユーザーにとって有益な機能を実装してください


### 使用技術
- フレームワーク
  1. Next.js(React)
- 言語
  1. TypeScript
- 状態管理
  1. Redux Toolkit
- UIライブラリ
  1. TailwindCSS
  2. MantineUI
  3. heroicons
- テスト
  1. ESLint / Prettier
  2. Husky / lint-staged
  3. jest / ReactTestingLibrary
- 
