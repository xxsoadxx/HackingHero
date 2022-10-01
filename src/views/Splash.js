import React, { useEffect, useState } from 'react';
import KeyPress from '../components/KeyPress.js'
import SplashVideo from '../assets/Splash.m4v';
import ReactPlayer from 'react-player';
import Music from '../assets/burnthewind.mp3';
import './Splash.scss';
const audio = new Audio(Music);


function Splash({ next, config: { duration }}) {
    const [showEnter, setShowEnter] = useState(false);
    useEffect(() => {
        if (duration > 0) {
            const timer = setTimeout(() => {
                next();
            }, duration);
            return () => clearTimeout(timer);
        }
    }, [duration, next]);
    useEffect(() => {
        audio.play()

        return () =>  audio.pause()
    }, []);

    const onKeyDown = (key) => {
        if(key === 'Enter' && showEnter) {
            next()
        }
    }

    const onDone = () => {
        setShowEnter(true)
    }

    return (
        <>
            <ReactPlayer url={SplashVideo} width={'90vw'} height={'auto'} playing={true} onEnded={() => onDone()} controls={false}></ReactPlayer>
            { showEnter &&
            <KeyPress onKeyDown={onKeyDown}>
                <div className="blink" style={{marginTop:'24px',marginTop: '24px',position: 'absolute',top: '52%',fontSize: '24px'}}>PRESS ENTER</div>
            </KeyPress> }
        </>
    )
}

export default Splash