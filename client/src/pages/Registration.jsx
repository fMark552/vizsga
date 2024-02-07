import React, { useState } from 'react'
import '../css/Registration.css'
import { Container } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Registration = () => {
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
            />
            <hr />
            <input
              name="email"
              className="reg_email"
              placeholder="Email"
              type="email"
            />
            <hr />
            <input
              name="password"
              className="reg_password"
              placeholder="Password"
              type="password"
            />
            <hr />
            <input
              name="password2"
              className="reg_password_again"
              placeholder="Password again"
              type="password"
            />
          </form>
          <br />
          <button className="reg_button">Create account</button>
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
