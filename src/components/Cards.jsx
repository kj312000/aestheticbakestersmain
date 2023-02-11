import React from 'react';

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-white' src="https://images.pexels.com/photos/917300/pexels-photo-917300.jpeg?auto=compress&cs=tinysrgb&w=600" alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Aesthetic Special</h2>
              <p className='text-center text-4xl font-bold'>999 - 1999 Rs</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Belgium Choclate</p>
                  <p className='py-2 border-b mx-8'>Choclate Vanila</p>
                  <p className='py-2 border-b mx-8'>Want to know more?</p>
              </div>
              <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Explore Menu</button>
          </div>
          <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src="https://images.pexels.com/photos/917300/pexels-photo-917300.jpeg?auto=compress&cs=tinysrgb&w=600" alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Bento Cakes</h2>
              <p className='text-center text-4xl font-bold'>Starting @249 Rs</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Butterscotch</p>
                  <p className='py-2 border-b mx-8'>Vanila</p>
                  <p className='py-2 border-b mx-8'>Want to know more?</p>
              </div>
              <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Explore Menu</button>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-white' src="https://images.pexels.com/photos/917300/pexels-photo-917300.jpeg?auto=compress&cs=tinysrgb&w=600" alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Cheese Cakes</h2>
              <p className='text-center text-4xl font-bold'>999 - 1349 Rs</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>New york cheesecake</p>
                  <p className='py-2 border-b mx-8'>Biscoff cheesecake</p>
                  <p className='py-2 border-b mx-8'>Want to know more?</p>
              </div>
              <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Explore Menu</button>
          </div>
      </div>
    </div>
  );
};

export default Cards;
