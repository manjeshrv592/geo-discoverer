import React from 'react';
import Loader from '../status/Loader';
import Error from '../status/Error';

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
        <small className='mb-tn'>Neighbours ({neighbours.length})</small>
        {isLoading && <Loader className='justify-content-start' />}
        {error && <Error message={error} />}
        {neighbours.length === 0 && (
          <span className='d-block'>{`No neighbours ${country.name.common} is a Island`}</span>
        )}
        <div className='neighbours'>
          {neighbours.map(neighbour => (
            <span
              key={neighbour.cca3}
              title={neighbour.name.common}
              onClick={() => onSelectCountry(neighbour)}
            >
              <img
                src={neighbour.flags.svg}
                alt={`${neighbour.name.common} flag`}
              />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CountryPrimaryInfo;
