import PropTypes from 'prop-types';
import { useState } from 'react';
import styled from './SearchMovies.module.css';
const SearchMovies = ({ handleSearch }) => {
  const [value, setValue] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    handleSearch(value);
    setValue('');
  };
  const handleChange = ({ target: { value } }) => {
    setValue(value);
  };
  return (
    <form role="search" className={styled.SearchForm} onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        value={value}
        type="search"
        className={styled.input}
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
      />
      <button type="submit" className={styled.SearchFormButton}>
        <span className={styled.SearchFormButtonLabel}>Search</span>
      </button>
    </form>
  );
};
SearchMovies.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};
export default SearchMovies;
