import React, { useContext, useState } from 'react'
import '../css/Welcome.css'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthCon'

const Login = () => {
  const [input, setInput] = useState({
    username: '',
    password: '',
  })

  const navigate = useNavigate()
  const [err, setErr] = useState(null)

  const handleChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }
  const { Logger } = useContext(AuthContext)

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      await Logger(input)
      navigate('/')
    } catch (error) {
      setErr(error.message)
    }
  }

  return (
    <div className="welcome_big_div">
      <div className="welcome_text">
        <h1>Log in to your account</h1>
      </div>
      <div className="login_form">
        <form>
          <input
            name="username"
            className="welcome_email"
            placeholder="Username"
            type="text"
            onChange={handleChange}
          />
          <hr />
          <input
            name="password"
            className="welcome_password"
            placeholder="Password"
            type="password"
            onChange={handleChange}
          />
          <br />
          {err && err}
          <br />
          <button onClick={handleLogin} className="login_button" type="submit">
            Log in
          </button>
        </form>
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

export default Login
