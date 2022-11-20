import React, { useEffect, useState } from 'react'
import './Rank.scss';
const Rank = () => {
    const [games, setGames] = useState([]);
    useEffect(() => {
        async function init() {
            const response = await fetch('https://hacking-hero.herokuapp.com/rank', { method: 'GET', cors: 'no-cors' }).then((response) => response.json());
            console.log(response.rows);
            setGames(response.rows.filter((i) => i.teamname ))
        }
        init()
    }, []);


    
  return (
    <div className="main">
        <h1>Top Ranking</h1>
        {games.map((game) => {
            return <div className="rank">
                <img src={game.image} style={{width:'200px', objectFit: 'contain', marginRight:'45px'}} />
                <div className='rank-item'>
                    <p>Agency: { game.teamname }</p>  <p>Stage:{ game.stage }</p> <p>Penalty minutes: { game.penalty * 5 } </p><p>Game Start: { game.startdate } </p><p>Last Update: { game.lastupdate }</p>  
                </div>
                
            </div>
        })}
    </div>
  )
}

export default Rank