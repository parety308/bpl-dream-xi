import React from 'react';
const Nav = ({ navImg, coinImg, availableBalance }) => {
  return (
    <div className="navbar bg-base-100 shadow-sm px-10">
      <div className="flex-1 ">
        <img className='w-[60px] h-[60px]' src={navImg} alt="logo" />
      </div>
      <div className="flex justify-center items-center border-1 p-1 rounded-xl">
        <span className='text-xl'>{availableBalance}</span>
        <img className='w-[20px] h-[20px]' src={coinImg} alt="" />
      </div>
    </div>
  );
};

export default Nav;