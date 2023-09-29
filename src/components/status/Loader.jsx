import React from 'react';

const Loader = () => {
  return (
    <div className='status-container'>
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
