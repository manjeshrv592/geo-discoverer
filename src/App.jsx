import React, { useState } from "react";
import { useLocalStorageState } from "./customHooks/useLocalStorageState";
import Header from "./components/header/Header";
import BrandName from "./components/header/BrandName";
import Bookmarks from "./components/bookmarks/Bookmarks";
import Search from "./components/search/Search";
import Footer from "./components/Footer";
import Country from "./components/country/Country";
import CountryPrimaryInfo from "./components/country/CountryPrimaryInfo";
import CountrySecondaryInfo from "./components/country/CountrySecondaryInfo";
import { useFetchNeighbours } from "./customHooks/useFetchNeighbours";
import FillerText from "./components/status/FillerText";

const App = () => {
  // NOTE: RESTCountries api does not provide id on countries data. So we will use cca3 property on countries as ID or KEY

  // This will be displayed in main area
  const [selectedCountry, setSelectedCountry] = useState(null);

  // Bookmarks array: We will make use of custom local storage hook to store it's state on page reload
  const [bookmarks, setBookmarks] = useLocalStorageState([], "countries");

  // Custom hook to fetch neighbours
  const { neighbours, setNeighbours, isLoading, error } =
    useFetchNeighbours(selectedCountry);

  // Function to Remove country from bookmark array
  const removeBookmark = country =>
    setBookmarks(bookmarks =>
      bookmarks.filter(bookmark => bookmark.cca3 !== country.cca3)
    );

  // Function to Add country to bookmark array
  const addBookmark = country =>
    setBookmarks(bookmarks => [...bookmarks, country]);

  const handleBookmarks = country => {
    // Check if country already exists in bookmark
    const isBookmarked =
      bookmarks.filter(bookmark => bookmark.cca3 === country.cca3).length !== 0;

    // If yes remove from bookmarks
    if (isBookmarked) removeBookmark(country);

    // Else add it to bookmark
    if (!isBookmarked) addBookmark(country);
  };

  // Add new country
  const handleSelectedCountry = country => {
    setSelectedCountry(country);

    // We will set neighbours to empty array when user selects new country in this way we will delete old country neighbours list and new neighbours will be fetched from useFetchNeighbours.
    setNeighbours([]);
  };

  return (
    <div className="container">
      <Header>
        <BrandName />
        <Search onSelectCountry={handleSelectedCountry} />
        <Bookmarks
          onSelectCountry={handleSelectedCountry}
          bookmarks={bookmarks}
        />
      </Header>
      <Country>
        {!selectedCountry && <FillerText />}
        {selectedCountry && (
          <CountryPrimaryInfo
            country={selectedCountry}
            bookmarks={bookmarks}
            onBookmarks={handleBookmarks}
            neighbours={neighbours}
            onSelectCountry={handleSelectedCountry}
            isLoading={isLoading}
            error={error}
          />
        )}
        {selectedCountry && <CountrySecondaryInfo country={selectedCountry} />}
      </Country>
      <Footer />
    </div>
  );
};

export default App;
