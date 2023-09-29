import { useEffect, useState } from 'react';

export function useFetchCountries(query) {
  const [countryResults, setCountryResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(
    function () {
      const controller = new AbortController();

      async function fetchCountries() {
        if (!query || query.length <= 2) return setCountryResults([]);
        setError('');
        setIsLoading(true);
        try {
          const res = await fetch(
            `https://restcountries.com/v3.1/name/${query}`,
            { signal: controller.signal }
          );

          const data = await res.json();

          if (data.status === 404) throw new Error('Country not found');

          setCountryResults(data);
        } catch (err) {
          if (err.name !== 'AbortError') {
            setError(err.message);
          }
        } finally {
          setIsLoading(false);
        }
      }

      fetchCountries();

      return function () {
        controller.abort();
      };
    },
    [query]
  );

  return { countryResults, isLoading, error, setCountryResults };
}
