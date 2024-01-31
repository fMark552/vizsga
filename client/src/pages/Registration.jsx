import React, { useState } from 'react'
import '../css/Registration.css'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Registration = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    console.log('Email:', email, 'Password:', password)
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
              className="reg_username"
              placeholder="Username"
              type="text"
              // value={text}
              onChange={(e) => setEmail(e.target.value)}
            />
            <hr />
            <input
              className="reg_email"
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <hr />
            <input
              className="reg_password"
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <hr />
            <input
              className="reg_password_again"
              placeholder="Password again"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </form>
          <br />
          <button className="login_button" type="submit" onClick={handleLogin}>
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
