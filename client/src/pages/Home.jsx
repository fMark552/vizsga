import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import '../css/Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faComment,
  faHeart,
  faHeartCrack,
  faPenToSquare,
  faUserPlus,
} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Home = () => {
  const [characterCount, setCharacterCount] = useState(0)

  const [newThought, setNewThought] = useState({
    text: '',
  })

  const handleChange = (e) => {
    setNewThought((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    const inputText = e.target.value
    const textWithoutSpaces = inputText.replace(/\s/g, '')
    setCharacterCount(textWithoutSpaces.length)
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
        const res = await axios.get('http://localhost:1997/blogs')
        setBlog(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchBlog()
  }, [])

  return (
    <div>
      <div className="home_big_div">
        <div className="all_sidebar_div">
          <div className="sidebar2">
            <div className="sticky_sidebar">
              <h5>Sort</h5>
              <hr />
              <select className="sort_dropdown">
                <option value="random">Random</option>
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
                <option value="liked">Most liked</option>
                <option value="disliked">Most disliked</option>
                <option value="commented">Most commented</option>
              </select>
            </div>
          </div>
          <div className="sidebar">
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
        </div>

        <div className="main_page_content">
          <div className="thoughts_24">
            <div className="new_thought">
              <div className="write_new_thought">
                <textarea
                  maxLength="300"
                  className="text_box"
                  type="text"
                  rows="5"
                  placeholder="Your thoughts..."
                  name="text"
                  onChange={handleChange}
                />
              </div>
              <div className="word_counter">
                <p className="word_count">
                  <span id="character_counter">{characterCount}</span>/300
                </p>
              </div>
              <button className="publish_button" onClick={handleClick}>
                Publish
              </button>
            </div>
          </div>
          <div>
            {blog.map((blog) => (
              <div key={blog.id} className="blog_text">
                <span>
                  <Link className="user_acc_link" to="/other">
                    <strong>{blog.username}</strong>
                  </Link>
                  <div className="follow_button_group">
                    <button className="follow_button">
                      <FontAwesomeIcon icon={faUserPlus} />
                    </button>
                    <button className="follow_button_text">Follow</button>
                  </div>
                  <p className="timestamp">
                    <span>{blog.timestamp}</span>
                  </p>
                </span>
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
      </div>
    </div>
  )
}

export default Home
