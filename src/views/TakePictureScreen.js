import React, { useEffect, useState, useRef } from 'react';
import TypeWriter from '../components/TypeWriter';
import KeyPress from '../components/KeyPress';
import EnterSVG from '../assets/enter.svg';
import Webcam from "react-webcam";
const text = ['Press enter to confirm or shift to take again',500];

function TakePictureScreen({ setProfileImage, next, config }) {
  const { audio, contents, speed } = config;
  const [showEnter, setShowEnter] = useState(false);
  const [enableAction, setEnableAction] = useState(false);
  const [image, setImage] = useState();
  const webcamRef = useRef();

  function handleCaptureScreenshot() {
    const imageSrc = webcamRef.current.getScreenshot();
    console.log(imageSrc);
    setImage(imageSrc);
    setShowEnter(true);
    setEnableAction(false)
  }

  useEffect(() => {
    if(audio) {
      audio.play();
    }
  }, [audio])

  useEffect(() => {
    setShowEnter(false)
    setEnableAction(false)
  }, [config])

  const onDone = () => {
    setEnableAction(true)
  };

  const onKeyDown = (key) => {
    console.log(key);
    if(key === 'Enter' && showEnter && enableAction  ) {
        setProfileImage(image);
        next()
    }
    if(key === ' ' && !showEnter && enableAction) {
     
      handleCaptureScreenshot()
    }
    if(key === 'Shift' && showEnter && enableAction) {
      setImage(undefined)
      setShowEnter(false);
      setEnableAction(false)
    }
    
  }


  return (

    
    <div className="Screen">
          <div className="content">
            { image ? <img src={image} /> : <Webcam ref={webcamRef} audio={false} screenshotFormat="image/jpeg" height={400}/>}
          </div>
          <div className="interactions">
          {!showEnter && <TypeWriter contents={contents}
                speed={speed ? speed : 100}
                onDone={onDone} />
            }
            
            {showEnter && <TypeWriter contents={text}
                speed={speed ? speed : 100}
                onDone={onDone} />
            
            }

            {showEnter && enableAction && <img src={EnterSVG} className="enter blink"></img>}
            <KeyPress onKeyDown={onKeyDown}/>
          </div>
    </div>
  );
}

export default TakePictureScreen;
