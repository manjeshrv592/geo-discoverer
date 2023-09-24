import React from 'react';

const CountryPrimaryInfo = () => {
  return (
    <div className='primary-info'>
      <img
        src='https://flagcdn.com/in.svg'
        alt='India flag'
        className='country-flag'
      />
      <small className='text-primary-400 flag-description'>
        The flag of India is composed of three equal horizontal bands of
        saffron, white and green. A navy blue wheel with twenty-four spokes —
        the Ashoka Chakra — is centered in the white band.
      </small>
      <div className='country-overview'>
        <div className='country-name'>
          <div>
            <small>Country</small>
            <h2 className='mb-sm'>India</h2>
          </div>
          <button className='btn-icon' title='Add to Bookmark'>
            <i className='fa-regular fa-bookmark'></i>
          </button>
        </div>
        <small>Region</small>
        <h4 className='mb-sm'>Asia</h4>
        <small className='mb-tn'>Neighbours (6)</small>
        <div className='neighbours'>
          <span title='Bangladesh'>
            <img src='https://flagcdn.com/bd.svg' alt='Bangladesh Flag' />
          </span>
          <span title='Bhutan'>
            <img src='https://flagcdn.com/bt.svg' alt='Bhutan Flag' />
          </span>
          <span title='Myanmar'>
            <img src='https://flagcdn.com/mm.svg' alt='Myanmar Flag' />
          </span>
          <span title='China'>
            <img src='https://flagcdn.com/cn.svg' alt='China Flag' />
          </span>
          <span title='Nepal'>
            <img src='https://flagcdn.com/np.svg' alt='Nepal Flag' />
          </span>
          <span title='Pakistan'>
            <img src='https://flagcdn.com/pk.svg' alt='Pakistan Flag' />
          </span>
        </div>
      </div>
    </div>
  );
};

export default CountryPrimaryInfo;
