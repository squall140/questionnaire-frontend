import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'

const Home: FC = () => {
  const nav = useNavigate()

  function clickHandler() {
    // nav('/login')
    nav({
      pathname: '/login',
      search: '?name=zhangsan',
    })
  }

  return (
    <div>
      <p>Home</p>
      <div>
        <button onClick={clickHandler}>登录</button>
      </div>
    </div>
  )
}

export default Home
