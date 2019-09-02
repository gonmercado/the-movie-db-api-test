import React, { useEffect } from 'react';
import './App.scss';
import Header from "./components/header/Header";
import HomePage from "./components/homePage/HomePage";
import useMovieDBApi from "helpers/useMovieDBApi";
import { apiConfigurationContext } from "enhacers/useApiConfigurationContext";

function App() {
  const [ apiConfig, { get } ] = useMovieDBApi();

  useEffect(() => {
    get('configuration?api_key=c623137074e7a670ab06fe364ca23c59');
  }, []);

  return (
    <div className="app">
      {
        apiConfig &&
        <apiConfigurationContext.Provider value={ apiConfig }>
          <Header/>
          <main className={'app__main-content'}>
            <HomePage/>
          </main>
        </apiConfigurationContext.Provider>
      }
    </div>
  );
}

export default App;
