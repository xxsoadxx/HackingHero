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
import Q81V from './assets/Q81V.gif';
import Fight from './views/Fight'
import Loop from './assets/loop.mp3';
import KeyPress from './components/KeyPress';
import Level1 from './fights/level1.json';
import finalLevel from './fights/final.json';
import heartSVG from './assets/heart.svg';
import Windows from './views/Windows';
import Crater from './assets/crater.png';
import Nave from './assets/Blastoff.m4v'
import speed from './assets/speed.gif';
import footage from './assets/footage.m4v'

import Laught from './assets/laught.wav';

import bert_still from './assets/bert_still.png';
import bert_laugh from './assets/bert_laugh.gif';
import bert_talking from './assets/bert_talking.gif';
import equalizer from './assets/equalizer.png';
import timerImg from './assets/timer.png';
import energyImg from './assets/energy.png';
import questionImg from './assets/question.png';
import bossImg from './assets/boss_transp.gif';
import colorscodeImg from './assets/colorscode.png';
import map from './assets/map.png';
import spaceship from './assets/spaceship.png';
import mapquest from './assets/mapquest.png';

import toto_still from './assets/toto_still.png';
import toto_laugh from './assets/toto_laugh.gif';
import toto_talking from './assets/toto_talk.gif';
import codephone from './assets/codephone.png';
import book from './assets/book.png';
import phone from './assets/phone-final.gif';
import laser_hidden from './assets/laser_hidden.gif';
import neoncity from './assets/neoncity.gif';
import ringring from './assets/ringring.png';

import snd_phone from './assets/snd_phone.wav';

import message from './assets/message.webp';
import mus_dialup_3 from './assets/mus_dialup_3.wav';
import laser_still from './assets/laser_still.gif';
import laser_laugh_fgt from './assets/laser_laugh_fgt.gif';

import laser_hit from './assets/laser_hit.gif';
import laser_new_talk_fgt from './assets/laser_new_talk_fgt.gif';

import landing_ship from './assets/landing.m4v';
import laser_new_talk_otro from './assets/laser_new_talk_otro.gif';

import Deny from './assets/wrong.mp3';

import Left from './assets/left.png';
import Right from './assets/right.png';
import Up from './assets/up.png';
import Down from './assets/down.png';
import LeftGif from './assets/left.gif';
import RightGif from './assets/right.gif';
import UpDownGif from './assets/up_down.gif';
import EndGif from './assets/end.gif';
import DenyGif from './assets/wrong.gif';
const mus_dialup_3Audio = new Audio(mus_dialup_3)
mus_dialup_3Audio.loop = true;
const laughtAudio = new Audio(Laught)

const LoopAudio = new Audio(Loop)
LoopAudio.loop = true;

const snd_phoneAudio = new Audio(snd_phone)
snd_phoneAudio.loop = true;
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
////
/*
{ Component: GenericScreenView, config: { speed: 50, style:{ width: '200px'}, image:timerImg, contents:[`Oh yes, that right there is your TIMER.\n The team completing the game with the less amount of time, wins.\n Don’t worry, cutscenes stop the timer, so relax and enjoy retro magic.`, 2000], showTimer: true } },

{ Component: GenericCodeView, config: { style: { width: '90%'}, image: colorscodeImg, contents:['Enter the code to decrypt the message:', 2000] , answer: '5413', length: 4, hint:() => (<>You shoud focus on colors.<br/><br/><br/>Order is the key.</>), startTimer: true } },
{ Component: FightView, config: {talk: bert_talking, laugh: bert_laugh, still: bert_still, level: Level1, timer: 40, lifes: 4 } },
  
{ Component: SequenceGameView, config: { contents:['Type the correct sequence of the escape path.', 2000] , answer: '25413', length: 5 , video:footage} },
  */


  ////
  { Component: GenericScreenView, config: { speed: 50, image:equalizer, contents:[`Hi!\n\n This is an audiovisual experience, so please turn on your speakers. Select stuff with the number keys, press enter to confirm or continue.`, 2000] } },
  { Component: GenericScreenView, config: { speed: 50, style:{ width: '200px'}, image:timerImg, contents:[`Oh yes, that right there is your TIMER.\n The team completing the game with the less amount of time, wins.\n Don’t worry, cutscenes stop the timer, so relax and enjoy retro magic.`, 2000], showTimer: true } },
  { Component: GenericScreenView, config: { speed: 50, style:{ width: '300px'}, image:energyImg, contents:[`Aaaand that’s your ENERGY.\n Yes, there are battles in this game so give the control to the most agile member of your team.\n If you lose a battle, your energy replenishes but you’ll have to start over again and the TIMER keeps going!`, 2000], showEnergy: true } },
  { Component: AllReadyView, config: { image: questionImg, contents:['All set?'] }},
  { Component: TakePictureScreenView, config: {  speed: 50, contents:['Alright! Before we start, let’s take a picture of the team!\n\n Press Space when you’re all in there'] }},
  { Component: GenericScreenView, config: { speed: 50, useProfileImage: true, contents:[`Wow, what a great photograph! It will always bring back the fondest of memories...\n\n Get ready!`, 2000] } },
  { Component: GenericScreenView, config: { speed: 50,style:{ width: '700px'}, image:neoncity, contents:[`Neon City, a retrofuturistic town (if that can even be a thing). Monday, 3 PM.\n\n Just another regular day at the Investigator’s office.`, 2000] } },
  { Component: GenericScreenView, config: { speed: 50,style:{ width: '200px',  animation: 'shake 0.5s 400'}, audio:snd_phoneAudio,image:ringring, contents:[`RIIIING, RIIIING!\n RIIIIIG, RIIIIING!`, 2000] } },
  { Component: GenericScreenView, config: { speed: 50, useProfileImage: true, contents:[`Ain’t you gonna pick up?\n Phone’s ringing in case you didn’t notice... must be the boss.`, 2000] } },
  { Component: GenericScreenView, config: { speed: 50, style:{ width: '250px'},image:bossImg, contents:[`Was about time kid, there’s something serious going on.\n I got a call from the PRESIDENT saying their intel agency detected unusual activity on their network.`, 2000] } },
  { Component: GenericScreenView, config: { speed: 50, useProfileImage: true, contents:[`Business as usual...\n\nLet me guess, another trojan virus.`, 2000] } },
  { Component: GenericScreenView, config: { speed: 50, style:{ width: '250px'},image:bossImg, contents:[`Nope, seems like someone or something is trying to intercept some packets on the TCP but there’s no IP address, it seems to be coming from outer space!`, 2000] } },
  { Component: GenericScreenView, config: { speed: 50, useProfileImage: true, contents:[`Woah, outer space?`, 2000] } },
  { Component: GenericScreenView, config: { speed: 50, style:{ width: '250px'},image:bossImg, contents:[`They were able to intercept what appears to be a message, but it’s encrypted and they’re not being able to crack it up, that’s why they called us, the best PI office in the world. Could you take a look?`, 2000] } },
  { Component: GenericScreenView, config: { speed: 50, useProfileImage: true, contents:[`You got it!`, 2000] } },
  { Component: GenericScreenView, config: { speed: 50, style:{ width: '250px'},image:bossImg, contents:[`It’s on its way. please hurry!`, 2000] } },
  { Component: GenericCodeView, config: { style: { width: '90%'}, image: colorscodeImg, contents:['Enter the code to decrypt the message:', 2000] , answer: '5413', length: 4, hint:() => (<>You shoud focus on colors.<br/><br/><br/>Order is the key.</>), startTimer: true } },
  { Component: GenericScreenView, config: { speed: 50, useProfileImage: true, contents:[`We did it! What does it say?`, 2000] } },
  { Component: GenericScreenView, config: { speed: 50, image:message, contents:[`“Everything is working just as you planned, master. Prepare phase 2”\n\n“Master”!? OMG they’re planning an invasion!`, 2000] } },
  { Component: GenericScreenView, config: { speed: 50, style:{ width: '250px'},image:bossImg, contents:[`There’s some kind of number from the sender, but this isn’t an Earth country code, would it work if I call from here?`, 2000] } },
  { Component: GenericScreenView, config: { speed: 50, audio:mus_dialup_3Audio, contents:[`Calling...`, 2000] } },
  { Component: GenericScreenView, config: { speed: 50, style:{ width: '250px'}, image:bert_talking, contents:[`Hello, who’s this? How did you get this number?`, 2000] } },
  { Component: GenericScreenView, config: { speed: 50, style:{ width: '250px'},image:bossImg, contents:[`You tell me, punk!\n\nMeddling on the goverment network like that.`, 2000] } },
  { Component: GenericScreenView, config: { speed: 50, style:{ width: '250px'},image:bert_talking, contents:[`Not very smart to be talking to me like that, you know.\n\nI see you intercepted my message for Master Laser, but nothing to worry about, first I’ll go deal with you and then go tell him myself personally.`, 2000] } },
  { Component: GenericScreenView, config: { speed: 50, style:{ width: '250px'},image:bert_talking, contents:[`The Master’s gonna be so proud of me when I tell him all about it.\n\nBWA HA HA HA !!`, 2000] } },
  { Component: GenericScreenView, config: { speed: 50, style:{ width: '250px'},image:bossImg, contents:[`We’d love to see you try. Meet us at the city hall in 10 minutes.`, 2000] } },
  { Component: GenericScreenView, config: { speed: 50, style:{ width: '250px'},image:bert_talking, contents:[`You make my job so easy WEE HE HE.`, 2000] } },
  { Component: GenericScreenView, config: { speed: 50, style:{ width: '600px'}, image:Q81V, contents:[`10 minutes later...`, 2000] } },
  { Component: GenericScreenView, config: { speed: 50, style:{ width: '250px'},image:bert_talking, contents:[`There you are! Was about time. `, 2000] } },
  { Component: GenericScreenView, config: { speed: 50, useProfileImage: true, contents:[`Wow! You’re so ugly! Your mom must have got a ton of fines for littering when she dropped you off at school!`, 2000] } },
  { Component: FightView, config: {talk: bert_talking, laugh: bert_laugh, still: bert_still, level: Level1, timer: 40, lifes: 4 } },
  { Component: GenericScreenView, config: { speed: 50, style:{ width: '250px'}, image:bert_talking, contents:[`I can’t believe you’re that smart,\nI cannot be beaten here, I need to warn the Master!`, 2000] } },
  { Component: GenericScreenView, config: { speed: 50, contents:[`He’s escaping! Follow him!`, 2000] } },
  { Component: GenericScreenView, config: { speed: 50, contents:[`It’s too fast, we missed him.`, 2000] } },
  { Component: GenericScreenView, config: { speed: 50, contents:[`Luckily we have this huge camera system, let’s check if we can see its escape route.`, 2000] } },
  { Component: GenericScreenView, config: { video: footage, contents:['Screen 1 Text', 2000], onlyVideo: true } },
  { Component: GenericScreenView, config: { speed: 50, style:{ width: '250px'},image:bossImg, contents:[`WTF!? He’s driving a Ferrari F40?\nAliens must be loaded!\n\nSo, were you able to see where it went?`, 2000] } },
  { Component: SequenceGameView, config: { contents:['Type the correct sequence of the escape path.', 2000] , answer: '25413', length: 5 , video:footage} },
  { Component: GenericScreenView, config: { speed: 50, image:speed, contents:[`You nailed it! I’ve set the coordinates on my GPS, we better hurry.`, 2000] } },
  { Component: GenericScreenView, config: { speed: 50, image:Crater, contents:[`We’re too late... looks like the spot where his spaceship was.`, 2000] } },
  { Component: GenericScreenView, config: { speed: 50, style:{ width: '800px'},image:map, contents:[`Wait a minute, what’s that?\nIt dropped something while escaping.`, 2000] } },
  { Component: GenericScreenView, config: { speed: 50, style:{ width: '800px'},image:map, contents:[`Hmmm... of course the instructions were not going to be that straightforward, and even if we decypher them, how are we gonna get there at all? It’s in outer space!`, 2000] } },
  { Component: GenericScreenView, config: { speed: 50, style:{ width: '250px'},image:bossImg, contents:[`Heh, don’t worry, you think the government didn’t research about space travelling? Where do you think your taxes are going, road repairs? Ha!`, 2000] } },
  { Component: GenericScreenView, config: { speed: 50, style:{ width: '250px'},image:bossImg, contents:[`Make someone bring the Vic Viper over here!`, 2000] } },
  { Component: GenericScreenView, config: { speed: 50, image:spaceship, contents:[`RADIO: Your presence is required, sending coordinates.\n\nPILOT: On my way.\n(Ugh, I was on my break...)`, 2000] } },
  { Component: GenericScreenView, config: { speed: 50, useProfileImage: true, contents:[`If you had a spaceship this whole time, why did we get here by CAR?`, 2000] } },
  { Component: GenericScreenView, config: { speed: 50, style:{ width: '250px'},image:bossImg, contents:[`RIGHT, I should have called a spaceship taxi to pick us up in the middle of the city!\n\nNevermind, let’s take a look at that map`, 2000] } },
  { Component: GenericScreenView, config: { speed: 50, style:{ width: '90%'},image:mapquest, contents:[`Write down the correct directions (UP, DOWN, LEFT or RIGHT) and press ENTER to blast off when you think you’re ready.`, 2000] } },
  { Component: GenericScreenView, config: { speed: 50, video:Nave, contents:[`Alright! Everybody get in position, we’re ready for blast off!\n\nGodspeed investigators, the future of humanity is in your hands, we’re counting on you!`, 2000] } },
  { Component: DirectionsGameView, config: { style: { width: '80%'}, image: ShipIdle, contents:['Type the correct directions with the arrow keys to reach their planet', 2000] , answer: 'LURDL', length: 5 , startTimer: true, audio: LoopAudio} },
  { Component: GenericScreenView, config: { video: landing_ship, contents:['Screen 1 Text', 2000], onlyVideo: true } },
  { Component: GenericScreenView, config: { speed: 50, useProfileImage: true, contents:[`We’ve finally arrived to their planet.`, 2000] } },
  { Component: GenericScreenView, config: { speed: 50, contents:[`In the meantime...`, 2000] } },
  { Component: GenericScreenView, config: { speed: 50, image: laser_hidden, contents:[`Haha, classic humans, they just bit my bite so easily, now my road is free to be the king of humankind.\n\nRage, take good care of them!`, 2000] } },
  { Component: GenericScreenView, config: { speed: 50, style:{ width: '250px'},image:toto_talking, contents:[`Yes Master!`, 2000] } },
  { Component: GenericScreenView, config: { speed: 50, useProfileImage: true, contents:[`Ok, we need to find some information about what’s really going on here.`, 2000] } },
  { Component: GenericScreenView, config: { speed: 50, style:{ width: '250px'},image:toto_talking, contents:[`Stop right there earthlings! You’ll never beat my knowledge`, 2000] } },
  { Component: GenericScreenView, config: { speed: 50, useProfileImage: true, contents:[`Wow! You’re even uglier than the other guy!`, 2000] } },
  { Component: FightView, config: {talk: toto_talking, laugh: toto_laugh, still: toto_still, level: Level1, timer: 40, lifes: 6 } },
  { Component: GenericScreenView, config: { speed: 50, style:{ width: '250px'},image:toto_talking, contents:[`Ahhhh!!`, 2000] } },
  { Component: GenericScreenView, config: { speed: 50, useProfileImage: true, contents:[`After him!`, 2000] } },
  { Component: GenericScreenView, config: { speed: 50, image:phone, contents:[`Wait, he forgot his cellphone! It’s locked but it has something sticked on its back.`, 2000] } },
  { Component: GenericCodeView, config: { style: { width: '70%'}, image: codephone, contents:['Enter the PIN:', 2000] , answer: '835', length: 3, disableHint:true } },
  { Component: GenericCodeView, config: { style: { width: '60%'}, image: book, contents:['Type the password to access the government server:', 2000] , answer: 'CORRUPTED', length: 9, disableHint:true, allowLetters:true , hideLines:true  } },
  //WINDOWSSSS
  { Component: GenericScreenView, config: { speed: 50, image:laser_new_talk_otro, contents:[`You bastards cut my signal!\nYou’ll pay for this.`, 2000] } },
  { Component: FightView, config: {talk: laser_new_talk_fgt, hit:laser_hit, laugh: laser_laugh_fgt, still: laser_still, level: finalLevel, timer: 40, lifes: 9, final:true } },
  { Component: GenericScreenView, config: { speed: 50, style:{ width: '250px'},image:bossImg, contents:[`We won!! But everyone’s been brainwashed, we need to restore everything back to normal.`, 2000] } },
  { Component: GenericScreenView, config: { speed: 50, style:{ width: '250px'},image:bossImg, contents:[`There’s an old melody, that was once used to make humanity happy once.\nIf I recall, it goes somewhat like this...`, 2000] } },
  { Component: SoundGameView, config: { contents:['Use this synthetizer to play the correct melody.', 2000] , answer: '11123456', length: 9 } },
  { Component: GenericScreenView, config: { speed: 50, style:{ width: '250px'},image:bossImg, contents:[`Humanity has been returned back to normal!`, 2000] } },
  
  /*{ Component: ScreenView, duration: 0, audio: intro },
  { Component: Windows, duration: 0 },
  { Component: MazeView, duration: 0 },*/
]

function App() {
  const [profileImage, setProfileImage] = useState(false);
  const [showEnergy, setShowEnergy] = useState(false);
  const [energy, setEnergy] = useState(3);
  const [startTimer, setStartTimer] = useState(false);
  const [resetTimer, setResetTimer] = useState(0);
  const [showTimer, setShowTimer] = useState(false);
  const [index, setIndex] = useState(0);
  const [laughImage, setLaughImage] = useState(null);
  const [offsetTimestamp, setOffsetTimestamp] = useState(new Date());
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
    if(Stage.config.laugh) {
      setLaughImage(Stage.config.laugh);
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
      }, 2000)
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
  const onKeyDown = (key) => {
    if(key === 'Escape') {
        next()
    }
    if(key === '0') {
      back(1)
  }
  }

  return (
    <div className="App">
      <Stage.Component profileImage={profileImage} setProfileImage={setProfileImage} setEnergy={setEnergy} index={index} next={next} back={back} setStartTimer={setStartTimer} setResetTimer={setResetTimer} config={Stage.config} />

      { showTimer && 
        <div className="timer"> 
         <Timer startTimer={startTimer} resetTimer={resetTimer} offsetTimestamp={offsetTimestamp} setOffsetTimestamp={setOffsetTimestamp}/>
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
                <img src={laughImage}/>
                <p>BWA HA HA HA! Is that all you can do?</p>
              </div>
             
          </div>
      }

      <KeyPress onKeyDown={onKeyDown}/>
    </div>
  );
}

export default App;

const Timer = ({startTimer,resetTimer, offsetTimestamp, setOffsetTimestamp}) => {


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
