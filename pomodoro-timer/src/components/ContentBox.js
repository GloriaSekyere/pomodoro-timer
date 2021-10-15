import React from 'react';

export const ContentBox = (props) => {
  return (
    <div 
    className='bg-gray-200 w-11/12 h-auto border-solid border-1 border-gray-400
    mx-auto my-6 p-6'>
      {props.children}
    </div>
  )
}
