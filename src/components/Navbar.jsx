import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import dp from '../assets/dp.jpg';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <Link to="/" class="w-12 h-12 flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <img alt='logo' className='w-full h-full mt-5 rounded-full' src={dp}/>
      </Link>
      <ul className='hidden md:flex'>
        <Link to="/" className='p-4'>Home</Link>
        <Link to="/cakes" className='p-4'>Cakes</Link>
        <Link to="/cupcakes" className='p-4'>Cupcakes</Link>
        <Link to="/menu" className='p-4'>Menu</Link>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'flex flex-col justify-start align-start fixed p-5 z-50 left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'flex flex-col justify-start align-start ease-in-out z-50 h-full duration-500 fixed left-[-100%]'}>
          <Link class="w-12 h-12 mb-10 flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img alt='logo' className='w-full h-full mt-5 rounded-full' src='https://tse4.mm.bing.net/th?id=OIP.7FxFTTICk2GKOpVUh15ylAHaHX&pid=Api&P=0'/>
          </Link>
          <Link onClick={() => setNav(false)} to="/" className='p-4 border-b border-gray-600'>Home</Link>
          <Link onClick={() => setNav(false)} to="/cakes" className='p-4 border-b border-gray-600'>Cakes</Link>
          <Link onClick={() => setNav(false)} to="/cupcakes" className='p-4 border-b border-gray-600'>Cupcakes</Link>
          <Link onClick={() => setNav(false)} to="/menu" className='p-4 border-b border-gray-600'>Menu</Link>
      </ul>
    </div>
  );
};

export default Navbar;
