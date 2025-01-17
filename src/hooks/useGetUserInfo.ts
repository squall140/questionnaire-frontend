// import { useSelector } from 'react-redux'
// import { StateType } from '../store'
// import { UserStateType } from '../store/userReducer'

function useGetUserInfo() {
  // const { username, nickname } = useSelector<StateType>(state => state.user) as UserStateType
  const { username, nickname } = { username: 'admin', nickname: '管理员' }
  return { username, nickname }
}

export default useGetUserInfo
