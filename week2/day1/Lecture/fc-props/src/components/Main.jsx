import React from 'react'
import Bench from './Bench'
import Player from './Player'

function Main(props) {
    return (
        <div className='main-container'>
            <Bench/>
            <div className="team-container">
                <h2>Team</h2>
                <div className="player-container">
                    <Player name={'Kevin Durant'} position={'Forward'} number={35}/>
                    <Player name={'Steph Curry'} position={'Guard'} number={30}/>
                    <Player name={'Giannis Antetokounmpo'} position={'Forward'} number={34}/>
                    <Player name={'Lebron James'} position={'Forward'} number={23}/>
                </div>
            </div>
        </div>
    )
}

export default Main