import React from 'react'
import { RouterProvider } from 'react-router-dom'
import routerConfig from './router'

function App() {
  return (
    <div className="App">
      <RouterProvider router={routerConfig} />
    </div>
  )
}

export default App
