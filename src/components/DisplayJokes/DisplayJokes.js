import React from 'react';

const Jokes = (props) => {
  const { handleInputChange, handleButtonClick, displayRequestedJokes } = props
    return (
    <div>
      <div>
        <form>
          <input
            className="joke-number"
            placeholder="0"
            onChange={(e) => handleInputChange(e)}
          />
          <button
            className="get-jokes-btn"
            onClick={(e) => handleButtonClick(e)}
            children="Get Jokes"
          />
        </form>
      </div>
      <div className="requested-jokes">
        {displayRequestedJokes}
      </div>
    </div>
    );
  }

export default Jokes;
