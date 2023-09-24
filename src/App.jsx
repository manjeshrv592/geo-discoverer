import React from 'react';
import Header from './components/header/Header';
import BrandName from './components/header/BrandName';
import Bookmarks from './components/bookmarks/Bookmarks';
import Search from './components/search/Search';
import Footer from './components/Footer';
import Country from './components/country/Country';
import CountryPrimaryInfo from './components/country/CountryPrimaryInfo';
import CountrySecondaryInfo from './components/country/CountrySecondaryInfo';

const App = () => {
  return (
    <div className='container'>
      <Header>
        <BrandName />
        <Search />
        <Bookmarks />
      </Header>
      <Country>
        <CountryPrimaryInfo />
        <CountrySecondaryInfo />
      </Country>
      <Footer />
    </div>
  );
};

export default App;
