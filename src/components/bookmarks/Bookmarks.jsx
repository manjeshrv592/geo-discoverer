import React, { useState } from 'react';
import BookmarksItem from './BookmarksItem';

const Bookmarks = ({ bookmarks, onSelectCountry }) => {
  const [toggleBookmarkList, setToggleBookmarkList] = useState(false);

  const handleToggleBookmarkList = () => {
    setToggleBookmarkList(toggleBookmarkList => !toggleBookmarkList);
  };

  return (
    <div className='bookmarks'>
      <button className='btn btn-light' onClick={handleToggleBookmarkList}>
        <i className='fa-solid fa-bookmark'></i>
        Bookmarks
        <span className='btn-badge btn-badge-primary'>{bookmarks.length}</span>
      </button>

      <ul className={`bookmarks-list ${toggleBookmarkList ? 'open' : ''}`}>
        {bookmarks.map(country => (
          <BookmarksItem
            key={country.cca3}
            country={country}
            onSelectCountry={onSelectCountry}
            onToggleBookmarkList={handleToggleBookmarkList}
          />
        ))}
      </ul>
    </div>
  );
};

export default Bookmarks;
