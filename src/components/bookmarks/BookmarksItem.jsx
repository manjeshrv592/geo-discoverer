import React from 'react';

const BookmarksItem = ({ flag, country, region }) => {
  return (
    <li className='search-result-item'>
      <img src={flag} alt={`${country} flag`} />
      <h4>{country}</h4>
    </li>
  );
};

export default BookmarksItem;
