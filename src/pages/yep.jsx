import React, { useState } from 'react';
import LoveSong from '@/components/LoveSong';
import Image from 'next/image';

import roseImg from '../../public/img/rose.png';

const Yep = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const playSong = () => {
    // Toggle the play state
    setIsPlaying(prevState => !prevState);
  };

  return (
    <div className="yay-container relative">
      <div className="absolute inset-0 bg-black opacity-40"></div>

      <div className="flex flex-col items-center w-screen z-10 p-5 text-center">
        <h1 className="font-black text-white text-3xl mb-4">
          I love you my pretty queen 😘
        </h1>

        {/* <p className="text-yellow-300 text-md">
        In the dance of hearts, you're my sweet tune, <br />
        Underneath the stars, a love that'll never swoon. <br />

        Happy Valentine's Day, my heart's delight, <br />
        In your arms, everything feels just right. 

        </p> */}

        {/* <div className='text-5xl'>
        😘
        </div> */}

        {/* <Image
          src={roseImg}
          width={100}
          height={0}
          alt='sksk'
          className='w-200 mb-0'
        /> */}

        <button
          className="bg-white text-pink-600 font-black px-6 py-2 mt-4 rounded-full hover:bg-pink-600 hover:text-white focus:outline-none"
          onClick={playSong}
        >
          {isPlaying ? 'Pause Song' : 'Unleash my love 💝'}
        </button>

        {isPlaying && <LoveSong />}
      </div>
    </div>
  );
};

export default Yep;
