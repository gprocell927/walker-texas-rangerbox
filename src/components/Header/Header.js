import React from 'react'
import { Link } from 'react-router'


const Header = () => {
  return (
    <div className="App">
      <div className="App-header">
        <h2>Chuck Norris Joke Machine</h2>
          <button className="settings-btn">
            <Link to="/settings" style={{ textDecoration: 'none'}}>
            Settings
            </Link>
          </button>
      </div>
    </div>
  )
}

export default Header
