import React, { useEffect, useState } from 'react';
import './Screen.scss';
import TypeWriter from '../components/TypeWriter';
//import KeyPress from './KeyPress';
const audio = new Audio("../assets/challengeaccepted.mp3")

function Screen({ next }) {
  
  const [state, setState] = useState(1);



  return (
    <div className="Screen">


      <div className="content">

      </div>
      <div className="interactions">
        {state < 3 &&
          <TypeWriter contents={[`In the year 20XX, there’s an evil hacker called ‘Laser’ who’s threatening to control humanity at hands of his evil robot army.`,
            3000,
            `Only you… YOU, who bears the knowledge to hack through his mainframe can stand a chance against him. Are you ready to take the challenge?`,
            3000]}
            speed={50}
            onDone={() => {
              if (state === 1) setState(state + 1);
            }} />}s
        {state === 2 &&
         <KeyPress onEnter={() => {
          setState(state + 1);
          audio.play();
         }}/>}
        {state === 3 &&
          <TypeWriter contents={['You’re the hacking hero! Humanity’s last hope...', 2000]}
            speed={50}
            onDone={() => {
              next()
            }} />}

      </div>
    </div>
  );
}

export default Screen;
