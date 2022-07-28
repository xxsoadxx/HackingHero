import React, { useState, useEffect } from 'react';
import './App.scss';
import Splash from './views/Splash';
import Screen from './views/Screen';
import intro from './assets/introloop.mp3';

const ScreenView = (props) => <Screen {...props} />;
const SplashView = (props) => <Splash {...props} />;


const STAGES = [
  { component: SplashView, duration: 3000 },
  { component: ScreenView, duration: 0, audio: intro },
]

function App() {
  const [index, setIndex] = useState(0);
  const Stage = STAGES[index];


  const next = () => {
    console.log('Stage Ended');
    setIndex(index + 1);
  }

  return (
    <div className="App">
      { Stage.audio && 
        <audio class='intro' loop autoPlay >
          <source src={Stage.audio} type="audio/mpeg"/>
        </audio> 
      }
      <Stage.component index={index} next={next} duration={Stage.duration} />
    </div>
  );
}

export default App;
