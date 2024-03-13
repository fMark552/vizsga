import { useQuery } from '@tanstack/react-query'
import { axiosReq } from '../Axios'
import Tweet from './Tweet'

const Tweets = () => {
  const { isLoading, error, data } = useQuery(['tweets'], () =>
    axiosReq.get('/blogs').then((res) => {
      return res.data
    })
  )

  return (
    <div className="tweets">
      {error
        ? 'Error!'
        : isLoading
        ? 'The data is loading'
        : data.map((blog) => <Tweet blog={blog} key={blog.id} />)}
    </div>
  )
}

export default Tweets
