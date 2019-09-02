import React from 'react';
import { array } from 'prop-types';
import MovieListItem from "./movieListItem/MovieListItem";
import './moviesList.scss';

const MoviesList = ({ movies }) => {
  return (
    <div className={ 'movies_list '}>
      {
        movies.map(movie => (
          <MovieListItem key={ movie.id } movie={ movie } />
        ))
      }
    </div>
  );
}

MoviesList.propTypes = {
  movies: array.isRequired
};

export default React.memo(MoviesList);
