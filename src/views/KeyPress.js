import React, {useEffect} from 'react'

const KeyPress = ({onKeyDown, children}) => {


  useEffect(() => {

  // If released key is our target key then set to false
    const upHandler = ({ key }) => {

    };
    const downHandler  = ({ key }) => {

      onKeyDown(key)
      
    }
    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);
    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  }, [onKeyDown]); // Empty array ensures that effect is only run on mount and unmount
 



  return (
    <>
    {children}
    </>
  )
}

export default KeyPress