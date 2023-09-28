import React from 'react';

const CountryPrimaryInfo = ({
  country,
  onBookmarks,
  bookmarks,
  neighbours,
  onSelectCountry,
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
