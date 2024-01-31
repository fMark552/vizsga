import {
  faChevronDown,
  faCircleUser,
  faComment,
  faHeart,
  faHeartCrack,
  faHouse,
  faMagnifyingGlass,
  faPen,
  faTrashCan,
  faUserPlus,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../css/Account.css'
import Logo from '../img/logo.png'
import InputGroup from 'react-bootstrap/InputGroup'

const Account = () => {
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

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:1997/home/${id}`)
      window.location.reload()
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="acc_big_div">
      <div className="navbar">
        <div className="left_section">
          <ul>
            <li>
              <Link className="navbar_link" to="/">
                <FontAwesomeIcon icon={faHouse} />
              </Link>
            </li>
            <li className="home_link">
              <Link className="navbar_link" to="/">
                <p>Home</p>
              </Link>
            </li>
            <li>
              <Link className="navbar_link" to="/account">
                <FontAwesomeIcon icon={faCircleUser} />
              </Link>
            </li>
            <li>
              <Link className="navbar_link" to="/account">
                <p>Profile</p>
              </Link>
            </li>
          </ul>
        </div>

        <div className="center_section">
          <img src={Logo} height="25px" width="auto" alt="logo" />
        </div>

        <div className="right_section">
          <InputGroup>
            <input className="search_bar" placeholder="Search..." />
            <button className="home_search_button">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </InputGroup>
        </div>
      </div>
      <div className="acc_sidebar">
        <div className="acc_sticky_sidebar">
          <div className="acc_followed">
            <button className="acc_logout_button">Log out</button>
            <hr />
            <button className="acc_delete_user_button">Delete page</button>
          </div>
        </div>
      </div>
      <div className="acc_thoughts_24">
        <h1 className="acc_title">Your page</h1>
      </div>
      <div>
        {blog.map((blog) => (
          <div key={blog.id} className="acc_blog_text">
            <span>
              <Link className="user_acc_link">
                <strong>Márk</strong>
              </Link>
            </span>
            <p className="timestamp">
              <span>2024.01.26 16:28</span>
            </p>
            <hr />
            <p>
              <h5>{blog.text}</h5>
            </p>
            <hr />
            <button className="like_button">
              <span>98</span> <FontAwesomeIcon icon={faHeart} />
            </button>
            <button className="dislike_button">
              <span>5</span> <FontAwesomeIcon icon={faHeartCrack} />
            </button>
            <button className="comment_button">
              <span>23</span> <FontAwesomeIcon icon={faComment} />
            </button>
            <button
              onClick={() => handleDelete(blog.id)}
              className="acc_delete_button"
            >
              <FontAwesomeIcon icon={faTrashCan} />
            </button>
            <button className="acc_update_button">
              <Link className="acc_rewrite_button" to={`/update/${blog.id}`}>
                <FontAwesomeIcon icon={faPen} />
              </Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Account
