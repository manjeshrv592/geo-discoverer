import React, { useState } from 'react';
import BookmarksItem from './BookmarksItem';

const Bookmarks = () => {
  const [toggleBookmarkList, setToggleBookmarkList] = useState(false);

  const handleClick = () => {
    setToggleBookmarkList(toggleBookmarkList => !toggleBookmarkList);
  };

  return (
    <div className='bookmarks'>
      <button className='btn btn-light' onClick={handleClick}>
        <i className='fa-solid fa-bookmark'></i>
        Bookmarks
        <span className='btn-badge btn-badge-primary'>7</span>
      </button>

      {toggleBookmarkList && (
        <ul className='bookmarks-list'>
          <BookmarksItem
            flag='https://flagcdn.com/io.svg'
            country='British Indian Ocean Territory'
          />
          <BookmarksItem flag='https://flagcdn.com/in.svg' country='India' />
        </ul>
      )}
    </div>
  );
};

export default Bookmarks;
