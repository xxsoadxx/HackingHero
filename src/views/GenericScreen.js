import React, { useEffect, useState } from 'react';
import TypeWriter from '../components/TypeWriter';
import KeyPress from '../components/KeyPress';
import EnterSVG from '../assets/enter.svg';
import ReactPlayer from 'react-player';

function GenericScreen({ profileImage, next, config }) {
  const { video, image: stageImage, classes,loop, style, audio, audioSecundary, contents, onlyVideo , speed, endOnVideo, useProfileImage} = config;
  const [showEnter, setShowEnter] = useState(false);
  let image;
  if(useProfileImage) {
    image = profileImage
  } else {
    image = stageImage
  }
  useEffect(() => {
    if(audio) {
      console.log('AUDIO');
      audio.play();
    }
    return () => {
      if(audio) audio.pause();
    }
  }, [audio, config])
  useEffect(() => {
    if(audioSecundary) {
      audioSecundary.play();
    }
    return () => {
      if(audioSecundary) audioSecundary.pause();
    }
  }, [audioSecundary])

  
  useEffect(() => {
    setShowEnter(false)
    if(audio) {
      console.log('AUDIO');
      audio.play();
    }
    return () => {
      if(audio) audio.pause();
    }
  }, [config])

  const onDone = () => {
    console.log('onDone');
    if(!video) {
      setShowEnter(true);
    }
    
  };

  const onKeyDown = (key) => {
    if(key === 'Enter') {
      if(audio) audio.pause()
        next()
    }
  }


  return (

    
    <div className="Screen">
      { onlyVideo ? 
        <ReactPlayer url={video} style={style} playing={true} onEnded={() => next()} controls={false}></ReactPlayer>
        :
        <>
          <div className="content">
            { image && <img src={image} className={classes} style={style} /> }
            { video && <ReactPlayer url={video} loop={loop || false} style={style} playing={true} onEnded={() =>{ if(endOnVideo) { next() } else { setShowEnter(true)}}} controls={false}></ReactPlayer> }
          </div>
          <div className="interactions">
              <TypeWriter contents={contents}
                speed={speed ? speed : 100}
                onDone={onDone} />
            {showEnter &&
            <>
            <img src={EnterSVG} className="enter blink"></img>
            <KeyPress onKeyDown={onKeyDown}/>
            </>}
          </div>
        </>}
    </div>
  );
}

export default GenericScreen;
