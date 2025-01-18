import { useParams } from 'react-router-dom'
import { useRequest } from 'ahooks'
import { getQuestionService } from '../services/question'

function useLoadQuestionData() {
  const { questionId = '' } = useParams()
  // const [loading, setLoading] = useState(true)
  // const [questionData, setQuestionData] = useState({})

  // useEffect(() => {
  //   async function fetchData() {
  //     const data = await getQuestionService(questionId)
  //     setQuestionData(data)
  //     setLoading(false)
  //   }
  //   fetchData()
  // }, [])
  // return { loading, questionData }

  async function load() {
    const data = await getQuestionService(questionId)
    return data
  }

  // introduce useRequest from ahooks to fetch data more easily
  const { loading, data, error } = useRequest(load)
  return { loading, data, error }
}

export default useLoadQuestionData
