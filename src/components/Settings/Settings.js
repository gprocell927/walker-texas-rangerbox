import React, { Component } from 'react'
import { Link } from 'react-router'
import RandomJokes from '../RandomJokes/RandomJokes'
import axios from 'axios'

class Settings extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      firstName: '',
      lastName: ''
    }
  }

  handleNameChange(e) {
    this.setState({ name: e.target.value })
  }

  setName(e) {
    e.preventDefault()
    const splitName = this.state.name.split(' ')
    this.setState({ firstName: splitName[0] })
    this.setState({ lastName: splitName[1] })
    axios
      .get(`http://api.icndb.com/jokes/random?firstName=${this.state.firstName}&amp;lastName=${this.state.lastName}`)
      .then(res => res.data.value.joke)
      // .then(customJokes => this.setState({ jokes }))
      }
//jokes is not defined... how do I set the state and pass it back to it's parent component?


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Chuck Norris Joke Machine</h2>
          <button className="settings-btn">
            <Link to='/jokes'
              style={{ textDecoration: 'none'}}>
            Jokes
          </Link>
        </button>
        </div>
        <RandomJokes />
        <form>
          <span>Set Name:</span>
          <input
            className="name-input"
            onChange={(e) => this.handleNameChange(e)}
          />
          <button
            children="Set"
            className="set-btn"
            onClick={(e) => this.setName(e)}
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
