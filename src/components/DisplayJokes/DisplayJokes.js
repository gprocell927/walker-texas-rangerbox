import React from 'react'

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
