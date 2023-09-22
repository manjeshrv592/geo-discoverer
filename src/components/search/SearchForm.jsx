import React, { useEffect, useState } from 'react';

const SearchForm = ({ onQuery }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
  };

  const handleChange = e => {
    setQuery(e.target.value);
  };

  useEffect(
    function () {
      onQuery(query);
    },
    [onQuery, query]
  );

  return (
    <form onSubmit={handleSubmit} className='search-form'>
      <input
        type='text'
        className='input'
        placeholder='Search your favorite country'
        value={query}
        onChange={handleChange}
      />
      <button type='submit' className='btn btn-primary'>
        Submit
      </button>
    </form>
  );
};

export default SearchForm;
