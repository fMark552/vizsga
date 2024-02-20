import axios from 'axios'
import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import '../css/Update.css'
import InputGroup from 'react-bootstrap/InputGroup'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleUser,
  faHouse,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons'
import Logo from '../img/logo.png'

const Update = () => {
  const [newThought, setNewThought] = useState({
    text: '',
  })

  const location = useLocation()
  const navigate = useNavigate()

  const blogId = location.pathname.split('/')[2]

  const handleChange = (e) => {
    setNewThought((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleClick = async (e) => {
    e.preventDefault()
    try {
      await axios.put(`http://localhost:1997/home/${blogId}`, newThought)
      navigate('/account')
    } catch (err) {
      console.log(err)
    }
  }

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
      <div className="rewrite_thought">
        <div className="rewrite_new_thought">
          <textarea
            className="rewrite_text_box "
            type="text"
            rows="10"
            placeholder="Rewrite your thought..."
            name="text"
            onChange={handleChange}
          />
          <div className="word_counter">
            <p className="rewrite_word_count">0/300</p>
          </div>
          <button className="publish_button" onClick={handleClick}>
            Rewrite
          </button>
          <button className="back_to_acc_button">
            <Link className="back_to_acc_link" to="/account">
              Back to your page
            </Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Update
