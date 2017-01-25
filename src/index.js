import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match } from 'react-router';
import App from './App';
import Settings from './components/Settings';
import Favorites from './components/Favorites';
import Jokes from './components/Jokes';

import './index.css';

const Root = () => {
  return (
    <BrowserRouter>
      <div className="router">
        <Match exactly pattern="/" component={App}/>
        <Match exactly pattern="/settings" component={Settings}/>
        <Match exactly pattern="/favorites" component={Favorites}/>
        <Match exactly pattern="/jokes" component={Jokes}/>
      </div>
    </BrowserRouter>
  )
}


render (
  <Root />,
  document.getElementById('root')
);
