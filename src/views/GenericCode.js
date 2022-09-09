import React, { useEffect, useState } from 'react';
import './GenericCode.scss';
import TypeWriter from '../components/TypeWriter';
import KeyPress from './KeyPress';
import EnterSVG from '../assets/enter.svg';
import Deny from '../assets/deny.mp3';
const denyAudio = new Audio(Deny)

function GenericCode({ next, config, setStartTimer, setResetTimer }) {
  const { image, style, audio, contents, answer, length, hint } = config;
  const [showHint, setShowHint] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [hintUsed, setHintUsed] = useState(false);
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
    if (key === 'Shift') {
      if (!hintUsed) {
        setHintUsed(true);
        setResetTimer(value => value + 1)
      }

      setShowHint(!showHint)
    }
    if (key === 'Enter') {
      if (value.length === length) {
        if (answer === value) {
          next()
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

    if (['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(key)) {
      setValue((value) => {
        if (length > 0 && length > value.length) {
          return value + key.toString()
        }
        return value;

      });
    }
  }
  console.log('CodeGeneric showHelp', showHelp)
  return (
    <div className="Screen code">
      <div className="content">
        <img src={image} style={style} />
      </div>
      <div className="interactions">
        <TypeWriter contents={contents}
          speed={100}
          cursor={false}
          onDone={onDone} />
        {showHelp &&
          <>
            <p className="input">{value}</p>
            {
              [...Array(length).keys()].map((i) => { return (<div className="line" key={i}></div>) })
            }

            {value.length === length &&
              <img src={EnterSVG} className="enter blink"></img>
            }

            <KeyPress onKeyDown={onKeyDown}>
              <p className="hint">press SHIFT for hint (+5 min)</p>
            </KeyPress>
          </>
        }



      </div>
      {showHint &&
        <div className="hint-container">
          <p>{hint}</p>
          <p className="close">press SHIFT to Close</p>
        </div>
      }
    </div>
  );
}

export default GenericCode;
