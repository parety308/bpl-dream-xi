import React from 'react';
import SPlayer from './SPlayer';

const SelectedPlayers = ({toggle,selectPlayers,handleCoin,removePlayer}) => {
    // console.log(selectPlayers);
    return (
        <div className={`${toggle ? "bg-amber-200" : ""}`}>
            {
                selectPlayers.map(player=><SPlayer 
                    player={player}
                    handleCoin={handleCoin}
                    removePlayer={removePlayer}></SPlayer>)
            }
        </div>
    );
};

export default SelectedPlayers;