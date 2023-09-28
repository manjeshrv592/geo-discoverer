import React from 'react';
import SearchResultItem from './SearchResultItem';

const SearchResult = ({ countries, onSelectCountry, onCountryResults }) => {
  return (
    <ul className='search-result-list'>
      {countries.map(country => (
        <SearchResultItem
          key={country.cca3}
          country={country}
          onSelectCountry={onSelectCountry}
          onCountryResults={onCountryResults}
        />
      ))}
    </ul>
  );
};

export default SearchResult;
