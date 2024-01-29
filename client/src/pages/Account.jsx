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
import Button from 'react-bootstrap/esm/Button'
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
          <h2>Márk</h2>
          <hr />
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
                    <Button variant="outline-danger">Unfollow</Button>
                  </td>
                </tr>
                <hr />
                <tr>
                  <td className="acc_followed_username">
                    <strong>User2</strong>
                  </td>
                  <td className="acc_unfollow_button">
                    <Button variant="outline-danger">Unfollow</Button>
                  </td>
                </tr>
                <hr />
                <tr>
                  <td className="acc_followed_username">
                    <strong>User3</strong>
                  </td>
                  <td className="acc_unfollow_button">
                    <Button variant="outline-danger">Unfollow</Button>
                  </td>
                </tr>
                <hr />
              </tbody>
            </table>
            <hr />
            <Button variant="danger" className="acc_logout_button">
              Log out
            </Button>
            <hr />
            <Button variant="outline-danger" className="acc_delete_user_button">
              Delete account
            </Button>
          </div>
        </div>
      </div>
      <div className="acc_thoughts_24">
        <h1 className="acc_title">My account</h1>
      </div>
      <div>
        {blog.map((blog) => (
          <div key={blog.id} className="acc_blog_text">
            <span>
              <strong>Márk</strong>{' '}
              <Button variant="none">
                <FontAwesomeIcon icon={faUserPlus} />
              </Button>
            </span>
            <hr />
            <h5>{blog.text}</h5>
            <hr />
            <span className="timestamp">2024.01.26 16:28</span>
            <hr />
            <Button variant="secondary" className="acc_like">
              <span>98</span> <FontAwesomeIcon icon={faHeart} />
            </Button>
            <Button variant="secondary" className="acc_dislike">
              <span>5</span> <FontAwesomeIcon icon={faHeartCrack} />
            </Button>
            <Button variant="secondary" className="acc_comment">
              <span>23</span> <FontAwesomeIcon icon={faComment} />
            </Button>
            <Button
              onClick={() => handleDelete(blog.id)}
              variant="danger"
              className="acc_delete_button"
            >
              <FontAwesomeIcon icon={faTrashCan} />
            </Button>
            <Button variant="secondary" className="acc_update_button">
              <Link className="acc_rewrite_button" to={`/update/${blog.id}`}>
                <FontAwesomeIcon icon={faPen} />
              </Link>
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Account
