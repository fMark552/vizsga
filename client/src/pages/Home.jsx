import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Home = () => {
  const [blog, setBlog] = useState([])

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get('http://localhost:1997/home')
        setBlog(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchBlog()
  }, [])

  return (
    <div>
      {blog.map((blog) => (
        <div key={blog.id} className="blog_text">
          {blog.text}
        </div>
      ))}
    </div>
  )
}

export default Home
