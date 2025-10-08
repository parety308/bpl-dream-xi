import React from 'react';

const Banner = ({handleClick,toggle,selectPlayers}) => {
    return (
        <div className='border-1 bg-base-100 my-10 py-1'>
            <div className='px-10 flex justify-between'>
                <div>
                    <h3 className='border p-1 rounded-md font-bold text-2xl'>{toggle?"Availables Player":`Selected Player(${selectPlayers.length}/6)`}</h3>
                </div>
                <div className='flex gap-3'>
                    <span className='border p-1 rounded-md font-bold text-xl' onClick={()=>handleClick(true)} >Available</span>
                    <span className='border p-1 rounded-md font-bold text-xl' onClick={()=>handleClick(false)} >{`Selected(${selectPlayers.length})`}</span>
                </div>
            </div>
        </div>
    );
};

export default Banner;