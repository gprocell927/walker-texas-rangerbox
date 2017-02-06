import React from 'react'
import Header from '../Header/Header'
import JokeRequest from '../JokeRequest/JokeRequest'

const Jokes = (props) => {
  const { displayRequestedJokes } = props
    return (
    <div>
      <Header />
      <JokeRequest />
      <div className="requested-jokes">
        {displayRequestedJokes}
      </div>
    </div>
    )
  }

export default Jokes

//On click of requesting jokes gets this error: Warning: setState(...): Can only update a mounted or mounting component. This usually means you called setState() on an unmounted component. This is a no-op. Please check the code for the App component.

//Do I need to mount this component before calling this function?
//Is this not mounted by a button click?

//Does the handleClick call need to be called in the JokeRequest component?
