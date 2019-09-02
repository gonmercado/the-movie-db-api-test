import React from 'react';
import { string, func } from 'prop-types';

const SearchMovies = ({ searchValue, onSearchValueChange }) => {
  const handleSearchCriteriaChange = ev => {
    onSearchValueChange(ev.target.value);
  };

  return (
    <div>
      <input value={ searchValue } onChange={ handleSearchCriteriaChange } />
    </div>
  );
};

SearchMovies.propTypes = {
  searchValue: string.isRequired,
  onSearchValueChange: func.isRequired
};

export default SearchMovies;
