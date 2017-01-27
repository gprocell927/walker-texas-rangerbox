import React from 'react';


const Jokes = (props) => {
  const { handleInputChange, handleButtonClick, displayRequestedJokes } = props
    return (
      <div className = "Jokes">
        <form>
          <input
            className="joke-number"
            placeholder="0"
            onChange={(e) => handleInputChange(e)}
          />
          <button
            className="get-jokes-btn"
            children="Get Jokes"
            onClick={(e) => handleButtonClick(e)}
          />
      </form>
      <div className="requested-jokes">
        {displayRequestedJokes}
      </div>
    </div>
    );
  }

export default Jokes;
