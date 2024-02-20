import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import '../css/Home.css'
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
  faPenToSquare,
  faUserPlus,
  faMoon,
  faSun,
} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import Logo from '../img/logo.png'
import DarkMode from '../components/DarkMode.jsx'

const Home = () => {
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

  const { dark, blackOrWhite } = useContext(DarkMode)

  return (
    <div className={dark ? 'dark' : 'light'}>
      <div className="home_big_div">
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
          </div>
        </div>
        <div className="sidebar3">
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

        <div className="thoughts_24">
          <div className="new_thought">
            <div className="write_new_thought">
              <textarea
                className="text_box"
                type="text"
                rows="5"
                placeholder="Your thoughts..."
                name="text"
                onChange={handleChange}
              />
            </div>
            <div className="word_counter">
              <p className="word_count">0/300</p>
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
                  <strong>Márk552</strong>
                </Link>
                <div className="follow_button_group">
                  <button className="follow_button">
                    <FontAwesomeIcon icon={faUserPlus} />
                  </button>
                  <button className="follow_button_text">Follow</button>
                </div>
                <p className="timestamp">
                  <span>2024.01.26 16:28</span>
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
        {/* <div className="home_pagination">
        <FontAwesomeIcon icon={faCircleChevronLeft} />
        <span>1</span>
        <FontAwesomeIcon icon={faCircleChevronRight} />
      </div> */}
      </div>
    </div>
  )
}

export default Home
