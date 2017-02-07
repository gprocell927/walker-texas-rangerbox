import React from 'react'

const FooterText = (props) => {
  const { path } = props
  if (path === '/settings'){
    return null
  } else {
    return (
      <div>
        <span>Click Get Jokes!</span>
      </div>
    )
  }
}
export default FooterText
