import React from 'react';

const LoveSong = () => {
  return (
    <div>
      <audio autoPlay loop>
        <source src="/songs/Ella_Mai_ThisIs.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default LoveSong;
