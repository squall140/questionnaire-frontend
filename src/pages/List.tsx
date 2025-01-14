import React, { FC, useState } from 'react'
import styles from './List.module.scss'
import QuestionCard from '../components/QuestionCard'

const rawQuestionList = [
  {
    _id: 'q1', //mongodb 的_id
    title: '问卷1',
    isPublished: false,
    isStar: false,
    answerCount: 5,
    createAt: '1月14日 21:30',
  },
  {
    _id: 'q2',
    title: '问卷2',
    isPublished: true,
    isStar: false,
    answerCount: 3,
    createAt: '1月14日 21:30',
  },
  {
    _id: 'q3',
    title: '问卷3',
    isPublished: true,
    isStar: false,
    answerCount: 6,
    createAt: '1月15日 21:30',
  },
  {
    _id: 'q4',
    title: '问卷4',
    isPublished: false,
    isStar: false,
    answerCount: 4,
    createAt: '1月16日 21:30',
  },
]

const List: FC = () => {
  const [questionList, setQuestionList] = useState(rawQuestionList)
  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <h3>我的问卷</h3>
        </div>
        <div className={styles.right}>(搜索)</div>
      </div>

      <div className={styles.content}>
        {questionList.map(q => {
          const { _id } = q
          return <QuestionCard key={_id} {...q} />
        })}
      </div>

      <div className={styles.footer}>footer</div>
    </>
  )
}

export default List
