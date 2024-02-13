import React from 'react';

const FancyResponse = ({ valentineName }) => {
  return (
    <div className="response">
      <h2>Congratulations!</h2>
      <p>{`${valentineName}, you've made my day! 🌟 Let's make this Valentine's Day unforgettable.`}</p>
    </div>
  );
};

export default FancyResponse;
