import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match } from 'react-router';
import App from './components/App/App';
import Settings from './components/Settings/Settings';
import Favorites from './components/Favorites/Favorites';
import DisplayJokes from './components/DisplayJokes/DisplayJokes';


import './index.css';

const Root = () => {
  return (
    <BrowserRouter>
      <div className="router">
        <Match exactly pattern="/" component={App}/>
        <Match exactly pattern="/settings" component={Settings}/>
        <Match exactly pattern="/favorites" component={Favorites}/>
        <Match exactly pattern="/jokes" component={DisplayJokes}/>
      </div>
    </BrowserRouter>
  )
}


render (
  <Root />,
  document.getElementById('root')
);
