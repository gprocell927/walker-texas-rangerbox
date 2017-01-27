import React, { Component } from 'react';
import axios from 'axios'
import RandomJokes from './components/RandomJokes'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      numJokes: 0,
      reqJokes: []
    }
  } // end of constructor

  render() {
    const displayJokes = () => {
      this.state.reqJokes
        .map ( j => {
          return ( <p>`${j}`</p> )
         })
      }


    const handleClick = (e) => {
      e.preventDefault()
      axios
        .get(`http://api.icndb.com/jokes/random/${this.state.numJokes}`)
        .then(res => {
          const reqJokes = res.data.value.map( r => r.joke )
          this.setState({ reqJokes }) // sets jokes as an array of jokes
            }
          )
      this.displayJokes()
      // cannot get jokes to display. App.js:33 Uncaught TypeError: _this2.displayJokes is not a function at handleClick 
        } // end of handleClick


    const handleChange = (e) => {
      this.setState({ numJokes: e.target.value })
    } // end of handleChange
    //sets the requested number of jokes to numJokes state

    return (
      <div className="App">
        <div className="App-header">
          <h2>Chuck Norris Joke Machine</h2>
          <button
            className="settings-btn"
            children="Settings"
          />
        </div>
        <RandomJokes />
        <form>
          <input
            className="joke-number"
            placeholder="0"
            onChange={handleChange}
          />
          <button
            className="get-jokes-btn"
            children="Get Jokes"
            onClick={handleClick}
          />
        </form>
        <div className="reqested-jokes">
          {displayJokes}
        </div>
        <button children="Favorites" />
        <span>Click Get Jokes!</span>
      </div>
      )
    }
  }


export default App;
