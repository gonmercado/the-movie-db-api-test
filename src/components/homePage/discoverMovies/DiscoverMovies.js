import React, { useState } from 'react';
import SearchMovies from "./searchMovies/SearchMovies";
import MoviesList from "./moviesList/MoviesList";
import useMovieFinder from "./useMovieFinder";
import RateFilter from "components/homePage/discoverMovies/rateFilter/RateFilter";

const DiscoverMovies = () => {
  const [ searchValue, setSearchValue ] = useState('');
  const [ rateFilter, setRateFilter ] = useState(0);
  const [ movies ] = useMovieFinder(searchValue, rateFilter);

  const handleSearchValueChange = () => value => setSearchValue(value);

  //If clicking on the same star, then cleaning the rate filter.
  const handleRateChange = () => value => setRateFilter(value === rateFilter ? 0 : value);

  return (
    <div>
      <SearchMovies searchValue={ searchValue } onSearchValueChange={ handleSearchValueChange() } />
      <RateFilter onRateChange={ handleRateChange() } value={ rateFilter } />
      { movies && <MoviesList movies={ movies } /> }
    </div>
  );
}

export default DiscoverMovies;
