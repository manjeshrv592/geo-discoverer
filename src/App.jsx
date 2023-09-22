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
      <main className='main'>
        <div className='main-info'>
          <div className='country-flag-container'>
            <img
              src='https://flagcdn.com/in.svg'
              alt='India flag'
              className='country-flag'
            />
            {/* <small className='text-primary-400'>
              The flag of India is composed of three equal horizontal bands of
              saffron, white and green. A navy blue wheel with twenty-four
              spokes — the Ashoka Chakra — is centered in the white band.
            </small> */}
          </div>
          <div className='country-primary-info'>
            <div>
              <small>Country</small>
              <h2 className='mb-sm'>India</h2>
              <small>Region</small>
              <h4 className='mb-sm'>Asia</h4>
            </div>
            <small className='mt-auto'>Neighbours (6)</small>
            <div className='neighbours'>
              <span title='Bangladesh'>
                <img src='https://flagcdn.com/bd.svg' alt='Bangladesh Flag' />
              </span>
              <span title='Bhutan'>
                <img src='https://flagcdn.com/bt.svg' alt='Bhutan Flag' />
              </span>
              <span title='Myanmar'>
                <img src='https://flagcdn.com/mm.svg' alt='Myanmar Flag' />
              </span>
              <span title='China'>
                <img src='https://flagcdn.com/cn.svg' alt='China Flag' />
              </span>
              <span title='Nepal'>
                <img src='https://flagcdn.com/np.svg' alt='Nepal Flag' />
              </span>
              <span title='Pakistan'>
                <img src='https://flagcdn.com/pk.svg' alt='Pakistan Flag' />
              </span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
