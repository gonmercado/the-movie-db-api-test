import React, { useState } from 'react';
import SearchMovies from "./searchMovies/SearchMovies";
import MoviesList from "./moviesList/MoviesList";
import useMovieFinder from "./useMovieFinder";
import RateFilter from "components/homePage/discoverMovies/rateFilter/RateFilter";
import Loader from "enhacers/Loader";

const DiscoverMovies = () => {
  const [ searchValue, setSearchValue ] = useState('');
  const [ rateFilter, setRateFilter ] = useState(0);
  const [ movies, fetching ] = useMovieFinder(searchValue, rateFilter);

  const handleSearchValueChange = () => value => setSearchValue(value);

  //If clicking on the same star, then cleaning the rate filter.
  const handleRateChange = () => value => setRateFilter(value === rateFilter ? 0 : value);

  return (
    <div>
      <SearchMovies searchValue={ searchValue } onSearchValueChange={ handleSearchValueChange() } />
      <RateFilter onRateChange={ handleRateChange() } value={ rateFilter } />
      <Loader loading={ fetching } >
        <div>
          <h2>{ searchValue ? `Found movies for "${ searchValue}"...` : 'Suggested movies...' }</h2>
          { movies && <MoviesList movies={ movies } /> }
        </div>
      </Loader>
    </div>
  );
}

export default DiscoverMovies;
