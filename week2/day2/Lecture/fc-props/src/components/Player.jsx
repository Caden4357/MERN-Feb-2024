import React, {useState} from 'react';

const Player = (props) => {
    // console.log('****PROPS****', props);
    let {name, position, number, points} = props
    //        Getter,       Setter
    const [playerPoints, setPlayerPoints] = useState(points)
    console.log(setPlayerPoints);
    
    const madeABasket = (pointsThisTurn) => {
        setPlayerPoints(playerPoints+pointsThisTurn)
    }

    return (
        <div className='player-card'>
            <h3>{name}</h3>
            <p>Position: {position}</p>
            <p>Number: {number}</p>
            <p>Points: {playerPoints}</p>
            <button onClick={() => madeABasket(1)}>Made a free throw</button>
            <button onClick={() => madeABasket(2)}>Made a 2 pointer</button>
            <button onClick={() => madeABasket(3)}>Made a 3 pointer</button>
        </div>
)}

export default Player;