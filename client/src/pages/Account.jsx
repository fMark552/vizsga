import {
  faCircleUser,
  faComment,
  faHeart,
  faHeartCrack,
  faHouse,
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
      <div className="acc_sidebar">
        <div className="acc_sticky_sidebar">
          <div>
            <div className="acc_user_stats">
              <h4>
                <span>98</span> <FontAwesomeIcon icon={faHeart} />
              </h4>
              <h4>
                <span>5</span> <FontAwesomeIcon icon={faHeartCrack} />
              </h4>
              <h4>
                <span>23</span> <FontAwesomeIcon icon={faComment} />
              </h4>
              <h4>
                <span>13</span> <FontAwesomeIcon icon={faUserPlus} />
              </h4>
            </div>
          </div>
          <hr />
          <div className="acc_followed">
            <table>
              <tbody>
                <tr>
                  <td className="acc_followed_username">
                    <strong>User1</strong>
                  </td>
                  <td className="acc_unfollow_button">
                    <button className="rounded-0">Unfollow</button>
                  </td>
                </tr>
                <hr />
                <tr>
                  <td className="acc_followed_username">
                    <strong>User2</strong>
                  </td>
                  <td className="acc_unfollow_button">
                    <button className="rounded-0">Unfollow</button>
                  </td>
                </tr>
                <hr />
                <tr>
                  <td className="acc_followed_username">
                    <strong>User3</strong>
                  </td>
                  <td className="acc_unfollow_button">
                    <button className="rounded-0">Unfollow</button>
                  </td>
                </tr>
              </tbody>
            </table>
            <hr />
            <button className="acc_logout_button rounded-0">Log out</button>
            <hr />
            <button className="acc_delete_user_button rounded-0">
              Delete page
            </button>
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
              <strong>Márk</strong>
            </span>
            <hr />
            <h5>{blog.text}</h5>
            <hr />
            <span className="timestamp">2024.01.26 16:28</span>
            <hr />
            <button className="acc_like rounded-0">
              <span>98</span> <FontAwesomeIcon icon={faHeart} />
            </button>
            <button className="acc_dislike rounded-0">
              <span>5</span> <FontAwesomeIcon icon={faHeartCrack} />
            </button>
            <button className="acc_comment rounded-0">
              <span>23</span> <FontAwesomeIcon icon={faComment} />
            </button>
            <button
              onClick={() => handleDelete(blog.id)}
              className="acc_delete_button rounded-0"
            >
              <FontAwesomeIcon icon={faTrashCan} />
            </button>
            <button className="acc_update_button rounded-0">
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
