import React from 'react';

const SPlayer = ({ player, handleCoin,removePlayer }) => {
    return (
        <div className='border-2 border-gray-400 mx-10 rounded-md mb-2'>
            <div className='flex justify-between items-center p-2'>
                <div className='flex justify-center items-center gap-3 '>
                    <div>
                        <img src={player.player_image} className='h-[150px] w-[200px] rounded-xl' alt="" />
                    </div>
                    <div>
                        <h2 className='font-bold text-xl'>{player.player_name}</h2>
                        <h4>{player.batting_style}</h4>
                    </div>
                </div>
                <div>
                    <img onClick={() => {
                        const bl = parseInt(player.price.split('$').join('').split(',').join(''))
                        handleCoin(-bl);
                        removePlayer(player)
                    }} src="https://i.ibb.co.com/Kzct1s3W/Frame.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default SPlayer;