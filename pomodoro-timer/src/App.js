import Controls from './components/Controls';
import Navbar from './components/Navbar';
import BlueButton from './components/BlueButton';
import { Keyboard } from './components/Keyboard';
import { Notifications } from './components/Notifications';
import { Setings } from './components/Setings';

function App() {
  return (
    <>
      <Navbar />
      <div className="py-7 px-4 divide-x divide-blue-300 flex 
      justify-center items-center w-full mx-auto md:w-custom50">
        <BlueButton width="1/3" padding="1.5" content="Pomodoro" />
        <BlueButton width="1/3" padding="1.5" content="Short Break" />
        <BlueButton width="1/3" padding="1.5" content="Long Break" />
      </div>

      <div className="flex flex-col w-full px-8 mx-auto
    md:justify-between md:flex-row md:w-custom26 lg:w-custom28">
        <Controls 
          backgroundColor="green-200"
          hoverBackgroundColor="green-300"
          borderColor="green-400"
          beforeColor="green-100"
          afterColor="green-300"
          textColor="white">
          Start
        </Controls>

        <Controls 
          backgroundColor="red-200"
          hoverBackgroundColor="red-300"
          borderColor="red-400"
          beforeColor="red-100"
          afterColor="red-300"
          textColor="white">
          Stop
        </Controls>

        <Controls 
          backgroundColor="gray-300"
          hoverBackgroundColor="gray-400"
          borderColor="gray-400"
          beforeColor="gray-100"
          afterColor="gray-400">
          Reset
        </Controls>
      </div>

      <Keyboard />
      <Notifications />
      <Setings />
    </>
  );
}

export default App;
