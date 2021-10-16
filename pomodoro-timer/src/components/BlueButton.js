import React from 'react';
import {Link} from 'react-router-dom';

function BlueButton(props) {
  return (
      <Link to="/" 
      className={`blue-button w-${props.width} py-${props.padding} text-${props.size} lg:text-${props.lgSize}
      mt-${props.marginTop} lg:w-${props.lgWidth}`}>
        {props.content}
      </Link>
  )
}

export default BlueButton;
