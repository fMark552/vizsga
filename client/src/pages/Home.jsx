import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../css/Home.css'
import Button from 'react-bootstrap/esm/Button'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Dropdown from 'react-bootstrap/Dropdown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleChevronLeft,
  faCircleChevronRight,
  faCircleUser,
  faComment,
  faHeart,
  faHeartCrack,
  faHouse,
  faUserPlus,
} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import Logo from '../img/logo.png'

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
      <div className="navbar">
        <div className="left_section">
          <ul>
            <li>
              <Link className="navbar_link" to="/">
                <FontAwesomeIcon icon={faHouse} />
              </Link>
            </li>
          </ul>
        </div>

        <div className="center_section">
          <img src={Logo} height="25px" width="auto" alt="logo" />
        </div>

        <div className="right_section">
          <ul className="account">
            <li>
              <Link className="navbar_link" to="/account">
                <FontAwesomeIcon icon={faCircleUser} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="sidebar">
        <div className="sticky_sidebar">
          <InputGroup className="mb-3 home_search_bar">
            <Form.Control placeholder="Search..." />
            <Button variant="secondary" className="home_search_button">
              Search
            </Button>
          </InputGroup>
          <hr />
          <Dropdown className="sort_button">
            <Dropdown.Toggle className="sort_button" variant="secondary">
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
              variant="primary"
              className="publish_button"
              onClick={handleClick}
            >
              Publish
            </Button>
          </div>
        </div>
      </div>
      <div className="thoughts_24">
        <h1 className="title">Fake twitter</h1>
      </div>
      <div>
        {blog.map((blog) => (
          <div key={blog.id} className="blog_text">
            <span>
              <strong>Márk</strong>
              <Button variant="none">
                <FontAwesomeIcon icon={faUserPlus} />
              </Button>
            </span>
            <hr />
            <p>
              <h5>{blog.text}</h5>
            </p>
            <hr />
            <span className="timestamp">2024.01.26 16:28</span>
            <hr />
            <Button variant="secondary" className="like_button">
              <span>98</span> <FontAwesomeIcon icon={faHeart} />
            </Button>
            <Button variant="secondary" className="dislike_button">
              <span>5</span> <FontAwesomeIcon icon={faHeartCrack} />
            </Button>
            <Button variant="secondary" className="comment_button">
              <span>23</span> <FontAwesomeIcon icon={faComment} />
            </Button>
          </div>
        ))}
      </div>
      {/* <div className="home_pagination">
        <FontAwesomeIcon icon={faCircleChevronLeft} />
        <span>1</span>
        <FontAwesomeIcon icon={faCircleChevronRight} />
      </div> */}
    </div>
  )
}

export default Home
