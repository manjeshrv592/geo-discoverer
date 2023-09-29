import { useState, useEffect } from 'react';

export function useLocalStorageState(initialState, key) {
  // Set state: Check if data is stored using key, if not return with initialState, else use stored data
  const [value, setValue] = useState(function () {
    const storedValue = localStorage.getItem(key);
    if (!storedValue) return initialState;
    return JSON.parse(storedValue);
  });

  //   When ever state changes we will store it's value in local storage
  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [value, key]
  );

  return [value, setValue];
}
