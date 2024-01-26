import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import '../css/New.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const New = () => {
  const [newThought, setNewThought] = useState({
    text: '',
  })

  const navigate = useNavigate()

  const handleChange = (e) => {
    setNewThought((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleClick = async (e) => {
    e.preventDefault()
    try {
      await axios.post('http://localhost:1997/home', newThought)
      navigate('/')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="new_thought">
      <div className="write_new_thought">
        <textarea
          className="text_box"
          type="text"
          rows="25"
          placeholder="write here..."
          name="text"
          onChange={handleChange}
        />
      </div>
      <p>0/300</p>
      <button className="publish_button" onClick={handleClick}>
        Publish
      </button>
    </div>
  )
}

export default New
