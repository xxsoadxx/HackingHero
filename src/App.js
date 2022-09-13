import React, { useEffect, useState } from 'react';
import './App.scss';
import Splash from './views/Splash';
import GenericScreen from './views/GenericScreen';
import GenericCode from './views/GenericCode';
import TakePictureScreen from './views/TakePictureScreen'
import AllReady from './views/AllReady'
import DirectionsGame from './views/DirectionsGame';
import SequenceGame from './views/SequenceGame'
import SoundGame from './views/SoundGame'
//import MazeGame from './views/MazeGame';
import { useStopwatch } from 'react-timer-hook';
import ShipIdle from './assets/idle.gif';
import Q82V from './assets/Q82V.gif';
import Fight from './views/Fight'
import Loop from './assets/loop.mp3';

import LaughtImage from './assets/ogvhs-laughing.gif';
import Level1 from './fights/level1.json';
import heartSVG from './assets/heart.svg';
import Windows from './views/Windows';

import Nave from './assets/Blastoff.m4v'

import Laught from './assets/laught.wav';
const laughtAudio = new Audio(Laught)

const LoopAudio = new Audio(Loop)
LoopAudio.loop = true;
//import intro from './assets/introloop.mp3';
const SequenceGameView = (props) => <SequenceGame {...props} />
const DirectionsGameView = (props) => <DirectionsGame {...props} />
const AllReadyView = (props) => <AllReady {...props} />;
const TakePictureScreenView = (props) => <TakePictureScreen {...props} />;
const GenericScreenView = (props) => <GenericScreen {...props} />;
const SplashView = (props) => <Splash {...props} />;
//const MazeView = (props) => <MazeGame {...props} />;
const GenericCodeView = (props) => <GenericCode {...props} />;
const SoundGameView = (props) => <SoundGame {...props} />
const WindowsView = (props) => <Windows {...props} />
const FightView = (props) => <Fight {...props} />
const STAGES = [
  
  { Component: SplashView, config: {} },
  //{ Component: WindowsView, config: {} },

  { Component: GenericScreenView, config: { video: Nave, contents:['Alright! Everybody get in position, we’re ready for blast off! Godspeed investigators, the future of humanity is in your hands, we’re counting on you!', 1000], showTimer: true , showEnergy: true, speed: 50, endOnVideo: true} },
  
  { Component: FightView, config: { image: Q82V, level: Level1, timer: 10, lifes: 5 } },

  { Component: DirectionsGameView, config: { image: ShipIdle, contents:['Type the correct directions with the arrow keys to reach their planet', 2000] , answer: 'UDLRU', length: 5 , startTimer: true, audio: LoopAudio} },


  { Component: SoundGameView, config: { contents:['Join the sounds to make the melody.', 2000] , answer: '11123456', length: 9 } },

    
  { Component: SequenceGameView, config: { contents:['Type the correct sequence of the escape path.', 2000] , answer: '25413', length: 5 , video:'https://www.w3schools.com/html/mov_bbb.mp4'} },

  



  { Component: AllReadyView, config: { image: Q82V, contents:['All set?'] }},
  { Component: TakePictureScreenView, config: { contents:['Press Space to take a picture'] }},
  


  
  { Component: GenericScreenView, config: { video: 'https://www.w3schools.com/html/mov_bbb.mp4', contents:['Screen 1 Text', 2000], onlyVideo: true } },
  
  { Component: GenericCodeView, config: { image: Q82V, contents:['Enter the code to decrypt the message:', 2000] , answer: '1234', length: 4, hint:'Esta es tu ayuda flaco'} },



  /*{ Component: ScreenView, duration: 0, audio: intro },
  { Component: Windows, duration: 0 },
  { Component: MazeView, duration: 0 },*/
]

function App() {
  const [showEnergy, setShowEnergy] = useState(false);
  const [energy, setEnergy] = useState(3);
  const [startTimer, setStartTimer] = useState(false);
  const [resetTimer, setResetTimer] = useState(0);
  const [showTimer, setShowTimer] = useState(false);
  const [index, setIndex] = useState(0);


  const [showLooser, setShowLooser] = useState(false);
  
  const Stage = STAGES[index];
  console.log('Stage',Stage);


  useEffect(() => {
    if(Stage.config.showTimer) {
      setShowTimer(Stage.config.showTimer);
    } 
    if(Stage.config.showEnergy) {
      setShowEnergy(Stage.config.showEnergy);
    } 

    
  }, [index])

  useEffect(() => {
    if(energy === 0) {
      laughtAudio.play()
      setShowLooser(true)
      const timerGameOver = setTimeout(() => {
        back(1);
        setEnergy(3);
        setShowLooser(false)
      }, 4000)
      return () => clearTimeout(timerGameOver)
    } 
  }, [energy])
  
  const next = () => {
    console.log('Stage Ended');
    setIndex(index + 1);
  }
  const back = (stages) => {
    console.log('Stage back');
    setIndex(index - stages);
  }

  return (
    <div className="App">
      <Stage.Component setEnergy={setEnergy} index={index} next={next} back={back} setStartTimer={setStartTimer} setResetTimer={setResetTimer} config={{...Stage.config}} />

      { showTimer && 
        <div className="timer"> 
         <Timer startTimer={startTimer} resetTimer={resetTimer}/>
        </div>
      }
      {
        showEnergy &&
        <div style={{ position: 'absolute', left: '54px', bottom: '12px'}}>
          ENERGY
          { energy > 0 && [...Array(energy).keys()]?.map((i) => { return (<img src={heartSVG} className="heart" key={i}></img>)}) }
        </div>
        
      }
      {
        showLooser && 
          <div className="looser">
              <div style={{textAlign: 'center'}}>
                <img src={LaughtImage}/>
                <p>You can't beat me insect</p>
              </div>
             
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
          <span>TIME {hours > 9 ? hours : '0' + hours.toString() }</span>:<span>{minutes > 9 ? minutes : '0' + minutes.toString() }</span>:<span>{seconds > 9 ? seconds : '0' + seconds.toString() }</span>
        </div>)
}
