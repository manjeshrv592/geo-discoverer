import React, { useState } from 'react';
import SearchForm from './SearchForm';
import SearchResult from './SearchResult';
import { useFetchCountries } from '../../customHooks/useFetchCountries';

const Search = ({ onSelectCountry }) => {
  const [toggleSearch, setToggleSearch] = useState(false);
  const [query, setQuery] = useState('');
  const { countryResults, setCountryResults, isLoading, error } =
    useFetchCountries(query);

  return (
    <>
      <div className='search-toggle'>
        <button onClick={() => setToggleSearch(true)} className='btn-icon'>
          <i className='fa-solid fa-magnifying-glass'></i>
        </button>
      </div>
      <div className={`search ${toggleSearch ? 'open' : ''}`}>
        <button
          className='btn-icon close-search'
          onClick={() => setToggleSearch(false)}
        >
          <i className='fa-solid fa-xmark'></i>
        </button>
        <SearchForm query={query} setQuery={setQuery} />
        {countryResults && (
          <SearchResult
            countries={countryResults}
            onSelectCountry={onSelectCountry}
            onCountryResults={setCountryResults}
            isLoading={isLoading}
            error={error}
            onQuery={setQuery}
            onToggleSearch={setToggleSearch}
          />
        )}
      </div>
    </>
  );
};

export default Search;
