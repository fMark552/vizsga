import {
  faComment,
  faHeart,
  faHeartCrack,
  faPenToSquare,
  faUserPlus,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../css/Account.css'

const OtherAccount = () => {
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
      <div className="acc_sidebar2">
        <div className="sticky_sidebar">
          <h5 className="your_friends">
            <span>Márk552</span>'s friends
          </h5>
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
          <h5>
            <span>Márk552</span>'s stats
          </h5>
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
      <div className="acc_thoughts_24">
        <h1 className="acc_title">
          <span>Márk552</span>'s page
        </h1>
      </div>
      <div>
        {blog.map((blog) => (
          <div key={blog.id} className="acc_blog_text">
            <span>
              <Link className="user_acc_link">
                <span>
                  <strong>Márk552</strong>
                </span>
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
          </div>
        ))}
      </div>
    </div>
  )
}

export default OtherAccount
