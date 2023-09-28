import React from 'react';

const CountrySecondaryInfo = ({ country }) => {
  const { name: currencyName, symbol } = Object.values(country.currencies)[0];

  return (
    <div className='secondary-info'>
      <div>
        <small>{country.capital.length > 1 ? 'Capitals' : 'Capital'}</small>
        <h4>
          {country.capital.map(city => (
            <span className='d-block' key={city}>
              {city}
            </span>
          ))}
        </h4>
      </div>
      <div>
        <small>Independent</small>
        <h4>{country.independent ? 'Yes' : 'No'}</h4>
      </div>
      <div>
        <small>Currency</small>
        <h4>
          {currencyName} ({symbol})
        </h4>
      </div>
      <div>
        <small>Landlocked</small>
        <h4>{country.landlocked ? 'Yes' : 'No'}</h4>
      </div>
      <div>
        <small>Population (Million)</small>
        <h4>{(country.population / 1000000).toFixed(2)}</h4>
      </div>
      <div>
        <small>Diving side</small>
        <h4>{country.car.side}</h4>
      </div>
      <div>
        <small>{country.timezones.length > 1 ? 'Timezones' : 'Timezone'}</small>
        <h4>
          {country.timezones.map(time => (
            <span className='d-block' key={time}>
              {time}
            </span>
          ))}
        </h4>
      </div>
      <div>
        <small>Start of week</small>
        <h4>{country.startOfWeek}</h4>
      </div>
    </div>
  );
};

export default CountrySecondaryInfo;
