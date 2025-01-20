import React, { FC } from 'react'
import { Layout, Spin } from 'antd'
import { Outlet } from 'react-router-dom'
import Logo from '../components/Logo'
import UserInfo from '../components/UserInfo'
import styles from './MainLayout.module.scss'
import useNavPage from '../hooks/useNavPage'
import useLoadUserData from '../hooks/useLoadUserData'

const { Header, Content, Footer } = Layout

const MainLayout: FC = () => {
  const { waitingUserData } = useLoadUserData()
  useNavPage(waitingUserData)

  return (
    <Layout>
      <Header className={styles.header}>
        <div className={styles.left}>
          <Logo />
        </div>
        <div className={styles.right}>
          <UserInfo />
        </div>
      </Header>
      <Layout className={styles.main}>
        <Content>
          {/* 等待的时候显示Spin，加载完毕后，显示Outlet页面信息 */}
          {waitingUserData ? (
            <div style={{ textAlign: 'center', marginTop: '60px' }}>
              <Spin />
            </div>
          ) : (
            <Outlet />
          )}
        </Content>
      </Layout>
      <Footer className={styles.footer}>小慕问卷 &copy;2023 - present. Created by 双越老师</Footer>
    </Layout>
  )
}

export default MainLayout
