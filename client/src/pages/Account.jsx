import {
  faCircleUser,
  faComment,
  faHeart,
  faHeartCrack,
  faHouse,
  faMagnifyingGlass,
  faPen,
  faPenToSquare,
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
                <p>Your page</p>
              </Link>
            </li>
          </ul>
        </div>

        <div className="center_section">
          <Link to="/">
            <img src={Logo} height="25px" width="auto" alt="logo" />
          </Link>
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
      <div className="mobile_sidebar">
        <div className="acc_sidebar2">
          <div className="sticky_sidebar">
            <h5 className="your_friends">Your friends</h5>
            <hr />
            <table>
              <tbody>
                <tr>
                  <td className="acc_followed_username">
                    <strong>User1</strong>
                  </td>
                  <td>
                    <button className="acc_unfollow_button">Unfollow</button>
                  </td>
                </tr>
                <br />
                <tr>
                  <td className="acc_followed_username">
                    <strong>User2</strong>
                  </td>
                  <td>
                    <button className="acc_unfollow_button">Unfollow</button>
                  </td>
                </tr>
                <br />
                <tr>
                  <td className="acc_followed_username">
                    <strong>User3</strong>
                  </td>
                  <td>
                    <button className="acc_unfollow_button">Unfollow</button>
                  </td>
                </tr>
              </tbody>
            </table>
            <hr />
            <button className="see_all_friend">See all</button>
          </div>
        </div>
        <div className="acc_sidebar3">
          <div className="sticky_sidebar">
            <h5>Your stats</h5>
            <hr />
            <div className="acc_user_stats ">
              <h5>
                <span>98</span> <FontAwesomeIcon icon={faHeart} />
              </h5>
              <h5>
                <span>5</span> <FontAwesomeIcon icon={faHeartCrack} />
              </h5>
              <h5>
                <span>23</span> <FontAwesomeIcon icon={faComment} />
              </h5>
              <h5>
                <span>13</span> <FontAwesomeIcon icon={faUserPlus} />
              </h5>
              <h5>
                <span>57</span> <FontAwesomeIcon icon={faPenToSquare} />
              </h5>
            </div>
          </div>
        </div>
        <div className="acc_sidebar">
          <div className="acc_sticky_sidebar">
            <div className="acc_followed">
              <button className="acc_logout_button">
                <Link to="/welcome">Log out</Link>
              </button>
              <button className="acc_delete_user_button">Delete page</button>
            </div>
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
