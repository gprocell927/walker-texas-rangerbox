import React from 'react'
import { Link } from 'react-router'
import './SettingsHeader.css'

const SettingsHeader = () => {
  return (
    <div className="App">
      <div className="App-header">
        <h2>Chuck Norris Joke Machine</h2>
          <button className="jokes-btn">
            <Link to='/jokes'
             style={{ textDecoration: 'none'}}>
            Jokes
            </Link>
          </button>
      </div>
    </div>
  )
}

export default SettingsHeader
