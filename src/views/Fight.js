import React, { useEffect, useState, useMemo } from 'react';
import './Fight.scss';
import TypeWriter from '../components/TypeWriter';
import KeyPress from '../components/KeyPress';
import Deny from '../assets/wound.wav';

import heartSVG from '../assets/heart.svg';
const denyAudio = new Audio(Deny)

function Fight({ setEnergy, next, config, setStartTimer }) {
  const { introAudio, loopAudio, image, timer, lifes, audio, style, talk, laugh, still,hit, final} = config;

  const [showIntro, setShowIntro] = useState(true)

  const [showHit, setShowHit] = useState(false)
  const [showAttac, setShowAttac] = useState(false)


  const [showAnimation, setShowAnimation] = useState(false)
  const [index, setIndex] = useState(0)
  const [correctAnswers, setCorrectAnswers] = useState(0)
  const [timerOptions, setTimerOptions] = useState(null)
  const [showOptions, setShowOptions] = useState(false);
  const shuffled = useMemo(() => {
   // console.log('Suffle questions');
    return config.level.sort(() => Math.random() - 0.5)
  }, [config])
  const levelData = shuffled[index];

  useEffect(() => {
    const intro =setTimeout(() => {
      setShowIntro(false)
    }, 1000)
    return () => {
      clearTimeout(intro);
    }
   }, [])
  useEffect(() => {
   // console.log('useeffect index',index);
   
    setShowAnimation(false);
    setShowOptions(false);
    if(index > (config.level.length - 1)) {
      setIndex(0);
    }
  }, [index])

  useEffect(() => {
    if(correctAnswers === lifes) {
   //   console.log('WINNN')
      if (introAudio) {
        introAudio.pause();
      }
      if (loopAudio) {
        loopAudio.pause();
      }
      
      next()
    }
  }, [correctAnswers, lifes, next])

 
  useEffect(() => {
    return () => {
      if (loopAudio) {
        loopAudio.pause();
      }
    }
  }, [loopAudio])
  useEffect(() => {
    if (introAudio) {
      introAudio.play();
    }

    const handleClick = (event) => {
      
      loopAudio.play()
    };

    introAudio.addEventListener('ended', handleClick);
    
    return () => {
      if (introAudio) {
        introAudio.removeEventListener('click', handleClick);
        introAudio.pause();
      }
    }
  }, [introAudio])
  
  useEffect(() => {
   // console.log('useeffect showoptions',showOptions);
    if (showOptions) {
    //  console.log('mostrando opciones');
      setStartTimer(true);
      setShowAnimation(true)
      const optionsTimer = setTimeout(() => {
        denyAudio.play();
        setIndex(index+1);
        setEnergy((energy) => energy - 1);
      }, timer * 1000);
      setTimerOptions(optionsTimer)
      return () => clearTimeout(timerOptions)
    }
  }, [showOptions])

  useEffect(() => {
   // console.log('useeffect showHit',showHit);
    if (showHit) {
      
      
      const hitTimer = setTimeout(() => {
        setIndex(index+1);
        setEnergy((energy) => energy - 1);
        setShowHit(false);
      }, 1000);

      return () => clearTimeout(hitTimer)
    }
  }, [showHit])
  useEffect(() => {
    //console.log('useeffect showAttac',showAttac);
    if (showAttac ) {
        const attacTimer = setTimeout(() => {
          setShowAttac(false);
          setCorrectAnswers(correctAnswers + 1);
          setIndex(index+1);
        }, 1000);
  
        return () => clearTimeout(attacTimer)
    } 
  }, [showAttac])
 

  

  const onDone = () => {
    setShowOptions(true);
  };

  const onKeyDown = (key) => {
    //console.log('key',key);
    if (levelData.options.length >= parseInt(key) && parseInt(key) > 0 && showOptions) {
      //console.log('levelData.answer',levelData.answer);
      clearTimeout(timerOptions);
      if(levelData.answer === parseInt(key)) {
        //if(final){
          setShowAttac(true);
          
        //}else {
         // console.log('CORRECTO');
          //setCorrectAnswers(correctAnswers + 1);
          //setIndex(index+1);
        //}
       
      } else {
        //if(final){
          denyAudio.play();
          setShowHit(true);
        //} else {
 
         // denyAudio.play();
        //  setIndex(index+1);
        //  setEnergy((energy) => energy - 1);
        //}
       
      }
    }
  }
  const fightTimer = useMemo(() => {
    return showAnimation ? { animation: `fight-timer ${timer}s linear`, animationFillMode: 'forwards'} : {};
  },[showAnimation]);
 
 // console.log('levelData',levelData);
  const animation = useMemo(() => {
    if(!showHit && !showAttac && showOptions) {
      return still
    } else if(!showHit && !showAttac  && !showOptions) { 
      console.log('talk')
      return talk
    } else if (showHit) {
      return laugh
    } else if (showAttac) {
      if(final) {
        return hit
      } else {
        return still
      }
    }   
  }, [showHit,showAttac ,showOptions])
  

  console.log({showHit  ,showAttac  , showOptions, animation})
  return (
    <div className="Screen Fight">
      <div className="content" >
        <div>
          <div style={{display: 'flex', alignItems: 'center'}}>
            
    
            <img src={animation} className={`${showIntro ? 'left-animate' : ''}`}style={{ width:'314px', marginRight: '28px' , animation: showAttac && !final ? 'blinkaso linear .3s, blinkaso linear .3s,blinkaso linear .3s' : ''}} /> 
            
            <div className="text-zone">
            <TypeWriter contents={levelData.question}
              speed={50}
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
      <div className={`interactions ${showIntro ? 'up-animate' : ''} options-grid ${showHit ? 'shake' : ''}`}>
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
