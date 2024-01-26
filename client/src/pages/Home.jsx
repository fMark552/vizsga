import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../css/Home.css'
import '../index.css'
import Button from 'react-bootstrap/esm/Button'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Dropdown from 'react-bootstrap/Dropdown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faComment,
  faHeart,
  faHeartCrack,
} from '@fortawesome/free-solid-svg-icons'

const Home = () => {
  //Sidebar

  const [newThought, setNewThought] = useState({
    text: '',
  })

  const handleChange = (e) => {
    setNewThought((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleClick = async (e) => {
    window.location.reload()
    try {
      await axios.post('http://localhost:1997/home', newThought)
    } catch (err) {
      console.log(err)
    }
  }

  //Fetch

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
      <div className="sidebar">
        <div className="sticky_sidebar">
          <InputGroup className="mb-3 search_bar">
            <Form.Control placeholder="Search..." />
            <Button variant="outline-secondary" className="search_button">
              Search
            </Button>
          </InputGroup>
          <hr />
          <Dropdown className="sort_button">
            <Dropdown.Toggle
              className="sort_button"
              variant="outline-secondary"
            >
              Sort
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item className="sort_button">Newest</Dropdown.Item>
              <Dropdown.Item className="sort_button">Oldest</Dropdown.Item>
              <Dropdown.Item className="sort_button">Random</Dropdown.Item>
              <Dropdown.Item className="sort_button">Most liked</Dropdown.Item>
              <Dropdown.Item className="sort_button">
                Most disliked
              </Dropdown.Item>
              <Dropdown.Item className="sort_button">
                Most commented
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <hr />
          <div className="new_thought">
            <div className="write_new_thought">
              <textarea
                className="text_box"
                type="text"
                rows="10"
                placeholder="Your thoughts..."
                name="text"
                onChange={handleChange}
              />
            </div>
            <p>56/300</p>
            <Button
              variant="outline-secondary"
              className="publish_button"
              onClick={handleClick}
            >
              Publish
            </Button>
          </div>
          <hr />
          <Button variant="outline-danger" className="logout_button">
            Log out
          </Button>
        </div>
      </div>
      <div className="thoughts_24">
        <h1>Aha lorem ipsum</h1>
      </div>
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
