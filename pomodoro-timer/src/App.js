import { useEffect, useState } from 'react';
import Controls from './components/Controls';
import Navbar from './components/Navbar';
import BlueButton from './components/BlueButton';
import { Keyboard } from './components/Keyboard';
import { Notifications } from './components/Notifications';
import { Setings } from './components/Setings';

function App() {
  const [seconds, setSeconds] = useState(1500);
  const [isRunning, setIsRunning] = useState(true);
  
  useEffect(() => {
    if (isRunning) {
      const id = setInterval(() => {
      setSeconds(seconds => seconds - 1)},
      1000);
      return () => clearInterval(id);
    } 
  },[isRunning]);

  let min = Math.floor(seconds / 60);
  let sec = Math.ceil(seconds % 60);

  const start = () => {
    setIsRunning(true);
    console.log(isRunning);
  }
  const stop = () => {
    setIsRunning(false);
    console.log(isRunning);
  }
  const reset = () => {
    setSeconds(1500);
  }
  return (
    <>
      <Navbar />

      <div className="pt-7 px-4 divide-x divide-blue-300 flex 
      justify-center items-center w-full mx-auto md:w-custom50">
        <BlueButton width="1/3" padding="1.5" content="Pomodoro" />
        <BlueButton width="1/3" padding="1.5" content="Short Break" />
        <BlueButton width="1/3" padding="1.5" content="Long Break" />
      </div>

      <div className='my-10 mx-auto w-full h-30 flex justify-center items-center'>
      <span className='font-bold block text-8xl'>
        {min}:{sec.toString().length < 2 ? `0${sec}`: sec}
      </span>
      </div>

      <div className="flex flex-col w-full px-8 mx-auto
    md:justify-between md:flex-row md:w-custom26 lg:w-custom28">
        <Controls 
          backgroundColor="green-200"
          hoverBackgroundColor="green-300"
          borderColor="green-400"
          beforeColor="green-100"
          afterColor="green-300"
          textColor="white"
          handleClick={start}>
          Start
        </Controls>

        <Controls 
          backgroundColor="red-200"
          hoverBackgroundColor="red-300"
          borderColor="red-400"
          beforeColor="red-100"
          afterColor="red-300"
          textColor="white"
          handleClick={stop}>
          Stop
        </Controls>

        <Controls 
          backgroundColor="gray-300"
          hoverBackgroundColor="gray-400"
          borderColor="gray-400"
          beforeColor="gray-100"
          afterColor="gray-400"
          handleClick={reset}>
          Reset
        </Controls>
      </div>

      <div className="flex flex-col w-full mx-auto
      lg:flex-row lg:justify-between lg:items-start lg:w-custom60">
      <Keyboard />
      <Notifications />
      <Setings />
      </div>
    </>
  );
}

export default App;
