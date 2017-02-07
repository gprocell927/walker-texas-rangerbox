import React from 'react'

const FavoritesButton = (props) => {
  const { path } = props
  if (path === '/settings'){
    return null
  } else {
    return (
      <div>
        <button children="Favorites" />
        <span>Click Get Jokes!</span>
      </div>
    )
  }
}
export default FavoritesButton