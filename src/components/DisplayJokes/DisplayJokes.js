import React from 'react'
import { Link } from 'react-router'
import Header from '../Header/Header'

const Jokes = (props) => {
  const { handleInputChange, handleButtonClick, displayRequestedJokes } = props
    return (
    <div>
      <Header />
      <div>
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
      </div>
      <div className="requested-jokes">
        {displayRequestedJokes}
      </div>
    </div>
    )
  }

export default Jokes
