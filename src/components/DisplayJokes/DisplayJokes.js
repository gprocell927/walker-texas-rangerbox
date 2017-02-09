import React from 'react'
import './DisplayJokes.css'

const displayJokes = (props) => {
  return props.reqJokes
  .map ( (j,i) => {
    console.log(j)
    return ( <p key={ i }>{j}&#9734;</p> )
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
