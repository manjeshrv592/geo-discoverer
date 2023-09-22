import React, { useState } from 'react';
import SearchForm from './SearchForm';
import SearchResult from './SearchResult';

const Search = () => {
  const [toggleSearchResult, setToggleSearchResult] = useState(false);

  const handleToggleSearchResult = query => {
    const queryStatus = query.length === 0 ? false : true;
    setToggleSearchResult(queryStatus);
  };

  return (
    <div className='search'>
      <SearchForm onQuery={handleToggleSearchResult} />
      {toggleSearchResult && <SearchResult />}
    </div>
  );
};

export default Search;
