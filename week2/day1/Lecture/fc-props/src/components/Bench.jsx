import React, { useState } from 'react';
import Player from './Player';

const Bench = (props) => {
    return (
        <div className='bench'>
            <Player
                name={'Zion Williamson'}
                position={'Forward'}
                number={1}
            />
            <Player
                name={'Draymond Green'}
                position={'Forward'}
                number={23}
            />
            <Player
                name={'Mo Bamba'}
                position={'Forward'}
                number={7}
            />
        </div>
    )
}

export default Bench;