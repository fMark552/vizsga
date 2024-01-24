import '../css/Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPlus,
  faHouse,
  faCircleUser,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons'
import Logo from '../img/logo.png'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left_section">
        <ul>
          <li>
            <FontAwesomeIcon icon={faPlus} />
          </li>
          <li>
            <FontAwesomeIcon icon={faHouse} />
          </li>
        </ul>
      </div>

      <div className="center_section">
        <img src={Logo} height="25px" width="auto" alt="logo" />
      </div>

      <div className="right_section">
        <ul className="account">
          <li>
            <FontAwesomeIcon icon={faCircleUser} />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
