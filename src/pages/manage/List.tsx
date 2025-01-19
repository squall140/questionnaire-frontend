import React, { FC, useEffect, useState } from 'react'
// import { useSearchParams } from 'react-router-dom'
import QuestionCard from '../../components/QuestionCard'
import ListSearch from '../../components/ListSearch'
import styles from './common.module.scss'
import { useTitle } from 'ahooks'
import { Spin } from 'antd'
import useLoadQuestionListData from '../../hooks/useLoadQuestionListData'
import Title from 'antd/es/typography/Title'

const List: FC = () => {
  useTitle('问卷列表 - 问卷系统')
  // const [searchParams] = useSearchParams()
  // console.log('keyword', searchParams.get('keyword'))
  // const [questionList, setQuestionList] = useState(rawQuestionList)
  const { data = {}, loading } = useLoadQuestionListData()
  const { list = [], total = 0 } = data

  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>我的问卷</Title>
        </div>
        <div className={styles.right}>
          <ListSearch />
        </div>
      </div>

      <div className={styles.content}>
        {/* loading */}
        {loading && (
          <div style={{ textAlign: 'center' }}>
            <Spin />
          </div>
        )}
        {!loading &&
          list.length > 0 &&
          list.map((q: any) => {
            const { _id } = q
            return <QuestionCard key={_id} {...q} />
          })}
      </div>

      <div className={styles.footer}>list page footer</div>
    </>
  )
}

export default List
