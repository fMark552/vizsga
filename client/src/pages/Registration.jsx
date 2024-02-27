import React, { useState } from 'react'
import '../css/Registration.css'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Registration = () => {
  const [input, setInput] = useState({
    username: '',
    email: '',
    password: '',
    password2: '',
  })

  const [err, setErr] = useState(null)

  const handleChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleClick = async (e) => {
    e.preventDefault()
    try {
      await axios.post('http://localhost:1997/registration', input)
    } catch (err) {
      setErr(err.response.data)
    }
  }

  return (
    <div className="reg_big_div">
      <div className="welcome_text">
        <h1>Create your account</h1>
      </div>
      <div className="reg_form">
        <Container>
          <form>
            <input
              name="username"
              className="reg_username"
              placeholder="Username"
              type="text"
              onChange={handleChange}
            />
            <hr />
            <input
              name="email"
              className="reg_email"
              placeholder="Email"
              type="email"
              onChange={handleChange}
            />
            <hr />
            <input
              name="password"
              className="reg_password"
              placeholder="Password"
              type="password"
              onChange={handleChange}
            />
            <hr />
            <input
              name="password2"
              className="reg_password_again"
              placeholder="Password again"
              type="password"
              onChange={handleChange}
            />
          </form>
          {err && err}
          <br />
          <button onClick={handleClick} className="reg_button">
            Create account
          </button>
        </Container>
        <br />
        <div className="reg_create_acc">
          <Link className="welcome_create_acc_link" to="/welcome">
            Log in to your account
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Registration
