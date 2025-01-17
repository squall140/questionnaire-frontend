import React, { useState, ChangeEvent } from 'react'
import { RouterProvider } from 'react-router-dom'
import routerConfig from './router'
import 'antd/dist/reset.css'
import './App.css'

function App() {
  // const [text, setText] = useState('hello')

  // function handleChange(event: ChangeEvent<HTMLInputElement>) {
  //   setText(event.target.value)
  // }

  return (
    <div className="App">
      <RouterProvider router={routerConfig} />

      {/* 受控组件演示 */}
      {/* <input value={text} onChange={handleChange} />
      <button
        onClick={() => {
          console.log(text)
        }}
      >
        打印
      </button>
      <button onClick={() => setText('world')}>Set</button> */}
    </div>
  )
}

export default App
