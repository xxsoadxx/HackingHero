import React, { useEffect, useState, useMemo } from 'react';
import TypeWriter from '../components/TypeWriter';
import KeyPress from '../components/KeyPress';
import EnterSVG from '../assets/enter.svg';
import ReactPlayer from 'react-player';

function GenericScreen({ profileImage, next, config, teamName }) {
  const {onDone: redirect,audioOnDone, videoWidth, videoHeigth,video, image: stageImage, classes,loop, style, audio, audioSecundary, contents: contentConf, onlyVideo , speed, endOnVideo, useProfileImage, secondimage,switchImageTime} = config;
  const [showEnter, setShowEnter] = useState(false);
  const [imagetoShow, setImagetoShow] = useState(useProfileImage ? profileImage: stageImage);
  const contents = useMemo( () => {
    return contentConf.map((c) => {
      if(typeof(c) === 'string') {
        return c.replace('@teamName', teamName);
      } else {
        return c
      }
    });
  }, [contentConf, teamName]);

  useEffect(() => {
    if(audio && !audioOnDone) {
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
    setImagetoShow(useProfileImage ? profileImage: stageImage);
    setShowEnter(false)
    if(audio && !audioOnDone) {
      console.log('AUDIO');
      audio.play();
    }

    let timer = null;
    
    if (secondimage && switchImageTime) {
      timer = setTimeout(() => {
        setImagetoShow(secondimage)
      }, switchImageTime);
    }
    return () => {
      if(audio) audio.pause();
      if(timer) clearTimeout(timer);
    }
  }, [config])

  const onDone = () => {
    console.log('onDone');
    if(!video) {
      if(audio && audioOnDone) {
        console.log('AUDIO');
        audio.play();
      }
      setShowEnter(true);
    }
    
  };

  const onKeyDown = (key) => {
    if(key === 'Enter') {
      if(audio) audio.pause()
        next()
    }
  }
  const onEnded = redirect || function () { next() }

  return (

    
    <div className="Screen">
      { onlyVideo ? 
        <ReactPlayer url={video} width={videoWidth} height={videoHeigth} style={style} playing={true} onEnded={onEnded} controls={false}></ReactPlayer>
        :
        <>
          <div className="content">
            { imagetoShow && <img src={imagetoShow} className={classes} style={style} /> }
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
