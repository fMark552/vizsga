import React from 'react'
import '../css/Sidebar.css'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sticky_sidebar">
        <input type="text" placeholder="search..." />
        <button>Go</button>
        <hr />
        <button>Log out</button>
      </div>
    </div>
  )
}

export default Sidebar
