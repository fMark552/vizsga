import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../css/Home.css'
import Button from 'react-bootstrap/esm/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faComment,
  faHeart,
  faHeartCrack,
} from '@fortawesome/free-solid-svg-icons'

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
        <div key={blog.id} className="blog_text">
          User
          <hr />
          {blog.text}
          <hr />
          2024.01.26 16:28
          <hr />
          <Button variant="outline-secondary" className="like_button">
            <span>98</span> <FontAwesomeIcon icon={faHeart} />
          </Button>
          <Button variant="outline-secondary" className="dislike_button">
            <span>5</span> <FontAwesomeIcon icon={faHeartCrack} />
          </Button>
          <Button variant="outline-secondary" className="comment_button">
            <span>23</span> <FontAwesomeIcon icon={faComment} />
          </Button>
        </div>
      ))}
    </div>
  )
}

export default Home
