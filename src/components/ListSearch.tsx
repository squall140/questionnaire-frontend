import React, { FC, useEffect, useState } from 'react'
import type { ChangeEvent } from 'react'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import { Input } from 'antd'
import { LIST_SEARCH_PARAM_KEY } from '../constant'

const { Search } = Input

const ListSearch: FC = () => {
  const nav = useNavigate()
  const { pathname } = useLocation()

  const [value, setValue] = useState<string>('')
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value)
  }

  // 获取 url 上的参数，并设置到 input value
  const [searchParams] = useSearchParams()
  useEffect(() => {
    // 每当 keyword 变化的时候，更新 value
    const curVal = searchParams.get(LIST_SEARCH_PARAM_KEY) || ''
    setValue(curVal)
  }, [searchParams])

  function handleSearch(value: string) {
    // 跳转页面带参数
    nav({
      pathname,
      search: `?${LIST_SEARCH_PARAM_KEY}=${value}`,
    })
  }

  return (
    <Search
      size="large"
      value={value}
      allowClear
      placeholder="搜索问卷"
      enterButton="搜索"
      onSearch={handleSearch}
      onChange={handleChange}
      style={{ width: '240px' }}
    />
  )
}

export default ListSearch
