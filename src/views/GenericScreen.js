import React, { useEffect, useState } from 'react';
import TypeWriter from '../components/TypeWriter';
import KeyPress from './KeyPress';
import EnterSVG from '../assets/enter.svg';
function GenericScreen({ next, config }) {
  const { image, style, audio, contents } = config;
  const [showEnter, setShowEnter] = useState(false);

  useEffect(() => {
    if(audio) {
      audio.play();
    }
  }, [audio])

  useEffect(() => {
    setShowEnter(false)
  }, [config])

  const onDone = () => {
    setShowEnter(true);
  };

  const onKeyDown = (key) => {
    if(key === 'Enter') {
        next()
    }
  }


  return (
    <div className="Screen">
      <div className="content">
        <img src={image} style={style} />
      </div>
      <div className="interactions">
          <TypeWriter contents={contents}
            speed={100}
            onDone={onDone} />
        {showEnter &&
        <>
        <img src={EnterSVG} className="enter blink"></img>
         <KeyPress onKeyDown={onKeyDown}/>
         </>}
        

      </div>
    </div>
  );
}

export default GenericScreen;
