import React from 'react';
import '../index.css';

const Controls = (props) => {
  return (
      <button 
      className={`  
        bg-${props.backgroundColor}
        hover:bg-${props.hoverBackgroundColor}
        border-${props.borderColor}
        before:bg-${props.beforeColor}
        after:bg-${props.afterColor}
        text-${props.textColor}
        control-button`
      }>
        {props.children}
      </button>
  )
}

export default Controls;

