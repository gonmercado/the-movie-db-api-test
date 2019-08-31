import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import HomePage from "./components/homePage/HomePage";

function App() {
  return (
    <div className="app">
      <Header />
      <main className={ 'app__main-content'}>
        <HomePage/>
      </main>
    </div>
  );
}

export default App;
