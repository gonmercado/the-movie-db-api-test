import React, { useState } from 'react';
import SearchMovies from "./searchMovies/SearchMovies";
import MoviesList from "./moviesList/MoviesList";
import useMovieFinder from "./useMovieFinder";

const DiscoverMovies = () => {
  const [ searchValue, setSearchValue ] = useState('');
  const [ moviesResult ] = useMovieFinder(searchValue);

  const handleSearchValueChange = () => value => setSearchValue(value);

  return (
    <div>
      <SearchMovies searchValue={ searchValue } onSearchValueChange={ handleSearchValueChange() } />
      { moviesResult && <MoviesList movies={ moviesResult.results } /> }
    </div>
  );
}

export default DiscoverMovies;
