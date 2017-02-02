import React, { Component } from 'react'
import axios from 'axios'
import Header from '../Header/Header'
import RandomJokes from '../RandomJokes/RandomJokes'
import DisplayJokes from '../DisplayJokes/DisplayJokes'
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
      .get(`http://api.icndb.com/jokes/random/${this.state.numJokes}?escape=javascript`)
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
    return (
      <div>
        <Header />
        <RandomJokes />
        <DisplayJokes
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
