import React, { Component } from 'react';
import RandomJokes from './components/RandomJokes'
import './App.css';


class App extends Component {

  render() {
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
