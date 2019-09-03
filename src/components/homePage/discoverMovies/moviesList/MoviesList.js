import React from 'react';
import { withRouter } from 'react-router-dom';
import { array, object } from 'prop-types';
import MovieListItem from "./movieListItem/MovieListItem";
import './moviesList.scss';

const MoviesList = ({ movies, history }) => {
  const handleMovieClick = () => movieId => {
    history.push(`/movie-detail/${ movieId }`);
  };

  return (
    <div className={ 'movies_list '}>
      {
        movies.map(movie => (
          <MovieListItem key={ movie.id } movie={ movie } onMovieClick={ handleMovieClick() } />
        ))
      }
    </div>
  );
};

MoviesList.propTypes = {
  movies: array.isRequired,
  history: object.isRequired
};

export default withRouter(React.memo(MoviesList));
