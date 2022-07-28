import React, { useEffect } from 'react'

function Splash({ next, duration }) {

    useEffect(() => {
        if (duration > 0) {
            const timer = setTimeout(() => {
                next();
            }, duration);
            return () => clearTimeout(timer);
        }
    }, []);

    return (
        <div>Splash</div>
    )
}

export default Splash