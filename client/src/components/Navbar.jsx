import '../css/Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleUser,
  faGear,
  faHouse,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import Logo from '../img/logo.png'

const Navbar = () => {
  return (
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
              <p className="page_link">Your page</p>
            </Link>
          </li>
          <li>
            <Link className="navbar_link" to="/settings">
              <FontAwesomeIcon icon={faGear} />
            </Link>
          </li>
          <li>
            <Link className="navbar_link" to="/settings">
              <p>Settings</p>
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
        <div>
          <input className="search_bar" placeholder="Search..." />
          <button className="home_search_button">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
