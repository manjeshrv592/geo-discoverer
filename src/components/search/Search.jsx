import React, { useState, useEffect } from 'react';
import SearchForm from './SearchForm';
import SearchResult from './SearchResult';

const Search = ({ onSelectCountry }) => {
  const [toggleSearch, setToggleSearch] = useState(false);
  const [countryResults, setCountryResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [query, setQuery] = useState('');

  useEffect(
    function () {
      const controller = new AbortController();

      async function fetchCountries() {
        if (!query || query.length <= 2) return setCountryResults([]);
        setError('');
        setIsLoading(true);
        try {
          const res = await fetch(
            `https://restcountries.com/v3.1/name/${query}`,
            { signal: controller.signal }
          );

          const data = await res.json();

          if (data.status === 404) throw new Error('Country not found');

          setCountryResults(data);
        } catch (err) {
          if (err.name !== 'AbortError') {
            setError(err.message);
          }
        } finally {
          setIsLoading(false);
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
