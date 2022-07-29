import React, { useEffect } from 'react'
import Logo from '../assets/logo.png';
import './Splash.scss';
function Splash({ next, duration }) {

    useEffect(() => {
        if (duration > 0) {
            const timer = setTimeout(() => {
                next();
            }, duration);
            return () => clearTimeout(timer);
        }
    }, [duration, next]);

    return (
        <div><img className="logo" src={Logo}></img></div>
    )
}

export default Splash