import React, { useEffect, useState, useMemo } from 'react';
import './Fight.scss';
import TypeWriter from '../components/TypeWriter';
import KeyPress from './KeyPress';
import Deny from '../assets/deny.mp3';

import heartSVG from '../assets/heart.svg';
const denyAudio = new Audio(Deny)

function Fight({ setEnergy, next, config, setStartTimer }) {
  const { image, timer, lifes, audio, style } = config;
  const [showAnimation, setShowAnimation] = useState(false)
  const [index, setIndex] = useState(0)
  const [orderedLevel, setOrderedLevel] = useState(config.level.sort(() => Math.random() - 0.5))
  const [correctAnswers, setCorrectAnswers] = useState(0)
  const [timerOptions, setTimerOptions] = useState(null)
  const [showOptions, setShowOptions] = useState(false);
  const levelData = useMemo(()=> orderedLevel[index] || {},[orderedLevel,index]);


  useEffect(() => {

    const shuffled = config.level.sort(() => Math.random() - 0.5)
    setOrderedLevel(shuffled)
  }, [config])

  useEffect(() => {
    if (showOptions) {
      console.log('mostrando opciones');
      setStartTimer(true);
      setShowAnimation(true)
      const optionsTimer = setTimeout(() => {
        denyAudio.play();
        setIndex(index+1);
        setEnergy((energy) => energy - 1);
        setShowOptions(false);
        setShowAnimation(false);
      }, timer * 1000);
      setTimerOptions(optionsTimer)
      return () => clearTimeout(timerOptions)
    }
  }, [showOptions])

  useEffect(() => {
    
    setShowAnimation(false)
    if(index > (config.level.length - 1)) {
      setIndex(0);
    }
  }, [index])

  useEffect(() => {
    if(correctAnswers === lifes) {
      console.log('WINNN')
      next()
    }
  }, [correctAnswers, lifes, next])

 

  useEffect(() => {
    if (audio) {
      audio.play();
    }
  }, [audio])

  

 

  

  const onDone = () => {
    setShowOptions(true);
  };

  const onKeyDown = (key) => {
    console.log('key',key);
    if (levelData.options.length >= parseInt(key) && parseInt(key) > 0) {
      console.log('levelData.answer',levelData.answer);
      clearTimeout(timerOptions);
      if(levelData.answer === parseInt(key)) {
        console.log('CORRECTO');
        setCorrectAnswers(correctAnswers + 1);
        setIndex(index+1);
        setShowOptions(false);
      } else {
        denyAudio.play();
        setIndex(index+1);
        setEnergy((energy) => energy - 1);
        setShowOptions(false);
      }
    }
  }
  const fightTimer = showAnimation ? { animation: `fight-timer ${timer}s linear`, animationFillMode: 'forwards'} : {};
 

  
  return (
    <div className="Screen Fight">
      <div className="content">
        <div>
          <div style={{display: 'flex', alignItems: 'center'}}>
            <img src={image} style={{ width:'350px', marginRight: '28px'}} />
            <div className="text-zone">
            <TypeWriter contents={levelData.question}
              speed={100}
              cursor={false}
              onDone={onDone} />
            </div>
          
          </div>
          <div className="timerfight" style={fightTimer}></div> 
          <div style={{}}>
            ENERGY
            { [...Array(lifes - correctAnswers).keys()].map((i) => { return (<img src={heartSVG} className="heart" key={i}></img>)}) }
          </div>
        </div>
        
       
        
      </div>
      <div className="interactions options-grid">
        {showOptions &&
          <>
           { showOptions ? levelData.options.map((item, i) => {
                  return <p  className="option" key={i}>{`${i+1}>${item}`}</p>
                } ) : ''}

            <KeyPress onKeyDown={onKeyDown}>
             
            </KeyPress>
          </>
        }
      </div>
    </div>
  );
}

export default Fight;
