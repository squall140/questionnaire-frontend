import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'
import styles from './ManageLayout.module.scss'

const QuestionLayout: FC = () => {
  return (
    <>
      <p> Question Layout</p>
      <div>
        <Outlet />
      </div>
    </>
  )
}

export default QuestionLayout
