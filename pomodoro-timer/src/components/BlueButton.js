import React from 'react';
import {Link} from 'react-router-dom';

function BlueButton(props) {
  return (
      <button 
      onClick={props.handleClick}
      className={`blue-button w-${props.width} py-${props.padding} text-${props.size} lg:text-${props.lgSize}
      mt-${props.marginTop} lg:w-${props.lgWidth}`}>
        {props.content}
      </button>
  )
}

export default BlueButton;
