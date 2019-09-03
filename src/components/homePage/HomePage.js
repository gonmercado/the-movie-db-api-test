import React from 'react';
import './homePage.scss';
import DiscoverMovies from "./discoverMovies/DiscoverMovies";

const HomePage = () => (
  <div className={ "home-page" }>
    <DiscoverMovies />
  </div>
);

export default HomePage;
