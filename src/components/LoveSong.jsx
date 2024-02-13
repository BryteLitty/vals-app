import React, { useEffect } from 'react';

const LoveSong = () => {
  useEffect(() => {
    const audio = new Audio('/songs/Ella_Mai_ThisIs.mp3');
    audio.volume = 0.2;
    audio.play();

    return () => {
      // Cleanup or handle any logic when the component unmounts
      audio.pause();
    };
  }, []); // Empty dependency array ensures this effect runs once on mount

  return <div />;
};

export default LoveSong;
