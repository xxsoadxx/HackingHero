import React, { useEffect, useState } from 'react';
import './App.scss';
import Splash from './views/Splash';
import GenericScreen from './views/GenericScreen';
import GenericCode from './views/GenericCode';
//import MazeGame from './views/MazeGame';
import { useStopwatch } from 'react-timer-hook';
import Q81V from './assets/Q81V.gif';
import Q82V from './assets/Q82V.gif';
//import Windows from './views/Windows';
//import intro from './assets/introloop.mp3';

const GenericScreenView = (props) => <GenericScreen {...props} />;
const SplashView = (props) => <Splash {...props} />;
//const MazeView = (props) => <MazeGame {...props} />;
const GenericCodeView = (props) => <GenericCode {...props} />;


const STAGES = [
  
  { Component: SplashView, config: {} },
  { Component: GenericScreenView, config: { image: Q81V, contents:['Screen 1 Text', 2000] } },
  { Component: GenericScreenView, config: { image: Q82V, contents:['Screen 2 Text', 2000], showTimer: true } },
  { Component: GenericCodeView, config: { image: Q82V, contents:['Enter the code to decrypt the message:', 2000] , answer: '1234', length: 4, hint:'Esta es tu ayuda flaco', startTimer: true} },



  /*{ Component: ScreenView, duration: 0, audio: intro },
  { Component: Windows, duration: 0 },
  { Component: MazeView, duration: 0 },*/
]

function App() {
  const [startTimer, setStartTimer] = useState(false);
  const [resetTimer, setResetTimer] = useState(0);
  const [showTimer, setShowTimer] = useState(false);
  const [index, setIndex] = useState(0);
  const Stage = STAGES[index];
  console.log('Stage',Stage);


  useEffect(() => {
    if(Stage.config.showTimer) {
      setShowTimer(Stage.config.showTimer);
    } 
  }, [index])
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
      <Stage.Component index={index} next={next} setStartTimer={setStartTimer} setResetTimer={setResetTimer} config={{...Stage.config}} />

      { showTimer && 
        <div className="timer"> 
         <Timer startTimer={startTimer} resetTimer={resetTimer}/>
        </div>
      }
      
    </div>
  );
}

export default App;

const Timer = ({startTimer,resetTimer}) => {
const [offsetTimestamp, setOffsetTimestamp] = useState(new Date());

  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    reset,
  } = useStopwatch({ autoStart: false });

  useEffect(() => {
    if(startTimer) {
      start()
    }
  },[startTimer]);
  useEffect(() => {
    if(resetTimer > 0) {
      console.log('reset timer')
      const newOffset = offsetTimestamp; 
      newOffset.setSeconds(newOffset.getSeconds() + 300)
      setOffsetTimestamp(newOffset);
      reset(offsetTimestamp)
    }
    
  },[resetTimer]);

  return (<div style={{fontSize: '16px'}}>
          <span>{hours > 9 ? hours : '0' + hours.toString() }</span>:<span>{minutes > 9 ? minutes : '0' + minutes.toString() }</span>:<span>{seconds > 9 ? seconds : '0' + seconds.toString() }</span>
        </div>)
}
