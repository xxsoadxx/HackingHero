import React, {useEffect,useState} from 'react'

const PressEnter = ({onEnter}) => {

  useEffect(() => {
    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);
    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount
  // If pressed key is our target key then set to true
  function downHandler({ key }) {

    if (key === 'Enter') {
      onEnter();
    }
 
    
  }
  // If released key is our target key then set to false
  const upHandler = ({ key }) => {

  };


  return (
    <div className="blink" style={{marginTop:'24px'}}>PRESS ENTER</div>
  )
}

export default PressEnter