import React from 'react';


const LoveSong = () => {
  return (
    <div>
        <audio controls autoPlay loop>
        <source src="/songs/caluum_scoth.mp3" type="audio/mp3" />
        {/* Your browser does not support the audio element. */}
        </audio>
    </div>
  )
}

export default LoveSong;