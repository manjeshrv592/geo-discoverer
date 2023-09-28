import React, { useState } from 'react';
import Header from './components/header/Header';
import BrandName from './components/header/BrandName';
import Bookmarks from './components/bookmarks/Bookmarks';
import Search from './components/search/Search';
import Footer from './components/Footer';
import Country from './components/country/Country';
import CountryPrimaryInfo from './components/country/CountryPrimaryInfo';
import CountrySecondaryInfo from './components/country/CountrySecondaryInfo';

const App = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleSelectedCountry = country => {
    setSelectedCountry(country);
  };

  return (
    <div className='container'>
      <Header>
        <BrandName />
        <Search onSelectCountry={handleSelectedCountry} />
        <Bookmarks />
      </Header>
      <Country>
        {selectedCountry && <CountryPrimaryInfo country={selectedCountry} />}
        {selectedCountry && <CountrySecondaryInfo country={selectedCountry} />}
      </Country>
      <Footer />
    </div>
  );
};

export default App;
