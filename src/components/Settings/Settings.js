import React, { Component } from 'react'
import axios from 'axios'
import './Settings.css'

class Settings extends Component {

  setName(e) {
    e.preventDefault()
    const name = this.refs.nameInput.value
    this.props.setName(name)
  }

  // changeName() {
  //   axios
  //     .get(`http://api.icndb.com/jokes/random?firstName=${this.state.firstName}&amp;lastName=${this.state.lastName}`)
  //     .then(res => res.data.value.joke)
  //     // .then(customJokes => this.setState({ jokes }))
  //     }

  handleCheck(e){
    this.setState({
      checked: e.target.value === 'on'
    })
    this.parentalControls(e)
  }

  parentalControls(e){
    //if on/off is checked, make call to appropriate end points
    if (e.target.value === 'on'){
      axios
        .get('http://api.icndb.com/jokes/random?limitTo=[nerdy]?escape=javascript')
        .then(res => res.data.value.joke)
        .then(jokes => this.setState({ jokes }))
    } else {
      axios
        .get('http://api.icndb.com/jokes/random?limitTo=[explicit]?escape=javascript')
        .then(res => res.data.value.joke)
        .then(jokes => this.setState({ jokes }))
    }
  }

  render() {
    return (
      <div className="settings">
        <form name="settingsForm">
          <span className="setName">Set Name:</span>
          <input
            ref="nameInput"
            className="name-input"
          />
          <button
            children="SET"
            className="set-btn"
            onClick={(e) => this.setName(e)}
          />
          <button
            children="RESET"
            className="reset-btn"
          />
          </form>
          <div className="parentalControls">
            <span>Parental Controls: </span>
            <div className="radio">
              <label className="onRadio">
                <input
                  type="radio"
                  name="radioBtn"
                  value="on"
                  checked={this.props.censorJokes}
                  onChange={((e) => this.handleCheck(e))}
                />
                  On
              </label>
            </div>
            <div className="radio">
              <label className="offRadio">
                <input
                  type="radio"
                  value="off"
                  checked={!this.props.censorJokes}
                  name="radioBtn"
                  onChange={(e) => this.handleCheck(e)}
                />
                  Off
              </label>
            </div>
          </div>
      </div>
    )
  }
}

export default Settings
