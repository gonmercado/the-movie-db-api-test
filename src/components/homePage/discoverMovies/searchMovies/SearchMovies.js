import React from 'react';
import { string, func } from 'prop-types';

const SearchMovies = ({ searchValue, onSearchValueChange }) => {
  const handleSearchCriteriaChange = ev => {
    onSearchValueChange(ev.target.value);
  };

  return (
    <div>
      <label htmlFor={ "search-movie" }>Search: </label><input name={ "search-movie" } autoFocus placeholder={ "movie information..."} value={ searchValue } onChange={ handleSearchCriteriaChange } />
    </div>
  );
};

SearchMovies.propTypes = {
  searchValue: string.isRequired,
  onSearchValueChange: func.isRequired
};

export default SearchMovies;
