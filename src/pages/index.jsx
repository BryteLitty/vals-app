import React from 'react';
import FancyResponse from '@/components/FancyResponse';
import LoveSong from '@/components/LoveSong';
import Link from 'next/link';


const Index = () => {
  
  const LoversName = 'My Love'

  return (
    <div className='relative h-screen'>

      <div className='absolute inset-0 bg-black opacity-60'></div>
      {/* <LoveSong /> */}
      <div className="h-screen flex items-center justify-center">

        <div className='w-screen relative text-white text-center z-10'>

          <h1 className='text-4xl mb-4 font-bold px-4'>
            Hey <span className='text-yellow-400'>{LoversName}</span>, will you be my Valentine?
          </h1>

          <div className="font-bold flex flex-col gap-3 w-1/2 mx-auto">
            <Link href='/yep'>
              <button className='bg-pink-600 rounded-2xl px-8 py-2'>Yes 🤍</button>
            </Link>

            <Link href='/Nay'>
              <button className='bg-white text-red-600 rounded-2xl px-8 py-2'>Nope ❌</button>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Index;
