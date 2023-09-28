import React from 'react';

const SearchForm = ({ query, setQuery }) => {
  const handleSubmit = e => {
    e.preventDefault();
  };

  const handleChange = e => {
    setQuery(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className='search-form'>
      <input
        type='text'
        className='input'
        placeholder='Search country'
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
