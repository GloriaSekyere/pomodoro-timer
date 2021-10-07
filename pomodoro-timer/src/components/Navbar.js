import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-200 p-9 border-b-2 border-gray-300 md:h-30 md:p-0 md:flex md:flex-shrink-0 md:items-center">
      <div className="md:flex md:justify-between md:w-custom60 md:px-8 lg:p-0 md:m-auto">
        <Link to="/" className="block text-4xl font-bold">TomatoTimer</Link>
        <div className="divide-y divide-gray-500 md:divide-y-0 md:divide-x md:divide-gray-500 mt-8 md:flex md:justify-end md:flex-grow md:mt-0">
          <Link to="/log" className="nav-link">Log</Link>
          <Link to="/faq" className="nav-link">FAQ</Link>
          <Link to="/settings" className="nav-link">Settings</Link>
          <Link to="/" className="nav-link">Tweet about us!</Link>
        </div>
      </div>
    </nav> 
  );
}

export default Navbar
