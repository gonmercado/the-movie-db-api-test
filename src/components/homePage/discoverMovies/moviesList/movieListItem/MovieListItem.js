import React from 'react';
import { shape, string } from 'prop-types';
import MovieDBImage from "shared/MovieDBImage";

const MovieListItem = ({ movie }) => (
  <div>
    <p>{ movie.title }</p>
    <MovieDBImage src={ movie.poster_path } alt={ movie.title } type={ 'poster' } size={ 'medium' } />
  </div>
);

MovieListItem.propTypes = {
  movie: shape({
    title: string
  }).isRequired
};

export default React.memo(MovieListItem);
