import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.scss';
import Header from "./components/header/Header";
import HomePage from "./components/homePage/HomePage";
import useMovieDBApi from "helpers/useMovieDBApi";
import { apiConfigurationContext } from "enhacers/useApiConfigurationContext";
import ErrorBoundary from "shared/ErrorBoundary";
import MovieDetailPage from "components/movieDetailPage/MovieDetailPage";
import NotFoundPage from "components/notFoundPage/NotFoundPage";

function App() {
  const [ apiConfig, { get } ] = useMovieDBApi();

  useEffect(() => {
    get('configuration?api_key=c623137074e7a670ab06fe364ca23c59');
  }, []);

  return (
    <div className="app">
        {
          apiConfig &&
          <ErrorBoundary>
            <Router>
              <apiConfigurationContext.Provider value={ apiConfig }>
                <Header/>
                <main className={'app__main-content'}>
                  <Switch>
                    <Route path="/" exact render={ () => <HomePage /> } />
                    <Route path="/movie-detail/:id" render={ ({ match }) => <MovieDetailPage match={ match } /> } />
                    <Route render={ () => <NotFoundPage /> } />
                  </Switch>
                </main>
              </apiConfigurationContext.Provider>
            </Router>
          </ErrorBoundary>
        }
    </div>
  );
}

export default App;
