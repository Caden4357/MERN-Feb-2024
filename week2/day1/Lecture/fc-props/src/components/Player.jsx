import React, {useState} from 'react';

const Player = (props) => {
    // console.log('****PROPS****', props);
    const {name, position, number} = props
    return (
        <div className='player-card'>
            <h3>{name}</h3>
            <p>Position: {position}</p>
            <p>Number: {number}</p>
        </div>
)}

export default Player;