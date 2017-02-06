import React from 'react'
import { Link } from 'react-router'
import Header from '../Header/Header'
import JokeRequest from '../JokeRequest/JokeRequest'

const Jokes = (props) => {
  const { displayRequestedJokes } = props
    return (
    <div>
      <Header />
      <JokeRequest />
      <div className="requested-jokes">
        {displayRequestedJokes}
      </div>
    </div>
    )
  }

export default Jokes
