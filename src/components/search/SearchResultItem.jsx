import React from 'react';

const SearchResultItem = ({
  country,
  onSelectCountry,
  onCountryResults,
  onQuery,
  onToggleSearch,
}) => {
  const handleClick = country => {
    onCountryResults(null);
    onSelectCountry(country);
    onQuery('');
    onToggleSearch(false);
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
