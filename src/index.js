import React from 'react'
import { render } from 'react-dom'
import { IndexRedirect, Router, Route, browserHistory } from 'react-router'
import App from './App/App'
import Settings from './components/Settings/Settings'
import Favorites from './components/Favorites/Favorites'
import DisplayJokes from './components/DisplayJokes/DisplayJokes'
import './index.css'


render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRedirect to="/jokes" />
      <Route path="/settings" component={Settings}/>
      <Route path="/favorites" component={Favorites}/>
      <Route path="/jokes" component={DisplayJokes}/>
    </Route>
  </Router>
  ,document.getElementById('root'))
