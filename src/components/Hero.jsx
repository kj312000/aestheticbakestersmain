import React from 'react';
import { Link } from 'react-router-dom';
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className='text-white p-2'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#d59bf6] font-bold p-2 text-3xl'>
          Aesthetic Bakester
        </p>
        <div className='flex justify-center items-center'>
          <p className='md:text-4xl sm:text-3xl text-xl font-bold py-4'>
            Make life sweeter with a
          </p>
          <Typed
          className='md:text-4xl sm:text-3xl text-xl font-bold md:pl-4 pl-2'
            strings={['Cake', 'CupCake']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'>Welcome to Aesthetic Bakester, where we specialize in creating delicious and beautiful cakes and cupcakes that are perfect for any occasion.</p>
        <Link to="/cakes" className='bg-[#d59bf6] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Explore Cakes</Link>
      </div>
    </div>
  );
};

export default Hero;
