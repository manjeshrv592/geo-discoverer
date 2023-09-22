import React from 'react';
import Header from './components/header/Header';
import BrandName from './components/header/BrandName';
import Bookmarks from './components/bookmarks/Bookmarks';
import Search from './components/search/Search';

const App = () => {
  return (
    <div className='container'>
      <Header>
        <BrandName />
        <Search />
        <Bookmarks />
      </Header>
    </div>
  );
};

export default App;
