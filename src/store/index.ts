import { configureStore } from '@reduxjs/toolkit'
import userReducer, { UserStateType } from './userReducer'

export type StateType = {
  user: UserStateType
}

export default configureStore({
  reducer: {
    user: userReducer,

    // 分模块，可扩展
  },
})
