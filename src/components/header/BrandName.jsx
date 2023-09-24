import React from 'react';

const BrandName = () => {
  return (
    <div className='brand-name'>
      <img className='logo' src='./logo.svg' alt='Logo' />
      <div className='logo-text'>
        <h1 className='h1'>GeoDiscoverer</h1>
        <span className='tagline'>Let's learn Geography</span>
      </div>
    </div>
  );
};

export default BrandName;
