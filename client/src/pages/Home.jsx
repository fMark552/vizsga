import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../css/Home.css'

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
      {/* <h1 className="thoughts_24">Thoughts of today</h1> */}
      {blog.map((blog) => (
        <div key={blog.id} className="blog_text card">
          {blog.text}
        </div>
      ))}
    </div>
  )
}

export default Home
