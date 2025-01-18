import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getQuestionService } from '../services/question'

function useLoadQuestionData() {
  const { questionId = '' } = useParams()
  const [loading, setLoading] = useState(true)
  const [questionData, setQuestionData] = useState({})

  useEffect(() => {
    async function fetchData() {
      const data = await getQuestionService(questionId)
      setQuestionData(data)
      setLoading(false)
    }
    fetchData()
  }, [])

  return { loading, questionData }
}

export default useLoadQuestionData
