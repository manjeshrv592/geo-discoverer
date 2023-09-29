import React from 'react';

const Loader = ({ className }) => {
  return (
    <div className={`status-container ${className}`}>
      <div className='lds-ellipsis'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
