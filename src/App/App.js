import React, { Component } from 'react'
import axios from 'axios'
import Header from '../components/Header/Header'
import RandomJokes from '../components/RandomJokes/RandomJokes'
import JokeRequest from '../components/JokeRequest/JokeRequest'
import FavoritesButton from '../components/FavoritesButton/FavoritesButton'
import FooterText from '../components/FooterText/FooterText'
import './App.css'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      numJokes: 0,
      reqJokes: [],
      jokes: [],
      settings: {
        firstName: '',
        lastName: '',
        censorJokes: true
      }
    }
    this.setName = this.setName.bind(this)
  } // end of constructor


  handleClick (e) {
    e.preventDefault()
    axios
      .get(`http://api.icndb.com/jokes/random/${this.state.numJokes}?escape=javascript`)
      .then(res => {
        const reqJokes = res.data.value.map( r => r.joke )
        this.setState({ reqJokes })
         // sets jokes as an array of jokes
          }
        )
      } // end of handleClick

   handleChange (e){
     this.setState({ numJokes: e.target.value })
   } // end of handleChange
      //sets the requested number of jokes to numJokes state

  componentDidMount(){
    axios
      .get(`http://api.icndb.com/jokes/random?firstName=${this.state.settings.firstName}&amp;lastName=${this.state.settings.lastName}?escape=javascript`)
      .then(res => res.data.value.joke)
      .then(jokes => this.setState({ jokes }))
    } // end of handleRandomJoke

  setName(name) {
    const { settings } = this.state
    const firstName = name.split(' ')[0]
    const lastName = name.split(' ')[1]
    this.setState({
      ...this.state,
      settings: {
        ...settings,
        firstName,
        lastName,
      }
    })
  }

// use pathname in a conditional to render/hide
  render() {
    const Children = React.cloneElement(this.props.children, {
		    numJokes: this.state.jokes,
        reqJokes: this.state.reqJokes,
        jokes: this.state.jokes,
        firstName: this.state.settings.firstName,
        lastName: this.state.settings.lastName,
        censorJokes: this.state.settings.censorJokes,
        setName: this.setName
      }
    )
    console.log(this.state.settings)
    return (
      <div>
        <Header
          path={this.props.location.pathname}
        />
        <RandomJokes
          handleLoad={ () => this.handleRandomJoke() }/>
        <JokeRequest
          handleInputChange={ (e) => this.handleChange(e) }
          handleButtonClick={ (e) => this.handleClick(e) }
          path={this.props.location.pathname}
        />
        <FavoritesButton
          path={this.props.location.pathname}
        />
        <FooterText
          path={this.props.location.pathname}
        />
        { Children }
      </div>
      )
    }
  }


export default App;
