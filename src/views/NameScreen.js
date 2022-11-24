import React, { useEffect, useState } from 'react';
import './GenericCode.scss';
import TypeWriter from '../components/TypeWriter';
import KeyPress from '../components/KeyPress';
import EnterSVG from '../assets/enter.svg';
import Deny from '../assets/deny.mp3';
const denyAudio = new Audio(Deny)

function NameScreen({ next, config, setTeamName, profileImage}) {
  const { image, style, audio, contents, length, allowLetters, hideLines } = config;
  const [showHelp, setShowHelp] = useState(false);
  const [value, setValue] = useState('');
  useEffect(() => {
    if (audio) {
      audio.play();
    }
    return () => {
      if (audio) {
        audio.pause();
      }
    }
  }, [audio])



  useEffect(() => {
  }, [value])

  const onDone = () => {
    console.log('CodeGeneric Done')
    setShowHelp(true);
  };

  const onKeyDown = (key) => {

    if (key === 'Enter') {
      if (value.length > 0) {
          setTeamName(value);
          setValue('');
          next()
      } else {
          denyAudio.play();
        
      }

    }
    if (key === 'Backspace') {
      setValue((value) => {
        return value.slice(0, -1)
      })
    }
    if (key !== 'Backspace' && key !== 'Enter' && key !== 'Shift' && key !== 'Alt' && key !== 'Meta' && key !== 'Tab' && key !== 'Control' && key !== 'CapsLock') {
        setValue((value) => {
          if (length > 0 && length > value.length) {
            return value + key.toString().toUpperCase()
          }
          return value;
  
        });
      

      }
  
    
  }
  console.log('CodeGeneric showHelp', showHelp)
  return (
    <div className="Screen code">
      <div className="content">
        <img src={image || profileImage} style={style} />
      </div>
      <div className="interactions">
        <TypeWriter contents={contents}
          speed={50}
          cursor={false}
          onDone={onDone} />
        {showHelp &&
          <>
            <p className="input">{value}</p>
            { !hideLines &&
              [...Array(length).keys()].map((i) => { return (<div className="line" key={i}></div>) })
            }

            {value.length > 1 &&
              <img src={EnterSVG} className="enter blink"></img>
            }

            <KeyPress onKeyDown={onKeyDown}>
             
            </KeyPress>
          </>
        }



      </div>
      
    </div>
  );
}

export default NameScreen;
