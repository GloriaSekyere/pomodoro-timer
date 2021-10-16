import React from 'react'

export const Timer = () => {
  const time = new Date()
  return (
    <div className='my-10 mx-auto w-full h-30 flex justify-center items-center'>
      <span className='font-bold block text-8xl'>{time.getMinutes()}:{time.getSeconds()}</span>
    </div>
  )
}
