import React from 'react';

const SearchForm = () => {
  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className='search-form'>
      <input
        type='text'
        className='input'
        placeholder='Search your favorite country'
      />
      <button type='submit' className='btn btn-primary'>
        Submit
      </button>
    </form>
  );
};

export default SearchForm;
