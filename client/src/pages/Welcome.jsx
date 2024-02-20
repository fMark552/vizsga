import React from 'react'
import '../css/Welcome.css'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Welcome = () => {
  return (
    <div className="welcome_big_div">
      <div className="welcome_text">
        <h1>Log in to your account</h1>
      </div>
      <div className="login_form">
        <Container>
          <form>
            <input
              name="email"
              className="welcome_email"
              placeholder="Email"
              type="email"
            />
            <hr />
            <input
              name="password"
              className="welcome_password"
              placeholder="Password"
              type="password"
            />
            <br />
            <br />
            <button className="login_button" type="submit">
              Log in
            </button>
          </form>
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
