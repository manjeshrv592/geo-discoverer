import React from 'react';

const BookmarksItem = ({ country, onSelectCountry, onToggleBookmarkList }) => {
  const handleClick = country => {
    onSelectCountry(country);
    onToggleBookmarkList(false);
  };

  return (
    <li className='search-result-item' onClick={() => handleClick(country)}>
      <img src={country.flags.svg} alt={`${country.name.common} flag`} />
      <h4>{country.name.common}</h4>
    </li>
  );
};

export default BookmarksItem;
