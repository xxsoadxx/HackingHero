import React, { useEffect, useState } from 'react';
import TypeWriter from '../components/TypeWriter';
import KeyPress from '../components/KeyPress';


function AllReady({ next, back, config }) {
  const { image, style, audio, contents } = config;

  const [ showOptions, setShowOptions ] = useState(false);

  const options = ['Yes', 'No, again'];
  useEffect(() => {
    if(audio) {
      audio.play();
    }
    return () => {
      if(audio) audio.pause();
    }
  }, [audio])

  useEffect(() => {
    setShowOptions(false)
  }, [config])

  const onDone = () => {
    console.log('onDonedfsdfsdf');
    setShowOptions(true)
    
  };

  const onKeyDown = (key) => {

    if(key === '1' && showOptions) {
      next()
    }
    if(key === '2' && showOptions) {
      back(3)
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

                { showOptions ? options.map((item, index) => {
                  return <p key={index}>{`${index+1}>${item}`}</p>
                } ) : ''}
            
              <KeyPress onKeyDown={onKeyDown}/>

          </div>

    </div>
  );
}

export default AllReady;
