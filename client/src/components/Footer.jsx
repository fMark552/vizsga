import React, { useContext } from 'react'
import '../css/Footer.css'
// import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
  return (
    <div className="footer">
      {/* <div>
        <button className="dark_light_button">
          {dark ? (
            <FontAwesomeIcon icon={faSun} />
          ) : (
            <FontAwesomeIcon icon={faMoon} />
          )}
        </button>
      </div> */}
      <strong>
        <p className="footer_copy_text">&copy; 2024 Fake Twitter</p>
      </strong>
    </div>
  )
}

export default Footer
