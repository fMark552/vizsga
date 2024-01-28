import React from 'react'
import '../index.css'
import Button from 'react-bootstrap/esm/Button'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'

const Account = () => {
  return (
    <div className="big_div">
      <div className="sidebar">
        <div className="sticky_sidebar">
          <p>User</p>
          <hr />
          <InputGroup className="mb-3 search_bar">
            <Form.Control placeholder="Search..." />
            <Button variant="outline-secondary" className="search_button">
              Search
            </Button>
          </InputGroup>
          <hr />
          <Button variant="outline-danger" className="logout_button">
            Log out
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Account
