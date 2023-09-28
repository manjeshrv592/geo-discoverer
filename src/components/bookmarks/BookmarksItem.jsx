import React from 'react';

const BookmarksItem = ({ country, onSelectCountry }) => {
  return (
    <li className='search-result-item' onClick={() => onSelectCountry(country)}>
      <img src={country.flags.svg} alt={`${country.name.common} flag`} />
      <h4>{country.name.common}</h4>
    </li>
  );
};

export default BookmarksItem;
