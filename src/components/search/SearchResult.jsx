import React from 'react';
import SearchResultItem from './SearchResultItem';

const SearchResult = () => {
  return (
    <ul className='search-result-list'>
      <SearchResultItem
        flag='https://flagcdn.com/io.svg'
        country='British Indian Ocean Territory'
        region='Africa'
      />
      <SearchResultItem
        flag='https://flagcdn.com/in.svg'
        country='India'
        region='Asia'
      />
    </ul>
  );
};

export default SearchResult;
