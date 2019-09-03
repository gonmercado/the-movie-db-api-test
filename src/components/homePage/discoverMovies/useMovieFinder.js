import { useEffect, useState } from 'react';
import { createSelector } from 'reselect';
import useMovieDBApi from 'helpers/useMovieDBApi';

const useMovieFinder = (searchValue, rateFilter) => {
  const [ moviesResult, { get }] = useMovieDBApi();
  const [ rate, setRate ] = useState();

  const moviesFromResultsSelector = moviesState => moviesState && moviesState.results;

  const moviesByRateSelector = createSelector(
    moviesFromResultsSelector,
    movies => rate ? movies.filter(movie => movie.vote_average >= rate) : movies
  );

  useEffect(() => {
    if (searchValue) {
      console.log('Search Movies');
      //TODO move the api key to the useMovieDBApi custom hook
      get(`/search/movie?api_key=c623137074e7a670ab06fe364ca23c59&query=${ searchValue }&page=1&include_adult=false`);
    }
    else {
      console.log('Search discover');
      get('/discover/movie?api_key=c623137074e7a670ab06fe364ca23c59&sort_by=popularity.desc');
    }
  }, [ searchValue ]);

  useEffect(() => {
    setRate(rateFilter);
  }, [ rateFilter ]);

  return [ moviesByRateSelector(moviesResult) ]
};

export default useMovieFinder;
