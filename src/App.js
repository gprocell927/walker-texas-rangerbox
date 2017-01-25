import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      jokes: []
    }
  }

  componentDidMount() {
    const randomJokes =
      axios
        .get('http://api.icndb.com/jokes/random')
        .then(res => res.data.value.joke)
        .then(jokes => this.setState({ jokes }))
  }
  render() {

//the promise console logs as a string, but I cannot get it to render on page (cannot read property then of undefined)

    return (
      <div className="App">
        <div className="App-header">
          <h2>Chuck Norris Joke Machine</h2>
          <button
            className="settings-btn"
            children="Settings"
          />

      </div>
      <div className="random-joke">
        <span>{this.state.jokes}</span>
      </div>
      <form>
        <input
          className="joke-number"
          placeholder="0"/>
          <button
            className="get-jokes-btn"
            children="Get Jokes"
          />
        </form>
      </div>
    );
  }
}

export default App;
