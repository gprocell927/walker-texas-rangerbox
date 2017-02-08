import React, { Component } from 'react'
import axios from 'axios'

class Settings extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      firstName: '',
      lastName: '',
      checked: true
    }
  }

  handleNameChange(e) {
    this.setState({ name: e.target.value })
  }

  setName(e) {
    e.preventDefault()
    const splitName = this.state.name.split(' ')
    this.setState({ lastName: splitName[1] })
    console.log(this.state.lastName) //returns empty?? async shenangigans
    this.changeName()
  }

  changeName() {
    axios
      .get(`http://api.icndb.com/jokes/random?firstName=${this.state.firstName}&amp;lastName=${this.state.lastName}`)
      .then(res => res.data.value.joke)
      // .then(customJokes => this.setState({ jokes }))
      }

    handleCheck(e){
      console.log("Button clicked:",e.target.value)
      if(this.state.checked === e.target.checked) {
        this.setState({
          checked: e.target.checked
        })
      }else {
        this.setState({ checked: !e.target.checked })
      }
    }

  render() {
    return (
      <div>
        <form name="settingsForm">
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
            <label className="onRadio">
              <input
                type="radio"
                name="radioBtn"
                value="on"
                checked={this.state.checked}
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
                checked={!this.state.checked}
                name="radioBtn"
                onChange={(e) => this.handleCheck(e)}
              />
                Off
            </label>
          </div>
        </form>
      </div>
    )
  }
}

export default Settings
