import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import useGetUserInfo from './useGetUserInfo'
import {
  isLoginOrRegister,
  isNoNeedUserInfo,
  MANAGE_INDEX_PATHNAME,
  LOGIN_PATHNAME,
} from '../router/index'
import { setUseStrictShallowCopy } from 'immer'

function useNavPage(waitingUserData: boolean) {
  // TODO: 切换登录  从这里给  username 赋值
  const { username } = useGetUserInfo()
  // const username = null
  const { pathname } = useLocation()
  const nav = useNavigate()

  useEffect(() => {
    if (waitingUserData) return
    // 已经登录了
    if (username) {
      if (isLoginOrRegister(pathname)) {
        nav(MANAGE_INDEX_PATHNAME)
      }
      return
    }

    // 未登录
    if (isNoNeedUserInfo(pathname)) {
      return
    } else {
      nav(LOGIN_PATHNAME)
    }
  }, [waitingUserData, username, pathname])
}

export default useNavPage
