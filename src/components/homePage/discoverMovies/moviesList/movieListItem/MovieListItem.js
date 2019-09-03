import React from 'react';
import { shape, string, func } from 'prop-types';
import MovieDBImage from "shared/MovieDBImage";

const MovieListItem = ({ movie, onMovieClick }) => {
  const handleMovieClick = () => () => onMovieClick(movie.id);
  return (
    <div className={ "movie-list-item" } onClick={ handleMovieClick() }>
      <MovieDBImage src={ movie.poster_path } alt={ movie.title } type={ 'poster' } size={ 'medium' } />
    </div>
  );
}

MovieListItem.propTypes = {
  movie: shape({
    title: string
  }).isRequired,
  onMovieClick: func
};

export default React.memo(MovieListItem);
