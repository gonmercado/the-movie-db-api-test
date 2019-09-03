import React, { useEffect } from 'react';
import { object } from 'prop-types';
import useMovieDBApi from "helpers/useMovieDBApi";
import MovieDBImage from "shared/MovieDBImage";
import './movieDetailPage.scss';
import Loader from "enhacers/Loader";

const MovieDetailPage = ({ match, history }) => {
  const [ movie, { get }, fetching] = useMovieDBApi();
  useEffect(() => {
    //TODO move the api key to the useMovieDBApi if there is time before demo
    get(`/movie/${ match.params.id }?api_key=c623137074e7a670ab06fe364ca23c59`);
  }, []);

  const handleGoBackClick = () => () => {
    history.push('/')
  };

  return (
    <Loader loading={ fetching } >
      <div>
        <button onClick={ handleGoBackClick() }>Go Back</button>
      {
        movie &&
        <section className={ 'movie-detail-page' }>
          <MovieDBImage src={ movie.backdrop_path } className={ 'movie-detail-page__backdrop' } />
          <div className={ 'movie-detail-page__content'}>
            <h1>{ movie.title }</h1>
            <article className={ "movie-detail-page__overview-container"}>
              <div>
                <h3>Overview</h3>
                <p>{ movie.overview }</p>
                <h3>Genres</h3>
                <ul>
                  { movie.genres.map(genre => <li key={ genre.id }>{ genre.name } </li> )}
                </ul>
              </div>
              <MovieDBImage src={ movie.poster_path } size={ 'medium' } type={ 'poster' } />
            </article>
            {
              movie.production_companies.map(company => <MovieDBImage key ={ company.id } src={ company.logo_path } type={ "logo" } size={ "small" } />)
            }
          </div>
        </section>
      }
      </div>
    </Loader>
  );
}

MovieDetailPage.propTypes = {
  match: object.isRequired,
  history: object.isRequired
};

export default MovieDetailPage;
