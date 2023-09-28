import React from 'react';

const SearchResultItem = ({ country, onSelectCountry, onCountryResults }) => {
  const handleClick = country => {
    onCountryResults(null);
    onSelectCountry(country);
  };

  return (
    <li className='search-result-item' onClick={() => handleClick(country)}>
      <img src={country.flags.svg} alt={`${country.name.common} flag`} />
      <h4>{country.name.common}</h4>
      <span>{country.region}</span>
    </li>
  );
};

export default SearchResultItem;
