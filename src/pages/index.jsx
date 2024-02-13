import React from 'react';
import FancyResponse from '@/components/FancyResponse';
import LoveSong from '@/components/LoveSong';

const Index = () => {
  return (
    <div className='relative h-screen flex items-center justify-center'>
      
      {/* Dark Overlay */}
      <div className='absolute inset-0 bg-black opacity-60'></div>

      {/* Content */}
      <div className='w-screen relative text-white text-center z-10'>

        <h1 className='text-4xl mb-4 font-bold'>
          Will you be my Valentine?
        </h1>

        <div className="flex justify-between items-center">
          <LoveSong />
        </div>

        <FancyResponse />

        {/* <button className='bg-white text-pink-200'>
          Yes
        </button> */}
        
      </div>
    </div>
  );
};

export default Index;
