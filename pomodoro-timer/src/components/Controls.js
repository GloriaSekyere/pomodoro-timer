import React from 'react'

const Controls = () => {
  return (
    <div className="flex flex-col w-full px-8 mx-auto
    md:justify-between md:flex-row md:w-custom26 lg:w-custom28">
      <button 
      className="bg-green-200 hover:bg-green-300 h-14 text-white font-bold rounded relative
      before:empty-content before:bg-green-100 before:block before:h-0.5 before:w-full
      before:absolute before:top-0
      md:w-24 md:max-h-12">
        Start</button>
      <button className="bg-red-200 hover:bg-red-300 h-14 text-white font-bold rounded
      md:w-24 md:max-h-12">
        Stop</button>
      <button className="bg-gray-200 hover:bg-gray-300 h-14 text-black font-bold rounded
      md:w-24 md:max-h-12">
        Reset</button>
    </div>
  )
}

export default Controls;

