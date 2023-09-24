import React, { useState } from 'react';
import SearchForm from './SearchForm';
import SearchResult from './SearchResult';

const Search = () => {
  const [toggleSearchResult, setToggleSearchResult] = useState(false);
  const [toggleSearch, setToggleSearch] = useState(false);

  const handleToggleSearchResult = query => {
    const queryStatus = query.length === 0 ? false : true;
    setToggleSearchResult(queryStatus);
  };

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
        <SearchForm onQuery={handleToggleSearchResult} />
        {toggleSearchResult && <SearchResult />}
      </div>
    </>
  );
};

export default Search;
