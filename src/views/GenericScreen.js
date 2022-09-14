import React, { useEffect, useState } from 'react';
import TypeWriter from '../components/TypeWriter';
import KeyPress from './KeyPress';
import EnterSVG from '../assets/enter.svg';
import ReactPlayer from 'react-player';
function GenericScreen({ profileImage, next, config }) {
  const { video, image: stageImage, style, audio, contents, onlyVideo , speed, endOnVideo, useProfileImage} = config;
  const [showEnter, setShowEnter] = useState(false);
  let image;
  if(useProfileImage) {
    image = profileImage
  } else {
    image = stageImage
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
    console.log('onDone');
    if(!video) {
      setShowEnter(true);
    }
    
  };

  const onKeyDown = (key) => {
    if(key === 'Enter') {
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
            { image && <img src={image} style={style} /> }
            { video && <ReactPlayer url={video} style={style} playing={true} onEnded={() =>{ if(endOnVideo) { next() } else { setShowEnter(true)}}} controls={false}></ReactPlayer> }
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
