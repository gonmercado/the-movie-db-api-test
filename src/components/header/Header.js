import React from 'react';
import gitHubLogo from  '../../assets/GitHub-Mark-32px.png';

const Header = () => (
  <header>
    <h1>React test on movies api</h1>
    <a href={ "https://github.com/gonmercado/the-movie-db-api-test" } target={ "_blank" }><img className={ 'git-hub-logo' } src={ gitHubLogo } alt={ gitHubLogo } /></a>
  </header>
);

export default Header;
