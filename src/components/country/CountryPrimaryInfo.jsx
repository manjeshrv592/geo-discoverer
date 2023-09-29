import React from 'react';
import Neighbors from '../neighbors/Neighbors';

const CountryPrimaryInfo = ({
  country,
  onBookmarks,
  bookmarks,
  neighbours,
  onSelectCountry,
  isLoading,
  error,
}) => {
  const existsInBookmark = bookmarks.filter(
    bookmark => bookmark.cca3 === country.cca3
  );
  const isBookmarked = existsInBookmark.length !== 0;

  return (
    <div className='primary-info'>
      <img
        src={country.flags.svg}
        alt={`${country.name.common} flag`}
        className='country-flag border'
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
          <button
            onClick={() => onBookmarks(country)}
            className='btn-icon'
            title='Add to Bookmark'
          >
            {isBookmarked ? (
              <i className='fa-solid fa-bookmark'></i>
            ) : (
              <i className='fa-regular fa-bookmark'></i>
            )}
          </button>
        </div>
        <small>Region</small>
        <h4 className='mb-sm'>{country.region}</h4>
        <Neighbors
          neighbours={neighbours}
          onSelectCountry={onSelectCountry}
          isLoading={isLoading}
          error={error}
          name={country.name.common}
        />
      </div>
    </div>
  );
};

export default CountryPrimaryInfo;
