import React, { useState } from 'react'
import '../css/Welcome.css'
import { Container, Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Welcome = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    console.log('Email:', email, 'Password:', password)
  }

  return (
    <div className="welcome_big_div">
      <div className="welcome_text">
        <h1>Log in to your account</h1>
      </div>
      <div className="login_form">
        <Container>
          <Form>
            <Form.Group>
              <Form.Control
                className="rounded-0 welcome_email"
                placeholder="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <hr />
            <Form.Group>
              <Form.Control
                className="rounded-0 welcome_password"
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <br />
            <button
              className="login_button"
              type="submit"
              onClick={handleLogin}
            >
              Login
            </button>
          </Form>
        </Container>
        <br />
        <div className="welcome_create_acc">
          <Link className="welcome_create_acc_link" to="/registration">
            Create your account
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Welcome
