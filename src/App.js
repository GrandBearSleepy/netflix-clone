import React from 'react';
import './App.css';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';

import HomeScreen from './components/HomeScreen'

function App() {
  return (
    <div className="App">
      <HomeScreen />
    </div>
  );
}

export default App;
