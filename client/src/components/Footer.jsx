import React, { useContext } from 'react'
import '../css/Footer.css'
import DarkMode from '../components/DarkMode.jsx'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
  const { dark, blackOrWhite } = useContext(DarkMode)

  return (
    <div className="footer">
      <div>
        <button className="dark_light_button" onClick={blackOrWhite}>
          {dark ? (
            <FontAwesomeIcon icon={faSun} />
          ) : (
            <FontAwesomeIcon icon={faMoon} />
          )}
        </button>
      </div>
      <strong>
        <p className="footer_copy_text">&copy; 2024 Fake Twitter</p>
      </strong>
    </div>
  )
}

export default Footer
