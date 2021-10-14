import React from 'react';
import {Link} from 'react-router-dom';

function Session() {
  return (
    <div className="py-9 px-4 divide-x divide-blue-300 flex 
    justify-center items-center w-full mx-auto md:w-custom50">
      <Link to="/" className="session-link">Pomodoro</Link>
      <Link to="/" className="session-link">Short Break</Link>
      <Link to="/" className="session-link">Long Break</Link>
    </div>
  )
}

export default Session;
