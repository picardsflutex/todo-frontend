import React from 'react';

import './App.css';

import AppRouter from './components/AppRouter/AppRouter';

function App() {

  const setDarkMode = () => {
    document.querySelector("body")?.setAttribute('data-theme', 'dark')
  }
  const setLightMode = () => {
    document.querySelector("body")?.setAttribute('data-theme', 'light')
  }

  return (
    <AppRouter />
  );
}

export default App;
