import React, { use } from 'react';
import Player from './Player';

const AvailablePlayers = ({ playersPromiser }) => {
    const players = use(playersPromiser);
    // console.log(players);
    return (
        <div className=' grid lg:grid-cols-3 px-10 gap-7 md:grid-cols-2 '>
            {
                players.map(player => <Player player={player}></Player>)
            }
        </div>
    );
};

export default AvailablePlayers;