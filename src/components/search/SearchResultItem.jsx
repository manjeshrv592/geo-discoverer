import React from 'react';

const SearchResultItem = ({ flag, country, region }) => {
  return (
    <li className='search-result-item'>
      <img src={flag} alt={`${country} flag`} />
      <h4>{country}</h4>
      <span>{region}</span>
    </li>
  );
};

export default SearchResultItem;
