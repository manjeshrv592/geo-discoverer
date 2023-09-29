import { useState, useEffect } from 'react';

export function useFetchNeighbours(country) {
  // Pieces of states required to handle fetch
  const [neighbours, setNeighbours] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  // Fetch neighbours
  useEffect(
    function () {
      // If no country is selected then return
      if (!country) return;

      // If country is island then there are no borders, so return
      const { borders } = country;
      if (!borders) return setNeighbours([]);

      // Fuction to fetch neighbours
      async function fetchNeighbours() {
        setError('');
        setIsLoading(true);
        try {
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
        } catch (err) {
          setError(err.message);
        } finally {
          setIsLoading(false);
        }
      }

      // fetch neighbours
      fetchNeighbours();
    },
    [country]
  );

  //   Return necessary data
  return { neighbours, isLoading, error, setNeighbours };
}
