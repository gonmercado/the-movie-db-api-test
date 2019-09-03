import { useEffect, useState } from 'react';
import { createSelector } from 'reselect';
import useMovieDBApi from 'helpers/useMovieDBApi';

let debounceTimer;

const useMovieFinder = (searchValue, rateFilter) => {
  const [ moviesResult, { get }, fetching] = useMovieDBApi();
  const [ rate, setRate ] = useState();

  const moviesFromResultsSelector = moviesState => moviesState && moviesState.results;

  const moviesByRateSelector = createSelector(
    moviesFromResultsSelector,
    movies => rate ? movies.filter(movie => movie.vote_average >= rate) : movies
  );

  useEffect(() => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      if (searchValue) {
        //TODO move the api key to the useMovieDBApi custom hook if there is time
        get(`/search/movie?api_key=c623137074e7a670ab06fe364ca23c59&query=${ searchValue }&page=1&include_adult=false`);
      }
      else {
        get('/discover/movie?api_key=c623137074e7a670ab06fe364ca23c59&sort_by=popularity.desc');
      }
    }, 200)
  }, [ searchValue ]);

  useEffect(() => {
    setRate(rateFilter);
  }, [ rateFilter ]);

  return [ moviesByRateSelector(moviesResult), fetching ]
};

export default useMovieFinder;
