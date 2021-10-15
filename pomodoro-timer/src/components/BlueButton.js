import React from 'react';
import {Link} from 'react-router-dom';

function BlueButton(props) {
  return (
      <Link to="/" 
      className={`blue-button w-${props.width} py-${props.padding} text-${props.size}
      mt-${props.marginTop}`}>
        {props.content}
      </Link>
  )
}

export default BlueButton;
