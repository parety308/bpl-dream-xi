import React from 'react';

const Banner = ({handleClick}) => {
    return (
        <div className='border-1 bg-base-100 my-10 py-1'>
            <div className='px-10 flex justify-between'>
                <div>
                    <h3 className='border p-1 rounded-md'>Available Players</h3>
                </div>
                <div className='flex gap-3'>
                    <span className='border p-1 rounded-md' onClick={()=>handleClick(true)} >Available</span>
                    <span className='border p-1 rounded-md' onClick={()=>handleClick(false)} >Selected</span>
                </div>
            </div>
        </div>
    );
};

export default Banner;