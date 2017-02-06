import React from 'react'
import { Link } from 'react-router'

const JokeRequest = (props) => {
  const  { handleInputChange, handleButtonClick } = props

  return (
    <form>
      <input
        className="joke-number"
        placeholder="0"
        onChange={(e) => handleInputChange(e)}
      />
      <button
        className="get-jokes-btn"
        onClick={(e) => handleButtonClick(e)}
      >
      <Link to='/jokes'
        style={{ textDecoration: 'none' }}>
        Get Jokes
      </Link>
      </button>
    </form>
  )
}

export default JokeRequest
