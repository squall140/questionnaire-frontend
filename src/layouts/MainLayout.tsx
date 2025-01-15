import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'

const MainLayout: FC = () => {
  return (
    <div>
      <div>MainLayout header</div>
      <div>
        {/* Outlet is a React Router component that renders child elements into the parent route. */}
        <Outlet />
      </div>
      <div>MainLayout footer</div>
    </div>
  )
}

export default MainLayout
