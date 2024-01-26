import React, { useState } from 'react'
import '../css/Sidebar.css'
import axios from 'axios'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Dropdown from 'react-bootstrap/Dropdown'

const Sidebar = () => {
  const [newThought, setNewThought] = useState({
    text: '',
  })

  const handleChange = (e) => {
    setNewThought((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleClick = async (e) => {
    window.location.reload()
    try {
      await axios.post('http://localhost:1997/home', newThought)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="sidebar">
      <div className="sticky_sidebar">
        <InputGroup className="mb-3 search_bar">
          <Form.Control placeholder="Search..." />
          <Button variant="outline-secondary" className="search_button">
            Search
          </Button>
        </InputGroup>
        <hr />
        <Dropdown className="sort_button">
          <Dropdown.Toggle className="sort_button" variant="outline-secondary">
            Sort
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item className="sort_button">Newest</Dropdown.Item>
            <Dropdown.Item className="sort_button">Oldest</Dropdown.Item>
            <Dropdown.Item className="sort_button">Random</Dropdown.Item>
            <Dropdown.Item className="sort_button">Most liked</Dropdown.Item>
            <Dropdown.Item className="sort_button">Most disliked</Dropdown.Item>
            <Dropdown.Item className="sort_button">
              Most commented
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <hr />
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
          <Button
            variant="outline-secondary"
            className="publish_button"
            onClick={handleClick}
          >
            Publish
          </Button>
        </div>
        <hr />
        <Button variant="outline-danger" className="logout_button">
          Log out
        </Button>
      </div>
    </div>
  )
}

export default Sidebar
