import React from 'react';
import SearchResultItem from './SearchResultItem';

const SearchResult = ({ countries }) => {
  return (
    <ul className='search-result-list'>
      {countries.map(country => (
        <SearchResultItem
          key={country.cca3}
          flag={country.flags.svg}
          country={country.name.common}
          region={country.region}
        />
      ))}
    </ul>
  );
};

export default SearchResult;
