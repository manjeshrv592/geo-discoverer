import React from 'react';

const CountryPrimaryInfo = ({ country }) => {
  return (
    <div className='primary-info'>
      <img
        src={country.flags.svg}
        alt={`${country.name.common} flag`}
        className='country-flag'
      />
      <small className='text-primary-400 flag-description'>
        {country.flags.alt}
      </small>
      <div className='country-overview'>
        <div className='country-name'>
          <div>
            <small>Country</small>
            <h2 className='mb-sm'>{country.name.common}</h2>
          </div>
          <button className='btn-icon' title='Add to Bookmark'>
            <i className='fa-regular fa-bookmark'></i>
          </button>
        </div>
        <small>Region</small>
        <h4 className='mb-sm'>{country.region}</h4>
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
