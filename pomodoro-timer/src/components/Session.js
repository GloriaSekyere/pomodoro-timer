import React from 'react';
import {Link} from 'react-router-dom';

function Session() {
  return (
    <div className="p-9 divide-x divide-blue-200 flex justify-center items-center">
      <Link to="/" className="session-link">Pomodoro</Link>
      <Link to="/" className="session-link">Short Break</Link>
      <Link to="/" className="session-link">Long Break</Link>
    </div>
  )
}

export default Session;
