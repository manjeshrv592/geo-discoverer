import React, { useState, useEffect } from 'react';
import SearchForm from './SearchForm';
import SearchResult from './SearchResult';

const Search = () => {
  const [toggleSearch, setToggleSearch] = useState(false);
  const [countryResults, setCountryResults] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(
    function () {
      async function fetchCountries() {
        if (!query || query.length <= 2) return setCountryResults([]);
        try {
          const res = await fetch(
            `https://restcountries.com/v3.1/name/${query}`
          );

          const data = await res.json();

          console.log(data);
          setCountryResults(data);
        } catch (err) {
        } finally {
        }
      }

      fetchCountries();
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
        {countryResults.length > 0 && (
          <SearchResult countries={countryResults} />
        )}
      </div>
    </>
  );
};

export default Search;
