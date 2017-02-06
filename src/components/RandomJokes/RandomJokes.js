import React, { Component } from 'react'
import axios from 'axios'

class RandomJokes extends Component {

  constructor(props){
    super(props)
    this.state = {
      jokes: []
    }
  }

componentDidMount() {
      axios
        .get('http://api.icndb.com/jokes/random?escape=javascript')
        .then(res => res.data.value.joke)
        .then(jokes => this.setState({ jokes }))
} // move jokes and componentDidMount to app

render() {
  return (
      <div className="random-joke">
        <span>{this.state.jokes}</span>
      </div>
    )
  }
}

export default RandomJokes;
