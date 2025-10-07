import React from 'react';

const Player = ({ player }) => {
    const { player_name, rating, price, player_image, player_country, playing_role } = player;
    return (
        <div className=' my-2  flex flex-col  rounded-xl px-5 py-3 shadow-sm'>
            <img className='rounded-xl' src={player_image} alt="" />
            <h2 className='font-bold text-xl'>{player_name}</h2>
            <h2 className='flex justify-between'><span className='font-bold'>{player_country}</span><span>{playing_role}</span></h2>
            <h2><span className='font-bold'>Rating</span> : {rating}</h2>
            <div className='flex justify-between'>
                <h2> <span className='font-bold'>Price</span> : {price}</h2>
                <button className="btn  shadow-none">Small</button>

            </div>
        </div>
    );
};

export default Player;