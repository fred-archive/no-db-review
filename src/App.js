import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Catcher from './components/Catcher'
import Pokedex from './components/Pokedex'


function App() {
  return (
    <div className="App">
      <Header />
      <Catcher />
      <Pokedex />
    </div>
  );
}

export default App;
