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
        <div className='primary-info'>
          <img
            src='https://flagcdn.com/in.svg'
            alt='India flag'
            className='country-flag'
          />
          <small className='text-primary-400 flag-description'>
            The flag of India is composed of three equal horizontal bands of
            saffron, white and green. A navy blue wheel with twenty-four spokes
            — the Ashoka Chakra — is centered in the white band.
          </small>
          <div className='country-overview'>
            <div className='country-name'>
              <div>
                <small>Country</small>
                <h2 className='mb-sm'>India</h2>
              </div>
              <button className='btn-icon' title='Add to Bookmark'>
                <i className='fa-regular fa-bookmark'></i>
              </button>
            </div>
            <small>Region</small>
            <h4 className='mb-sm'>Asia</h4>
            <small className='mb-tn'>Neighbours (6)</small>
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
        <div className='secondary-info'>
          <div>
            <small>Capital</small>
            <h4>New Delhi</h4>
          </div>
          <div>
            <small>Independent</small>
            <h4>Yes</h4>
          </div>
          <div>
            <small>Currency</small>
            <h4>Indian rupee (₹)</h4>
          </div>
          <div>
            <small>Landlocked</small>
            <h4>No</h4>
          </div>
          <div>
            <small>Population (Million)</small>
            <h4>1,380</h4>
          </div>
          <div>
            <small>Diving side</small>
            <h4>Left</h4>
          </div>
          <div>
            <small>Timezone</small>
            <h4>UTC+05:30</h4>
          </div>
          <div>
            <small>Start of week</small>
            <h4>Monday</h4>
          </div>
        </div>
      </main>
      <footer className='footer'>
        Designed & Developed by{' '}
        <a
          rel='noreferrer'
          href='https://twitter.com/manjesh_webdev'
          target='_blank'
        >
          Manjesh R V
        </a>
      </footer>
    </div>
  );
};

export default App;
