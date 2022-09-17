import React, { useEffect } from 'react';
import KeyPress from '../components/KeyPress.js'
import Logo from '../assets/logo.png';
import './Splash.scss';
function Splash({ next, config: { duration }}) {

    useEffect(() => {
        if (duration > 0) {
            const timer = setTimeout(() => {
                next();
            }, duration);
            return () => clearTimeout(timer);
        }
    }, [duration, next]);
    const onKeyDown = (key) => {
        if(key === 'Enter') {
            next()
        }
    }
    return (
        <>
            <div><img className="logo" src={Logo}></img></div>
            <KeyPress onKeyDown={onKeyDown}>
                <div className="blink" style={{marginTop:'24px'}}>PRESS ENTER</div>
            </KeyPress>
        </>
    )
}

export default Splash