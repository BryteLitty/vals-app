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

      <div className="flex flex-col items-center w-screen z-10">
        <h1 className="font-bold text-pink-100 text-6xl mb-4">
          I love you my pretty Queen
        </h1>

        <p className="text-pink-700 text-md">
          I have a song for you... click this button to listen!
        </p>

        <Image
          src={roseImg}
          width={100}
          height={0}
          alt='sksk'
          className='w-200'
        />

        <button
          className="bg-white text-pink-600 font-bold px-6 py-2 mt-4 rounded-full hover:bg-pink-600 hover:text-white focus:outline-none"
          onClick={playSong}
        >
          {isPlaying ? 'Pause Song' : 'Play Song'}
        </button>

        {isPlaying && <LoveSong />}
      </div>
    </div>
  );
};

export default Yep;
