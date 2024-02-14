import React, { useState } from 'react';
import { motion } from 'framer-motion';
import LoveSong from '@/components/LoveSong';

const Yep = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const playSong = () => {
    // Toggle the play state
    setIsPlaying(prevState => !prevState);
  };

  return (
    <div className="yay-container relative">
      <div
        className="absolute inset-0 bg-black opacity-40"
      ></div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
        style={{
          // backgroundImage: 'url(/img/rose.png)',  // Update the path accordingly
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.4,
        }}
      ></motion.div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="flex flex-col items-center w-screen z-10 p-5 text-center text-white"
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
          className="font-black text-3xl mb-4"
        >
          I love you my pretty queen 😘
        </motion.h1>

        <motion.button
          whileHover={{ scale: 1.1 }}
          className="bg-white text-pink-600 font-black px-6 py-2 mt-4 rounded-full hover:bg-pink-600 hover:text-white focus:outline-none"
          onClick={playSong}
        >
          {isPlaying ? 'Pause Song' : 'this for you 💝'}
        </motion.button>

        {isPlaying && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 3, duration: 1 }}
          >
            <LoveSong />
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default Yep;
