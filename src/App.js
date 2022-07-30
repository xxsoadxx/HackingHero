import React, { useState } from 'react';
import './App.scss';
import Splash from './views/Splash';
import Screen from './views/Screen';
import MazeGame from './views/MazeGame';
import Windows from './views/Windows';
import intro from './assets/introloop.mp3';

const ScreenView = (props) => <Screen {...props} />;
const SplashView = (props) => <Splash {...props} />;
const MazeView = (props) => <MazeGame {...props} />;



const STAGES = [
  { Component: Windows, duration: 0 },
  { Component: SplashView, duration: 3000 },
  { Component: ScreenView, duration: 0, audio: intro },
  { Component: MazeView, duration: 0 },
]

function App() {
  console.log('Render App');
  const [index, setIndex] = useState(0);
  const Stage = STAGES[index];


  const next = () => {
    console.log('Stage Ended');
    setIndex(index + 1);
  }

  return (
    <div className="App">
      { Stage.audio && 
        <audio className='intro' loop autoPlay >
          <source src={Stage.audio} type="audio/mpeg"/>
        </audio> 
      }
      <Stage.Component index={index} next={next} duration={Stage.duration} />
    </div>
  );
}

export default App;
