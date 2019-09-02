import { useEffect } from 'react';
import useMovieDBApi from 'helpers/useMovieDBApi';

const useMovieFinder = (searchValue) => {
  const [ data, { get }] = useMovieDBApi();

  useEffect(() => {
    if (searchValue) {
      console.log('Search Movies');
      get(`/search/movie?api_key=c623137074e7a670ab06fe364ca23c59&query=${searchValue}&page=1&include_adult=false`);
    }
    else {
      console.log('Search discover');
      get('/discover/movie?api_key=c623137074e7a670ab06fe364ca23c59&sort_by=popularity.desc');
    }
  }, [ searchValue ]);

  return [ data ]
};

export default useMovieFinder;
