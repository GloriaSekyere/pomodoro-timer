import React from 'react';

export const ContentBox = (props) => {
  return (
    <div 
    className='bg-gray-200 w-11/12 h-auto border-solid border-1 border-gray-400
    mx-auto mt-6 p-6 lg:w-custom18'>
      {props.children}
    </div>
  )
}
