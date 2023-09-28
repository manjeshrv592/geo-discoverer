import React, { useState, useEffect } from 'react';
import SearchForm from './SearchForm';
import SearchResult from './SearchResult';

const Search = ({ onSelectCountry }) => {
  const [toggleSearch, setToggleSearch] = useState(false);
  const [countryResults, setCountryResults] = useState(null);
  const [query, setQuery] = useState('');

  useEffect(
    function () {
      const controller = new AbortController();

      async function fetchCountries() {
        if (!query || query.length <= 2) return setCountryResults([]);
        try {
          const res = await fetch(
            `https://restcountries.com/v3.1/name/${query}`,
            { signal: controller.signal }
          );

          const data = await res.json();

          setCountryResults(data);
        } catch (err) {
          // if(err.name !== 'AbortError') {
          //   setError(er.message)
          // }
        } finally {
        }
      }

      fetchCountries();

      return function () {
        controller.abort();
      };
    },
    [query]
  );

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
          />
        )}
      </div>
    </>
  );
};

export default Search;
