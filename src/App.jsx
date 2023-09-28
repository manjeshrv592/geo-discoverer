import React, { useEffect, useState } from 'react';
import Header from './components/header/Header';
import BrandName from './components/header/BrandName';
import Bookmarks from './components/bookmarks/Bookmarks';
import Search from './components/search/Search';
import Footer from './components/Footer';
import Country from './components/country/Country';
import CountryPrimaryInfo from './components/country/CountryPrimaryInfo';
import CountrySecondaryInfo from './components/country/CountrySecondaryInfo';

const App = () => {
  // NOTE: We will use cca3 property on countries as ID or KEY
  const [selectedCountry, setSelectedCountry] = useState(null);

  // bookmarks array: We will check for local storage if countries are available, if yes we will use it else we will initialize state with empty array
  const [bookmarks, setBookmarks] = useState(function () {
    const storedValue = localStorage.getItem('countries');
    if (!storedValue) return [];
    return JSON.parse(storedValue);
  });

  const [neighbours, setNeighbours] = useState([]);

  const handleBookmarks = country => {
    // Check if country already exists in bookmark
    const existsInBookmark = bookmarks.filter(
      bookmark => bookmark.cca3 === country.cca3
    );
    const isBookmarked = existsInBookmark.length !== 0;

    // If yes remove from bookmarks
    if (isBookmarked)
      return setBookmarks(bookmarks =>
        bookmarks.filter(bookmark => bookmark.cca3 !== country.cca3)
      );

    // Else add it to bookmark
    setBookmarks(bookmarks => [...bookmarks, country]);
  };

  const handleSelectedCountry = country => {
    setSelectedCountry(country);
  };

  // Add bookmarks to local storage
  useEffect(
    function () {
      localStorage.setItem('countries', JSON.stringify(bookmarks));
    },
    [bookmarks]
  );

  // Load neighbours
  useEffect(
    function () {
      if (!selectedCountry) return;
      const { borders } = selectedCountry;

      async function fetchNeighbours() {
        const results = await Promise.allSettled(
          borders.map(border =>
            fetch(`https://restcountries.com/v3.1/alpha?codes=${border}`)
          )
        );

        const successResults = results.filter(
          result => (result.status = 'fulfilled')
        );

        const data = await Promise.allSettled(
          successResults.map(result => result.value.json())
        );

        const neighbourCountries = data.map(d => d.value[0]);

        setNeighbours(neighbourCountries);
      }

      fetchNeighbours();
    },
    [selectedCountry]
  );

  return (
    <div className='container'>
      <Header>
        <BrandName />
        <Search onSelectCountry={handleSelectedCountry} />
        <Bookmarks
          onSelectCountry={handleSelectedCountry}
          bookmarks={bookmarks}
        />
      </Header>
      <Country>
        {selectedCountry && (
          <CountryPrimaryInfo
            country={selectedCountry}
            bookmarks={bookmarks}
            onBookmarks={handleBookmarks}
            neighbours={neighbours}
            onSelectCountry={handleSelectedCountry}
          />
        )}
        {selectedCountry && <CountrySecondaryInfo country={selectedCountry} />}
      </Country>
      <Footer />
    </div>
  );
};

export default App;
