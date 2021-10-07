import React from 'react'

const Controls = () => {
  return (
    <div className="flex flex-col w-full px-8 mx-auto
    md:justify-between">
      <button 
      className="bg-green-200 hover:bg-green-300 h-14 text-white font-bold rounded relative
      before:absolute before:top-0 before:h-14 before:rounded before:bg-green-100 before:empty-content">
        Start
      </button>
      <button className="bg-red-200 hover:bg-red-300 h-14 text-white font-bold rounded">Stop</button>
      <button className="bg-gray-200 hover:bg-gray-300 h-14 text-black font-bold rounded">Reset</button>
    </div>
  )
}

export default Controls;
