import React, { Component } from 'react';
import axios from 'axios'
import RandomJokes from '../RandomJokes/RandomJokes'
import Jokes from '../Jokes/Jokes'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      numJokes: 0,
      reqJokes: []
    }
  } // end of constructor

  displayJokes() {
    return this.state.reqJokes
    .map ( (j,i) => {
      console.log(j)
      return ( <p key={ i }>{j}</p> )
    })
  }

  handleClick (e) {
    e.preventDefault()
    axios
      .get(`http://api.icndb.com/jokes/random/${this.state.numJokes}`)
      .then(res => {
        const reqJokes = res.data.value.map( r => r.joke )
        this.setState({ reqJokes }) // sets jokes as an array of jokes
          }
        )
      } // end of handleClick

   handleChange (e){
     this.setState({ numJokes: e.target.value })
      } // end of handleChange
      //sets the requested number of jokes to numJokes state


  render() {
    console.log(this)
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
        <Jokes
          handleInputChange={ (e) => this.handleChange(e) }
          handleButtonClick={ (e) => this.handleClick(e) }
          displayRequestedJokes={ this.displayJokes() }
        />
        <button children="Favorites" />
        <span>Click Get Jokes!</span>
      </div>
      )
    }
  }


export default App;
