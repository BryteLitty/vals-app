import React from 'react';
import FancyResponse from '@/components/FancyResponse';
import LoveSong from '@/components/LoveSong';
import Link from 'next/link';


const Index = () => {
  
  const LoversName = 'love'

  return (
    <div className='relative h-screen'>

      <div className='absolute inset-0 bg-black opacity-60'></div>
      {/* <LoveSong /> */}
      <div className="h-screen flex items-center justify-center">

        <div className='w-screen relative text-white text-center z-10'>

          <h1 className='text-4xl mb-4 font-bold px-4'>
            hey <span className='text-pink-400'>{LoversName}</span>! <br />
            happy Val's day
          </h1>

          <div className="font-bold flex flex-col gap-3 w-1/2 mx-auto">
            <Link href='/yep'>
              <button className='w-full mt-3 bg-pink-600 rounded-2xl px-4 py-3'>A surprise for you 🤍</button>
            </Link>

            <Link href='/Nay'>
              {/* <button className='w-full bg-white text-red-600 rounded-2xl px-8 py-2'>Nope ❌</button> */}
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Index;
