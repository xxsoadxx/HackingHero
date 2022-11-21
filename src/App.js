import React, { useEffect, useState, Suspense, lazy } from 'react';
import './App.scss';
import Splash from './views/Splash';
import GenericScreen from './views/GenericScreen';
import NameScreen from './views/NameScreen';
import { MatrixRainingLetters } from "react-mdr";
import GenericCode from './views/GenericCode';
import TakePictureScreen from './views/TakePictureScreen'
import AllReady from './views/AllReady'
import DirectionsGame from './views/DirectionsGame';
import SequenceGame from './views/SequenceGame'
import SoundGame from './views/SoundGame'
import useImagePreloader from './components/preLoader'
import GameIntroAudio from './assets/game-intro.mp3';
import BeforeFerrariFileAudio from './assets/before-ferrari.mp3';
import PictureAudio from './assets/what-a-great-picture.mp3';
import TotoFileAudio from './assets/toto.mp3';
import io from 'socket.io-client';
import uuid from 'react-uuid';

import AfterFerrariFile from './assets/after-ferrari.mp3';
import TotoLoopFileAudio from './assets/toto-loop.mp3';
import TotoIntroFileAudio from './assets/toto-intro.mp3';

//import MazeGame from './views/MazeGame';
import { useStopwatch } from 'react-timer-hook';
import ShipIdle from './assets/idle.gif';
import Q82V from './assets/Q82V.gif';
import Q81V from './assets/Q81V.gif';
import Fight from './views/Fight'
import Loop from './assets/loop.mp3';
import KeyPress from './components/KeyPress';
import Level1 from './fights/level1.json';
import Level2 from './fights/level2.json';
import finalLevel from './fights/final.json';
import heartSVG from './assets/heart.svg';
import Windows from './views/Windows';
import Crater from './assets/crater.png';
import Nave from './assets/Blastoff.m4v'
import speed from './assets/speed.gif';
import footage from './assets/footage.m4v'

import Ending from './assets/ending.mp4';

import Laught from './assets/laught.wav';
import NeonAudioFile from './assets/neon-city.mp3';
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
import camerascene from './assets/camera.png';
import laser_laugh from './assets/laser_laugh.gif';


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
import laser_new_talk_fgt from './assets/talk_fight.gif';

import landing_ship from './assets/landing.m4v';
import laser_new_talk_otro from './assets/laser_new_talk_otro.gif';

import Deny from './assets/wrong.mp3';
import QuizAudio from './assets/quiz.mp3';

import Left from './assets/left.png';
import Right from './assets/right.png';
import Up from './assets/up.png';
import Down from './assets/down.png';
import LeftGif from './assets/left.gif';
import RightGif from './assets/right.gif';
import UpDownGif from './assets/up_down.gif';
import EndGif from './assets/end.gif';
import DenyGif from './assets/wrong.gif';
import Carpassing from './assets/carpassing.mp3';
import NightFile from './assets/night.mp3';
import ViperFile from './assets/vic-viper.mp3';
import RadioFile from './assets/radio.mp3';
import LaserRageFile from './assets/laser-and-rage.mp3';
import RageLoopFile from './assets/rage-loop.mp3';

import RageIntroFIle from './assets/rage-intro.mp3';
import RageRunFile from './assets/rage-run.mp3';
import ConfrontationFile from './assets/confrontation.mp3';
import QuizFile from './assets/quiz2.mp3';
import PreFightLaser from './assets/prelaserfight.mp3';
import ShipVideo2 from './assets/ship.gif';
import LaserTalkAngry from './assets/laser_new_talk_angry.gif';
import LaserReveal from './assets/laser_reveal.gif';

import battleLaserintro from './assets/battle-laser-intro.mp3';
import battleLaserloop from './assets/battle-laser-loop.mp3';
import TypeWriter from './components/TypeWriter';
import Mask from './assets/mask.png';
import sound1 from './assets/1.m4a'
import sound2 from './assets/2.m4a'
import sound3 from './assets/3.m4a'
import sound4 from './assets/4.m4a'
import sound5 from './assets/5.m4a'
import sound6 from './assets/6.m4a'
import complete from './assets/complete.m4a'

import windowssound from './assets/windows.mp3';

const Note1 = new Audio(sound1)
const Note2 = new Audio(sound2)
const Note3 = new Audio(sound3)
const Note4 = new Audio(sound4)
const Note5 = new Audio(sound5)
const Note6 = new Audio(sound6)
const Complete = new Audio(complete)
const WindowsSound = new Audio(windowssound)
const preloadSrcList = [
  Mask,
  laser_laugh,
  camerascene,
  ShipVideo2,
  LaserTalkAngry,
  LaserReveal,
  Crater,
  message,
  laser_still,
  laser_hit,
  laser_new_talk_fgt,
  laser_laugh_fgt,
  Left,
  Right,
  Up,
  Down,
  LeftGif,
  RightGif,
  UpDownGif,
  EndGif,
  DenyGif,
  Q81V,
  Q82V,
  ShipIdle,
  speed,
  equalizer,
  laser_new_talk_otro,
  bert_still,
  bert_laugh,
  bert_talking,
  timerImg,
  energyImg,
  questionImg,
  bossImg,
  colorscodeImg,
  map,
  spaceship,
  mapquest,
  toto_still,
  toto_laugh,
  toto_talking,
  codephone,
  book,
  phone,
  laser_hidden,
  neoncity,
  ringring
]





const battleLaserintroAudio = new Audio(battleLaserintro);
const battleLaserloopAudio = new Audio(battleLaserloop);
battleLaserloopAudio.loop = true;
//battleLaserintroAudio.addEventListener('ended', (event) => {
  //battleLaserloopAudio.play()
//});

const RageIntroAudio = new Audio(RageIntroFIle);


const RageRunAudio = new Audio(RageRunFile);

const RageLoopAudio = new Audio(RageLoopFile);
RageLoopAudio.loop = true;
//RageIntroAudio.addEventListener('ended', (event) => {
 // RageLoopAudio.play()
//});

const Quiz2Audio = new Audio(QuizFile);
Quiz2Audio.loop = true;


const PreFightLaserAudio = new Audio(PreFightLaser);
PreFightLaserAudio.loop = true;


const ConfrontationAudio = new Audio(ConfrontationFile);
ConfrontationAudio.loop = true;

const LaserRageAudio = new Audio(LaserRageFile);
LaserRageAudio.loop = true;
const RadioAudio = new Audio(RadioFile);
RadioAudio.loop = true;
const NightAudio = new Audio(NightFile);
NightAudio.loop = true;
const CarpassingAudio = new Audio(Carpassing);

const AfterFerrariAudio = new Audio(AfterFerrariFile);
AfterFerrariAudio.loop = true;
const BeforeFerrariAudio = new Audio(BeforeFerrariFileAudio);
BeforeFerrariAudio.loop = true;
const TotoLoopAudio = new Audio(TotoLoopFileAudio);
TotoLoopAudio.loop = true;
const TotoIntroAudio = new Audio(TotoIntroFileAudio);

//TotoIntroAudio.addEventListener('ended', (event) => {
 // TotoLoopAudio.play()
//});


const ViperAudio = new Audio(ViperFile);
ViperAudio.loop = true;
const TotoAudio = new Audio(TotoFileAudio);
TotoAudio.loop = true;
const QuizAudioFile = new Audio(QuizAudio);
QuizAudioFile.loop = true;
const NeonAudio = new Audio(NeonAudioFile);
NeonAudio.loop = true;
const IntroAudio = new Audio(GameIntroAudio);
IntroAudio.loop = true;
const DenyAudio = new Audio(Deny)
const mus_dialup_3Audio = new Audio(mus_dialup_3)
mus_dialup_3Audio.loop = true;
const laughtAudio = new Audio(Laught)

const FilePictureAudio = new Audio(PictureAudio)
FilePictureAudio.loop = true;
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
const NameScreenView = (props) => <NameScreen {...props} />
const loadingContents = ['Preloading Assets...',5000,'Loading...',5000,'Connecting to server...',5000,'Preloading Assets...',5000];
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
  { Component: GenericScreenView, config: { audio: IntroAudio, speed: 50, image:equalizer, contents:[`Hi!\n\n This is an audiovisual experience, so please turn on your speakers. Select stuff with the number keys, press enter to confirm or continue.`, 2000] } },
  { Component: GenericScreenView, config: { audio: IntroAudio, speed: 50, style:{ width: '200px'}, image:timerImg, contents:[`Oh yes, that right there is your TIMER.\n The team completing the game with the less amount of time, wins.`, 2000], showTimer: true } },
  { Component: GenericScreenView, config: { audio: IntroAudio, speed: 50, style:{ width: '300px'}, image:energyImg, contents:[`Aaaand that’s your ENERGY.\n Yes, there are battles in this game so give the control to the most agile member of your team.\n If you lose a battle, your energy replenishes but you’ll have to start over again and the TIMER keeps going!`, 2000], showEnergy: true } },
  { Component: AllReadyView, config: { audio: IntroAudio, image: questionImg, contents:['All set?'] }},
  { Component: TakePictureScreenView, config: {  audio: FilePictureAudio , speed: 50, contents:['Alright! Before we start, let’s take a picture of the team!\n\n Press Space when you’re all in there'] }},

  { Component: GenericScreenView, config: { audio: FilePictureAudio ,speed: 50, useProfileImage: true, contents:[`Wow, what a great photograph! It will always bring back the fondest of memories...\n\n Get ready!`, 2000] } },
  

  { Component: NameScreenView, config: { audio: FilePictureAudio, contents:['Oh, I almost forgot... what\'s the name of the team? \n Type the name and press Enter', 2000] , length: 10, allowLetters:true , hideLines:false  } },
  
  { Component: GenericScreenView, config: { audio: NeonAudio, speed: 50,style:{ width: '700px'}, image:neoncity, contents:[`Neon City, a retrofuturistic town (if that can even be a thing). Monday, 8 PM.\n\n Just another regular day at @teamName headquarters.`, 2000] } },
  { Component: GenericScreenView, config: { audio: NeonAudio, speed: 50,style:{ width: '200px',  animation: 'shake 0.5s 400'}, audioSecundary:snd_phoneAudio,image:ringring, contents:[`RIIIING, RIIIING!\n RIIIIIG, RIIIIING!`, 2000] } },
  { Component: GenericScreenView, config: { audio: NeonAudio, speed: 50, useProfileImage: true, contents:[`Ain’t you gonna pick up?\n Phone’s ringing in case you didn’t notice... must be the boss.`, 2000] } },
  { Component: GenericScreenView, config: { audio: NeonAudio, speed: 50, style:{ width: '250px'},image:bossImg, contents:[`Was about time kid, there’s something serious going on.\n I got a call from the PRESIDENT saying their intel agency detected unusual activity on their network.`, 2000] } },
  { Component: GenericScreenView, config: { audio: NeonAudio, speed: 50, useProfileImage: true, contents:[`Business as usual...\n\nLet me guess, another trojan virus.`, 2000] } },
  { Component: GenericScreenView, config: { audio: NeonAudio, speed: 50, style:{ width: '250px'},image:bossImg, contents:[`Nope, seems like someone or something is trying to intercept some packets on the TCP but there’s no IP address, appears to be coming from outer space!`, 2000] } },
  { Component: GenericScreenView, config: { audio: NeonAudio, speed: 50, useProfileImage: true, contents:[`Woah, outer space?`, 2000] } },
  { Component: GenericScreenView, config: { audio: NeonAudio, speed: 50, style:{ width: '250px'},image:bossImg, contents:[`They were able to intercept a message, but it’s encrypted and they can't crack it up, that’s why they called us, the best PI office in the world. Could you take a look?`, 2000] } },
  { Component: GenericScreenView, config: { audio: NeonAudio, speed: 50, useProfileImage: true, contents:[`You got it!`, 2000] } },
  { Component: GenericScreenView, config: { audio: NeonAudio, speed: 50, style:{ width: '250px'},image:bossImg, contents:[`It’s on its way. please hurry!`, 2000] } },
  { Component: GenericCodeView, config: { audio: QuizAudioFile, style: { width: '90%'}, image: colorscodeImg, contents:['Enter the code to decrypt the message:', 2000] , answer: '5413', length: 4, hint:() => (<>You should focus on colors.<br/><br/><br/>Order is the key.</>), startTimer: true } },
  { Component: GenericScreenView, config: { audio: TotoAudio, speed: 50, useProfileImage: true, contents:[`We did it! What does it say?`, 2000] } },
  { Component: GenericScreenView, config: { audio: TotoAudio, speed: 50, image:message, contents:[`“Everything is working just as you planned, master. Prepare phase 2”\n\n“Master”!? OMG they’re planning an invasion!`, 2000] } },
  { Component: GenericScreenView, config: { audio: TotoAudio, speed: 50, style:{ width: '250px'},image:bossImg, contents:[`There’s some kind of number from the sender, but this isn’t an Earth country code, would it work if I call from here?`, 2000] } },
  { Component: GenericScreenView, config: { audio: TotoAudio, speed: 50, audioSecundary:mus_dialup_3Audio, contents:[`Calling...`, 2000] } },
  { Component: GenericScreenView, config: { audio: TotoAudio, speed: 50, style:{ width: '250px'}, image:bert_talking, contents:[`Hello, who’s this? How did you get this number?`, 2000] } },
  { Component: GenericScreenView, config: { audio: TotoAudio, speed: 50, style:{ width: '250px'},image:bossImg, contents:[`You tell me, punk!\n\nMeddling on the goverment network like that.`, 2000] } },
  { Component: GenericScreenView, config: { audio: TotoAudio, speed: 50, style:{ width: '250px'},image:bert_talking, contents:[`Not very smart to be talking to me like that, you know.\n\nI see you intercepted my message for Master Laser, but nothing to worry about, first I’ll go deal with you and then go tell him myself personally.`, 2000] } },
  { Component: GenericScreenView, config: { audio: TotoAudio, speed: 50, style:{ width: '250px'},image:bert_talking, contents:[`The Master’s gonna be so proud of me when I tell him all about it.\n\nBWA HA HA HA !!`, 2000] } },
  { Component: GenericScreenView, config: { audio: TotoAudio, speed: 50, style:{ width: '250px'},image:bossImg, contents:[`We’d love to see you try. Meet us at the city hall in 10 minutes.`, 2000] } },
  { Component: GenericScreenView, config: { audio: TotoAudio, speed: 50, style:{ width: '250px'},image:bert_talking, contents:[`You make my job so easy WEE HE HE.`, 2000] } },
  { Component: GenericScreenView, config: { audio: TotoAudio, speed: 50, style:{ width: '600px'}, image:Q81V, contents:[`10 minutes later...`, 2000] } },
  { Component: GenericScreenView, config: { audio: TotoAudio, speed: 50, style:{ width: '250px'},image:bert_talking, contents:[`There you are! Was about time. `, 2000] } },
  { Component: GenericScreenView, config: { audio: TotoAudio, speed: 50, useProfileImage: true, contents:[`Wow! You’re so ugly! Your mom must have got a ton of fines for littering when she dropped you off at school!`, 2000] } },
  { Component: FightView, config: { introAudio:TotoIntroAudio, loopAudio:TotoLoopAudio,talk: bert_talking, laugh: bert_laugh, still: bert_still, level: Level1, timer: 40, lifes: 4 } },
  { Component: GenericScreenView, config: { audio:BeforeFerrariAudio, speed: 50, style:{ width: '250px'}, image:bert_talking, contents:[`I can’t believe you’re that smart,\nI cannot be beaten here, I need to warn the Master!`, 2000] } },
  { Component: GenericScreenView, config: { audio:BeforeFerrariAudio, style: { width: '65%'},image:Q81V, speed: 50, contents:[`He’s escaping! Follow him!`, 2000] } },
  { Component: GenericScreenView, config: { audio:BeforeFerrariAudio, useProfileImage: true, speed: 50, contents:[`He's too fast, we missed him.`, 2000] } },
  { Component: GenericScreenView, config: { audio:BeforeFerrariAudio, speed: 50, image:camerascene, contents:[`Luckily we have this huge camera system, let’s check if we can see his escape route.`, 2000] } },
  { Component: GenericScreenView, config: { video: footage, contents:['Screen 1 Text', 2000], onlyVideo: true } },
  { Component: GenericScreenView, config: { audio: AfterFerrariAudio, speed: 50, style:{ width: '250px'},image:bossImg, contents:[`WTF!? He’s driving a Ferrari F40?\nAliens must be loaded!\n\nSo, were you able to see where he went?`, 2000] } },
  { Component: SequenceGameView, config: { audio: AfterFerrariAudio, contents:['Type the correct sequence of the escape path.', 2000] , answer: '25413', length: 5 , video:footage} },
  { Component: GenericScreenView, config: { audio: CarpassingAudio, speed: 50, image:speed, contents:[`You nailed it! I’ve set the coordinates on my GPS, we better hurry.`, 2000] } },
  { Component: GenericScreenView, config: { audio: NightAudio, speed: 50, image:Crater, contents:[`We’re too late... looks like the spot where his spaceship was.`, 2000] } },
  { Component: GenericScreenView, config: { audio: NightAudio, speed: 50, style:{ width: '800px'},image:map, contents:[`Wait a minute, what’s that?\nHe dropped something while escaping.`, 2000] } },
  { Component: GenericScreenView, config: { audio: NightAudio, speed: 50, style:{ width: '800px'},image:map, contents:[`Hmmm... of course the instructions were not going to be that straightforward, and even if we decypher them, how are we gonna get there at all? It’s in outer space!`, 2000] } },
  { Component: GenericScreenView, config: { audio: NightAudio, speed: 50, style:{ width: '250px'},image:bossImg, contents:[`Heh, don’t worry, you think the government didn’t research about space travel? Where do you think your taxes are going, road repairs? Ha!`, 2000] } },
  { Component: GenericScreenView, config: { audio: ViperAudio, speed: 50, style:{ width: '250px'},image:bossImg, contents:[`Make someone bring the Vic Viper over here!`, 2000] } },
  { Component: GenericScreenView, config: { audio: ViperAudio, audioSecundary: RadioAudio, speed: 50, image:spaceship, contents:[`RADIO: Your presence is required, sending coordinates.\n\nPILOT: On my way.\n(Ugh, I was on my break...)`, 2000] } },
  { Component: GenericScreenView, config: { audio: ViperAudio, speed: 50, useProfileImage: true, contents:[`If you had a spaceship this whole time, why did we get here by CAR?`, 2000] } },
  { Component: GenericScreenView, config: { audio: ViperAudio, speed: 50, style:{ width: '250px'},image:bossImg, contents:[`RIGHT, I should have called a spaceship taxi to pick us up in the middle of the city!\n\nNevermind, let’s take a look at that map`, 2000] } },
  { Component: GenericScreenView, config: { audio: ViperAudio, speed: 50, style:{ width: '90%'},image:mapquest, contents:[`Write down the correct directions (UP, DOWN, LEFT or RIGHT) and press ENTER to blast off when you think you’re ready.`, 2000] } },
  { Component: GenericScreenView, config: { speed: 50, video:Nave,endOnVideo:true, contents:[`Alright! Everybody get in position, we’re ready for blast off!\n\nGodspeed investigators, the future of humanity is in your hands, we’re counting on you!`, 2000] } },
  { Component: DirectionsGameView, config: { style: { width: '80%'}, image: ShipIdle, contents:['Type the correct directions with the arrow keys to reach their planet', 2000] , answer: 'LURDL', length: 5 , startTimer: true, audio: LoopAudio} },
  { Component: GenericScreenView, config: { video: landing_ship, contents:['Screen 1 Text', 2000], onlyVideo: true } },
  { Component: GenericScreenView, config: { speed: 50, useProfileImage: true, contents:[`We’ve finally arrived to their planet.`, 2000] } },
  { Component: GenericScreenView, config: { audio: LaserRageAudio, speed: 50, contents:[`In the meantime...`, 2000] } },

 
  { Component: GenericScreenView, config: { audio: LaserRageAudio, speed: 50, image: laser_hidden, contents:[`Haha, classic humans, they just took my bait so easily, now my road is free to become the king of the universe.\n\nRage, take good care of them!`, 2000] } },
  { Component: GenericScreenView, config: { audio: LaserRageAudio, speed: 50, style:{ width: '250px'},image:toto_talking, contents:[`Yes Master!`, 2000] } },
  { Component: GenericScreenView, config: { audio: LaserRageAudio, speed: 50, useProfileImage: true, contents:[`Ok, we need to find some information about what’s really going on here.`, 2000] } },
  { Component: GenericScreenView, config: { audio: LaserRageAudio, speed: 50, style:{ width: '250px'},image:toto_talking, contents:[`Stop right there earthlings! You’ll never beat my knowledge`, 2000] } },
  { Component: GenericScreenView, config: { audio: LaserRageAudio, speed: 50, useProfileImage: true, contents:[`Wow! You’re even uglier than the other guy!`, 2000] } },
  { Component: FightView, config: {introAudio:RageIntroAudio, loopAudio:RageLoopAudio, talk: toto_talking, laugh: toto_laugh, still: toto_still, level: Level2, timer: 40, lifes: 6 } },
  { Component: GenericScreenView, config: { audio:RageRunAudio, classes: 'animate__zoomOutRight', speed: 50, style:{ width: '250px'},image:toto_talking, contents:[`Ahhhh!! I’m sorry Master.`, 2000] } },
  { Component: GenericScreenView, config: { audio: ConfrontationAudio, speed: 50, useProfileImage: true, contents:[`After him!`, 2000] } },
  { Component: GenericScreenView, config: { audio: ConfrontationAudio, speed: 50, image:phone, contents:[`Wait, he forgot his cellphone! It’s locked but it has something stuck on its back.`, 2000] } },
  
  
  { Component: GenericScreenView, config: { audio: ConfrontationAudio, speed: 50, useProfileImage: true, contents:[`Incoming videocall...`, 2000] } },
  { Component: GenericScreenView, config: { audio: ConfrontationAudio, speed: 50, image:laser_hidden, contents:[`Hey! You better stop interfiering with my plans, it’s useless to resist!`, 2000] } },
   
  { Component: GenericScreenView, config: { audio: ConfrontationAudio, speed: 50, useProfileImage: true, contents:[`Who are you?`, 2000] } },
  { Component: GenericScreenView, config: { audio: ConfrontationAudio, speed: 50, image:LaserReveal, secondimage: laser_new_talk_otro, switchImageTime: 4000, contents:[`Heh, allow me to introduce myself. They call me Laser.`, 2000] } },
 
  { Component: GenericScreenView, config: { audio: ConfrontationAudio, speed: 50, useProfileImage: true, contents:[`Wait! Are you hu... human?!`, 2000] } },
  { Component: GenericScreenView, config: { audio: ConfrontationAudio, speed: 50, image:laser_new_talk_otro, contents:[`Something like that, at least I was before I became a cyborg and travelled to this planet. But enough chit-chat, enjoy your stay at Bogmire while I conquer the universe.`, 2000] } },
  { Component: GenericScreenView, config: { audio: ConfrontationAudio, speed: 50, image:laser_laugh, contents:[`BWAH HA HA!!`, 2000] } },
 
  { Component: GenericScreenView, config: { audio: ConfrontationAudio, speed: 50, useProfileImage: true, contents:[`What’s wrong with this guy!? And why is he doing this... wanting to invade Earth, for what?`, 2000] } },
  { Component: GenericScreenView, config: { audio: ConfrontationAudio, style: { width:'85%'},image:Mask, speed: 50, contents:[`I wonder if that mask has something to do with it...`, 2000] } },
  { Component: GenericScreenView, config: { audio: ConfrontationAudio, speed: 50, useProfileImage: true, contents:[`Now, about that cellphone...`, 2000] } },
  
  
  { Component: GenericCodeView, config: { audio: Quiz2Audio, style: { width: '70%'}, image: codephone, contents:['Enter the PIN:', 2000] , answer: '835', length: 3, disableHint:true } },
  { Component: GenericCodeView, config: { audio: Quiz2Audio, style: { width: '60%'}, image: book, contents:['Type the password to access the government server:', 2000] , answer: 'CORRUPTED', length: 9, disableHint:true, allowLetters:true , hideLines:false  } },
  { Component: WindowsView, config: { audio: WindowsSound } },
  { Component: GenericScreenView, config: { speed: 50, useProfileImage: true, contents:[`It stopped!`, 2000] } },
  { Component: GenericScreenView, config: { audio:PreFightLaserAudio, speed: 50, image:LaserTalkAngry, contents:[`You bastards cut my signal!\nYou’ll pay for this.`, 2000] } },
  { Component: GenericScreenView, config: { audio:PreFightLaserAudio, style: { width: '75%'} , image: ShipVideo2, speed: 50, contents:[`It doesn’t matter, I’ll just smash you and get the signal back online.`, 2000] } },
  { Component: GenericScreenView, config: { audio:PreFightLaserAudio, speed: 50, useProfileImage: true, contents:[`Here you are! It’s on!`, 2000] } },
  
  { Component: FightView, config: {introAudio: battleLaserintroAudio, loopAudio:battleLaserloopAudio ,talk: laser_new_talk_fgt, hit:laser_hit, laugh: laser_laugh_fgt, still: laser_still, level: finalLevel, timer: 40, lifes: 9, final:true } },
  
  { Component: GenericScreenView, config: {  speed: 50, image:LaserTalkAngry, contents:[`This isn’t over, I’ll be back and finish what I’ve started. Good luck with this zombie army, now they don’t have anyone to respond to! I broadcasted the signal to the entire solar system!`, 2000] } },
  { Component: GenericScreenView, config: {  speed: 50, image:laser_laugh_fgt, classes: 'animate__zoomOutRight', contents:[`BWA HA HA!`, 2000] } },
  { Component: GenericScreenView, config: {  speed: 50, useProfileImage: true, contents:[`Everyone’s been brainwashed, we need to restore everything back to normal.`, 2000] } },
  
  { Component: GenericScreenView, config: { audio:Complete, audioOnDone:true, speed: 50, style:{ width: '250px'},image:bossImg, contents:[`Maybe... there’s was a melody that brought happiness to humanity once.\nIf I recall, it goes somewhat like this...`] } },

  { Component: SoundGameView, config: {  audio:Complete, contents:['Use this synthetizer to play the correct melody.', 2000] , answer: '555635412', length: 9 } },
  { Component: GenericScreenView, config: { onDone: () => { window.location.href = '#/rank'} ,videoWidth: '100%', videoHeigth:'100%', speed: 50, video:Ending, onlyVideo: true ,contents:[`Humanity has been returned back to normal!`, 2000] } },
  

  /*{ Component: ScreenView, duration: 0, audio: intro },
  
  { Component: MazeView, duration: 0 },*/
]

const search = window.location.search;
const params = new URLSearchParams(search);
const mode = params.get('mode');

function App() {


  const [gameId, setGameId] = useState(uuid());
  const [ioSocket, setIoSocket] = useState(null);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [teamName, setTeamName] = useState(null);
  const [profileImage, setProfileImage] = useState(false);
  const [showEnergy, setShowEnergy] = useState(false);
  const [energy, setEnergy] = useState(3);
  const [startTimer, setStartTimer] = useState(false);
  const [resetTimer, setResetTimer] = useState(0);
  const [showTimer, setShowTimer] = useState(false);
  const [index, setIndex] = useState(0);
  const [laughImage, setLaughImage] = useState(null);

  const [offsetTimestamp, setOffsetTimestamp] = useState(null);
  const [showLooser, setShowLooser] = useState(false);
  const [state, setState] = useState(null);

  const Stage = STAGES[index];

  
  const detectAudio = () => {
    setSoundEnabled(true)
  }

  useEffect(() => {
    const socket = io.connect('https://hacking-hero.herokuapp.com/');
    setIoSocket(socket);
    const storage = JSON.parse(localStorage.getItem('state'));
    if (storage) {
      console.log('storage', storage)
      setState(storage);
    }

    window.addEventListener("click", detectAudio);
    return () => {
        socket.off('connect');
        socket.off('disconnect');
        socket.off('pong');
        window.removeEventListener("click", detectAudio);
    };

  }, []);


  useEffect(() => {
    if (state) {
      setGameId(state?.gameId)
      setTeamName(state?.teamName)
      setProfileImage(state?.profileImage)
      setShowEnergy(state?.showEnergy)
      setEnergy(state?.energy)
      setStartTimer(state?.startTimer)
      setResetTimer(state?.resetTimer)
      setShowTimer(state?.showTimer)
      setIndex(state?.index)
      setLaughImage(state?.laughImage)
      console.log('offsetTimestamp', offsetTimestamp);
      console.log('state?.offsetTimestamp', new Date(state?.offsetTimestamp));
      setOffsetTimestamp(new Date(state?.offsetTimestamp))
      setShowLooser(state?.showLooser)
    }
  }, [state]);

   useEffect(() => {
     //console.log('offsetTimestamp', offsetTimestamp);
      localStorage.setItem('state', JSON.stringify({gameId,profileImage,teamName, showEnergy, energy, startTimer, resetTimer, showTimer, index, laughImage, offsetTimestamp, showLooser}));
      if(index > 0) {
        ioSocket?.emit('updateState', {gameId,teamName, showEnergy, energy, startTimer, resetTimer, showTimer, index, laughImage, offsetTimestamp, showLooser})
      }
     
      
  }, [profileImage, teamName, showEnergy, energy, startTimer, resetTimer, showTimer, index, laughImage, offsetTimestamp, showLooser])

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
    document.querySelectorAll('audio').forEach(el => {
      el.pause();
    });
    console.log('Stage back');
    setIndex(index - stages);
  }
  const onKeyDown = (key) => {
    if(key === 'Escape' && mode === 'dev') {
        next()
    }
    if(key === '0' && mode === 'dev') {
      back(1)
  }
  }


  const { imagesPreloaded } = useImagePreloader(preloadSrcList)

  if (!imagesPreloaded || !soundEnabled) {
    return <>
      <MatrixRainingLetters key="foo-bar" custom_class="m-0 p-0" />
      <div className="row2"><TypeWriter contents={loadingContents}
                speed={150}
                onDone={()=>{}} /> </div>
      {!soundEnabled && <p className="sound">Click on the screen to enable sound</p>}
    </>
  }

  return (
    <div className="App">
      <Stage.Component profileImage={profileImage} ioSocket={ioSocket} gameId={gameId} setOffsetTimestamp={setOffsetTimestamp} teamName={teamName} setProfileImage={setProfileImage} setTeamName={setTeamName} setEnergy={setEnergy} index={index} next={next} back={back} setStartTimer={setStartTimer} setResetTimer={setResetTimer} config={Stage.config} />

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
  } = useStopwatch({ autoStart: false});

  useEffect(() => {
    if(startTimer) {
      console.log('start')
      
      if (!offsetTimestamp) {
        console.log('new dateee');
        setOffsetTimestamp(new Date())
      } 

      start();

      console.log({resetTimer});
   
        const newDate = new Date();
        const penalty = resetTimer * 300
        const secs = (newDate.getTime() - offsetTimestamp.getTime()) / 1000 ;
        
        console.log({secs, resetTimer, penalty})
        reset(newDate.setSeconds( newDate.getSeconds() + secs + penalty))
      
    }
  },[startTimer]);

  useEffect(() => {
    if(resetTimer > 0) {
      const newDate = new Date();
      const penalty = resetTimer * 300
      const secs = (newDate.getTime() - offsetTimestamp.getTime()) / 1000 ;
      
      console.log({secs, resetTimer, penalty})
      reset(newDate.setSeconds( newDate.getSeconds() + secs + penalty))
    }
    
  },[resetTimer]);

  
  

  return (<div style={{fontSize: '16px'}}>
          <span>TIME {hours > 9 ? hours : '0' + hours.toString() }</span>:<span>{minutes > 9 ? minutes : '0' + minutes.toString() }</span>:<span>{seconds > 9 ? seconds : '0' + seconds.toString() }</span>
        </div>)
}
