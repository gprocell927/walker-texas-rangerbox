import React from 'react'
import Header from '../Header/Header'
import JokeRequest from '../JokeRequest/JokeRequest'

const displayJokes = (props) => {
  return props.reqJokes
  .map ( (j,i) => {
    console.log(j)
    return ( <p key={ i }>{j}</p> )
  })
}


const DisplayJokes = (props) => {
    return (
    <div>
      <div className="requested-jokes">
        { displayJokes(props) }
      </div>
    </div>
    )
  }

export default DisplayJokes

//On click of requesting jokes gets this error: Warning: setState(...): Can only update a mounted or mounting component. This usually means you called setState() on an unmounted component. This is a no-op. Please check the code for the App component.

//Do I need to mount this component before calling this function?
//Is this not mounted by a button click?

//Does the handleClick call need to be called in the JokeRequest component?

// Feedback from WIll: trying to set state on a component thats been unmounted from the dom

//So it looks like you're treating App as the top level component that controls all the stuff, but in your router you have all routes as siblings

// [22:31]
// So as soon as you navigate away from /, App will be correctly unmounted
//
// [22:33]
// I'm not sure how to best set this up honestly, sharing state between components that get assigned to Routes has always been weird (we were chatting the other day here how to pass props to Route handlers
//
// [22:35]
// Likely you want to make the 3 other routes children of App, and then use some magic with  React.cloneElement to pass props to the child routes
//
// [22:39]
// Here is one person describing your problem (roughly), https://discuss.reactjs.org/t/passing-state-props-to-child-components-loaded-with-react-router/3018
//React router really wants every component that gets passed to a Route to be an "entry point", and not rely on parent components for its state. So in a perfect world it should fetch/manage its own data/behavior.
