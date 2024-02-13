import React from 'react';
import FancyResponse from '@/components/FancyResponse';
import LoveSong from '@/components/LoveSong';

const Index = () => {
  return (
    <div className='relative h-screen'>

      <div className='absolute inset-0 bg-black opacity-60'></div>
      <LoveSong />
      <div className="h-screen flex items-center justify-center">

        <div className='w-screen relative text-white text-center z-10'>

          <h1 className='text-4xl mb-4 font-bold'>
            Will you be my Valentine?
          </h1>

          <div className="font-bold flex flex-col gap-3 w-1/2 mx-auto">
            <button className='bg-pink-600 rounded-2xl px-8 py-2'>Yes 🤍</button>
            <button className='bg-white text-red-600 rounded-2xl px-8 py-2'>Nope ❌</button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Index;
