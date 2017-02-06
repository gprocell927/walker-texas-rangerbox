import React from 'react'
import Header from '../Header/Header'
import RandomJokes from '../RandomJokes/RandomJokes'
import JokeRequest from '../JokeRequest/JokeRequest'

const Home = (props) => {
  return (
  <div>
    <Header />
    <RandomJokes />
    <JokeRequest
      handleInputChange={ (e) => this.handleChange(e) }
      handleButtonClick={ (e) => this.handleClick(e) }
      displayRequestedJokes={ this.displayJokes() }
    />
    <button children="Favorites" />
    <span>Click Get Jokes!</span>
</div>
  )
}

export default Home
