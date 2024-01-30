import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../css/Home.css'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleChevronLeft,
  faCircleChevronRight,
  faCircleUser,
  faComment,
  faHeart,
  faHeartCrack,
  faHouse,
  faMagnifyingGlass,
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
    <div className="home_big_div">
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
            <Form.Control placeholder="Search..." className="rounded-0" />
            <button className="home_search_button rounded-0">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </InputGroup>
          <hr />
          <select className="sort_dropdown">
            <option value="random">Random</option>
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
            <option value="liked">Most liked</option>
            <option value="disliked">Most disliked</option>
            <option value="commented">Most commented</option>
          </select>
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
            <button className="publish_button rounded-0" onClick={handleClick}>
              Publish
            </button>
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
              <button className="follow_button rounded-0">
                <FontAwesomeIcon icon={faUserPlus} />
              </button>
            </span>
            <hr />
            <p>
              <h5>{blog.text}</h5>
            </p>
            <hr />
            <span className="timestamp">2024.01.26 16:28</span>
            <hr />
            <button className="like_button rounded-0">
              <span>98</span> <FontAwesomeIcon icon={faHeart} />
            </button>
            <button className="dislike_button rounded-0">
              <span>5</span> <FontAwesomeIcon icon={faHeartCrack} />
            </button>
            <button className="comment_button rounded-0">
              <span>23</span> <FontAwesomeIcon icon={faComment} />
            </button>
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
