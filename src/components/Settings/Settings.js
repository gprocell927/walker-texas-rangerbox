import React, { Component } from 'react'
import { Link } from 'react-router'
import RandomJokes from '../RandomJokes/RandomJokes'
import axios from 'axios'


class Settings extends Component {

  setname() {
    
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Chuck Norris Joke Machine</h2>
          <li className="settings-btn">
            <Link to={'/jokes'}
              style={{ textDecoration: 'none'}}>
            Jokes
          </Link>
          </li>
        </div>
        <RandomJokes />
        <form>
          <span>Set Name:</span>
          <input className="name-input"/>
          <button
            children="Set"
            className="set-btn"
            onClick={(e) => setName}
          />
          <button
            children="Reset"
            className="reset-btn"
          />
          <span>Parental Controls: </span>
          <div className="radio">
            <label>
              <input type="radio" value="on" checked={false}/>
                On
            </label>
          </div>
          <div className="radio">
            <label>
              <input type="radio" value="off" checked={false}/>
                Off
            </label>
          </div>
        </form>

      </div>
    )
  }
}

export default Settings;
