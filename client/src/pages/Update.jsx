import axios from 'axios'
import { useState } from 'react'
import Button from 'react-bootstrap/esm/Button'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Update = () => {
  const [newThought, setNewThought] = useState({
    text: '',
  })

  const location = useLocation()
  const navigate = useNavigate()

  const blogId = location.pathname.split('/')[2]

  const handleChange = (e) => {
    setNewThought((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleClick = async (e) => {
    e.preventDefault()
    try {
      await axios.put(`http://localhost:1997/home/${blogId}`, newThought)
      navigate('/account')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div>
      <div className="new_thought">
        <div className="write_new_thought">
          <textarea
            className="text_box"
            type="text"
            rows="10"
            placeholder="Your thoughts..."
            name="text"
            onChange={handleChange}
          />
        </div>
        <p>56/300</p>
        <button
          variant="outline-secondary"
          className="publish_button"
          onClick={handleClick}
        >
          Rewrite
        </button>
        <Button variant="outline-secondary" className="publish_button">
          <Link to="/">Back to the home page</Link>
        </Button>
      </div>
    </div>
  )
}

export default Update
