import React from 'react';
import SearchResultItem from './SearchResultItem';
import Loader from '../status/Loader';
import Error from '../status/Error';

const SearchResult = ({
  countries,
  onSelectCountry,
  onCountryResults,
  isLoading,
  error,
}) => {
  return (
    <ul className='search-result-list'>
      {isLoading && <Loader />}
      {error && <Error message={error} />}
      {!isLoading &&
        !error &&
        countries.map(country => (
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
