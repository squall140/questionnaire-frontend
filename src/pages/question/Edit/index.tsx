import React, { FC } from 'react'
import { useParams } from 'react-router-dom'

const Edit: FC = () => {
  const { questionId = '' } = useParams()
  console.log(questionId)

  return (
    <div>
      <h1>Edit {questionId} </h1>
    </div>
  )
}

export default Edit
