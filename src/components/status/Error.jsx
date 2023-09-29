import React from 'react';

const Error = ({ message }) => {
  return (
    <div className='status-container error-container'>
      <span> 💥Error💥 {message}</span>
    </div>
  );
};

export default Error;
