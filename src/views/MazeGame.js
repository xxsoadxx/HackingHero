import React, { useEffect, useRef, useState } from 'react';
import { Maze, DrawMaze, Player } from '../helpers/lib';
import './MazeGame.scss';
const levels = [10, 15, 25, 38];
const difficulty = levels[3];
const PureCanvas = React.forwardRef((props, ref) => <canvas id="mazeCanvas" className="border" height="600" width="600" ref={ref} />);
const sprite = new Image();
const finishSprite = new Image();

const MazeGame = () => {
    const canvasRef = useRef(null);
    const [loadedSprite, setLoadedSprite] = useState(false)
    const [loadedEnd, setLoadedEnd] = useState(false)
    
    const onloadSprite = () => {
        setLoadedSprite(true)
    };
    const onloadEndFlag = () => {
        setLoadedEnd(true)
    };

    useEffect(() => {
        
        sprite.src = "https://image.ibb.co/dr1HZy/Pf_RWr3_X_Imgur.png" + "?" + new Date().getTime();
        sprite.setAttribute("crossOrigin", " ");
        sprite.onload = onloadSprite;
    
        
        finishSprite.src = "https://image.ibb.co/b9wqnJ/i_Q7m_U25_Imgur.png" + "?" + new Date().getTime();
        finishSprite.setAttribute("crossOrigin", " ");
        finishSprite.onload = onloadEndFlag;
    }, [])
    
    
    const onComplete = () => {
        console.log('Complete!');
    }

    useEffect(() => {
        
        console.log('useEffect ', loadedSprite, loadedEnd);
        if(loadedSprite && loadedEnd ) {
            const mazeCanvas = canvasRef.current;
            const cellSize = mazeCanvas.width / difficulty;
            const maze = new Maze(difficulty, difficulty);
            const ctx = mazeCanvas.getContext("2d");
            const draw = new DrawMaze(maze, ctx, cellSize, finishSprite);
            const player = new Player(maze, mazeCanvas, cellSize, onComplete, sprite);    
        }
        

        const handleResize = e => {

        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, [loadedSprite, loadedEnd]);



    return (

        <div id="view">
            <div id="mazeContainer">
                <PureCanvas ref={canvasRef} />
            </div>
        </div>

    )
}

export default MazeGame
