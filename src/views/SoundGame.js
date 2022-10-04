import React, { useEffect, useState } from 'react';
import './SoundGame.scss';
import TypeWriter from '../components/TypeWriter';
import KeyPress from '../components/KeyPress';
import EnterSVG from '../assets/enter.svg';
import Deny from '../assets/deny.mp3';
import ReactPlayer from 'react-player';
import endMusic from '../assets/endmusic.mp3'

import sound1 from '../assets/1.m4a'
import sound2 from '../assets/2.m4a'
import sound3 from '../assets/3.m4a'
import sound4 from '../assets/4.m4a'
import sound5 from '../assets/5.m4a'
import sound6 from '../assets/6.m4a'
const denyAudio = new Audio(Deny)
const endMusicAudio = new Audio(endMusic)
const Note1 = new Audio(sound1)
const Note2 = new Audio(sound2)
const Note3 = new Audio(sound3)
const Note4 = new Audio(sound4)
const Note5 = new Audio(sound5)
const Note6 = new Audio(sound6)
/*
const Note1 = new Audio('http://carolinegabriel.com/demo/js-keyboard/sounds/048.wav')
const Note2 = new Audio('http://carolinegabriel.com/demo/js-keyboard/sounds/053.wav')
const Note3 = new Audio('http://carolinegabriel.com/demo/js-keyboard/sounds/051.wav')
const Note4 = new Audio('http://carolinegabriel.com/demo/js-keyboard/sounds/046.wav')
const Note5 = new Audio('http://carolinegabriel.com/demo/js-keyboard/sounds/044.wav')
const Note6 = new Audio('http://carolinegabriel.com/demo/js-keyboard/sounds/041.wav')
*/
function SoundGame({ back, next, config, setStartTimer, setResetTimer }) {
  const { style, audio, contents, answer, length, video } = config;
  const [showHint, setShowHint] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [value, setValue] = useState('');
  useEffect(() => {
    if (audio) {
      audio.play();
    }
  }, [audio])

  /*useEffect(() => {
    console.log('useeffect config change')
    setShowHelp(false)
  }, [config])
*/
  useEffect(() => {
  }, [value])

  const onDone = () => {
    console.log('CodeGeneric Done')
    setShowHelp(true);
    setStartTimer(true);
  };

  const onKeyDown = (key) => {
    if (key === 'Shift' && showHelp && !showHint) {
      setShowHint(!showHint)
    }
    if (key === 'Enter') {
      if (value.length === length) {
        if (answer === value) {
          endMusicAudio.play()
          //next()
        } else {
          denyAudio.play()
          setValue('')
          setResetTimer(value => value + 1)
        }
      }

    }
    if (key === 'Backspace') {
      setValue((value) => {
        return value.slice(0, -1)
      })
    }

    if (['0', '1', '2', '3', '4', '5', '6'].includes(key)) {

      

      
      setValue((value) => {
        console.log('length', length)
        console.log('value', value)
        
        if (length > 0 && length > value.length) {

          if(key === '1') {
            Note1.currentTime = 0;
            Note1.play();
          } else if(key === '2') {
            Note2.currentTime = 0;
            Note2.play();
          } else if(key === '3') {
            Note3.currentTime = 0;
            Note3.play();
          }else if(key === '4') {
            Note4.currentTime = 0;
            Note4.play();
          }else if(key === '5') {
            Note5.currentTime = 0;
            Note5.play();
          }else if(key === '6') {
            Note6.currentTime = 0;
            Note6.play();
          } 
           const newVal = value + key.toString();
  
           if (answer === newVal) {
              //endMusicAudio.play()
              next()
           }
          return newVal;
      } 
      return value;
      });
    }
  }
  console.log('CodeGeneric value', value)
  const styleBox = {
    display: 'inline-block',
    marginLeft: '10px',
    marginRight: '10px',
    textAlign: 'center',
    fontSize: '26px',
    height: '100px',
    width: '100px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
  return (
    <div className="Screen soundgame">

      <div className="content">

        <div style={styleBox} className="red">
        
          <p>1</p>
        </div>
        <div style={styleBox} className="green">
      
          <p>2</p>
        </div>
        <div style={styleBox} className="purple">
       
          <p>3</p>
        </div>
        <div style={styleBox} className="skyblue">
       
          <p>4</p>
        </div>
        <div style={styleBox} className="yellow">
       
          <p>5</p>
        </div>
        <div style={styleBox} className="orange">
       
          <p>6</p>
        </div>
      </div>
      <div className="interactions">
        <TypeWriter contents={contents}
          speed={100}
          cursor={false}
          onDone={onDone} />
        {showHelp &&
          <>
            
            <div className="input">{value.split("").map((character, index) => {
              if(character === '1') {
                return <div key={index} className="small-icon red">
                
                </div>
              } else if(character === '2') {
                return <div key={index} className="small-icon green">
               
              </div>
              } else if(character === '3') {
                return <div key={index} className="small-icon purple">
              
              </div>
              } else if(character === '4') {
                return <div key={index} className="small-icon skyblue">
             
              </div>
              } else if(character === '5') {
                return <div key={index} className="small-icon yellow">
         
              </div>
              } else if(character === '6') {
                return <div key={index} className="small-icon orange">
          
              </div>
              }
            })}</div>
            {
              [...Array(length).keys()].map((i) => { return (<div className="line" key={i}></div>) })
            }
            {value.length === length &&
              <img src={EnterSVG} className="enter blink"></img>
            }

            <KeyPress onKeyDown={onKeyDown}>

            </KeyPress>
          </>
        }



      </div>
      {showHint &&
        <div className="hint-container">
          
        </div>
      }
    </div>
  );
}

export default SoundGame;
