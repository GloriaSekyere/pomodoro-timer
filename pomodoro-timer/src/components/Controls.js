import React from 'react'

const Controls = () => {
  return (
    <div className="flex flex-col w-full px-8 mx-auto
    md:justify-between md:flex-row md:w-custom26 lg:w-custom28">
      <button 
      className="bg-green-200 hover:bg-green-300 h-14 text-white font-bold relative
      border-black-300
      before:empty-content before:bg-green-100 before:block before:h-0.5 before:w-full
      before:absolute before:top-0 before:rounded-t-full

      after:empty-content after:bg-green-300 after:block after:h-0.5 after:w-full
      after:absolute after:bottom-0

      md:w-24 md:max-h-12">
        Start</button>
      <button className="bg-red-200 hover:bg-red-300 h-14 text-white font-bold relative
      border-red-300

      before:empty-content before:bg-red-100 before:block before:h-0.5 before:w-full
      before:absolute before:top-0

      after:empty-content after:bg-red-300 after:block after:h-0.5 after:w-full
      after:absolute after:bottom-0

      md:w-24 md:max-h-12">
        Stop</button>
      <button className="bg-gray-200 hover:bg-gray-400 h-14 text-black font-bold relative
      border-gray-600
      before:empty-content before:bg-gray-100 before:block before:h-0.5 before:w-full
      before:absolute before:top-0

      after:empty-content after:bg-gray-400 after:block after:h-0.5 after:w-full
      after:absolute after:bottom-0

      md:w-24 md:max-h-12">
        Reset</button>
    </div>
  )
}

export default Controls;

