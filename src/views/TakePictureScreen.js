import React, { useEffect, useState, useRef } from 'react';
import TypeWriter from '../components/TypeWriter';
import KeyPress from './KeyPress';
import EnterSVG from '../assets/enter.svg';
import Webcam from "react-webcam";

function TakePictureScreen({ setProfileImage, next, config }) {
  const { audio, contents } = config;
  const [showEnter, setShowEnter] = useState(false);
  const [image, setImage] = useState();
  const webcamRef = useRef();

  function handleCaptureScreenshot() {
    const imageSrc = webcamRef.current.getScreenshot();
    console.log(imageSrc);
    setImage(imageSrc);
    setShowEnter(true);
  }

  useEffect(() => {
    if(audio) {
      audio.play();
    }
  }, [audio])

  useEffect(() => {
    setShowEnter(false)
  }, [config])

  const onDone = () => {
      //setShowEnter(true);
  };

  const onKeyDown = (key) => {
    console.log(key);
    if(key === 'Enter' && showEnter) {
        setProfileImage(image);
        next()
    }
    if(key === ' ') {
      handleCaptureScreenshot()
    }
    if(key === 'Shift') {
      setImage(undefined)
      setShowEnter(false);
    }
    
  }


  return (

    
    <div className="Screen">
          <div className="content">
            { image ? <img src={image} /> : <Webcam ref={webcamRef} audio={false} screenshotFormat="image/jpeg" height={400}/>}
          </div>
          <div className="interactions">
          {!showEnter ? <TypeWriter contents={contents}
                speed={100}
                onDone={onDone} />
             :
            <>
            <TypeWriter contents={['Press enter to confirm or shift to take again']}
                speed={100}
                onDone={onDone} />
            <img src={EnterSVG} className="enter blink"></img>
            </>}
            <KeyPress onKeyDown={onKeyDown}/>
          </div>
    </div>
  );
}

export default TakePictureScreen;
