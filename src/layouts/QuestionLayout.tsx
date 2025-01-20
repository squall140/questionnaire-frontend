import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'
import styles from './ManageLayout.module.scss'
import useLoadUserData from '../hooks/useLoadUserData'
import useNavPage from '../hooks/useNavPage'

const QuestionLayout: FC = () => {
  // 加载用户信息
  const { waitingUserData } = useLoadUserData()
  // 用户没有登录时，跳转到登录页
  useNavPage(waitingUserData)

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
