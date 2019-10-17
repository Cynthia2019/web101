import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navigator from './components/navigator'
import HomePage from './components/home';

function App() {
  return (
    <div className="main-background">
      <Navigator />
      <HomePage />
    </div>
  );
}

export default App;


/*       
<Navigator />
<HomePage></HomePage>*/