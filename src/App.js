import React from 'react';
import './App.css';
import Navigator from './components/navigator'
import HomePage from './components/home';
import Intro from './components/intro';

function App() {
  return (
    <div className='all'>
      <div className="main-background">
        <header>
          <Navigator />
          <HomePage />
        </header>
      </div>
        <section>
          <Intro />
        </section>
      </div>
  );
}

export default App;


/*       
<Navigator />
<HomePage></HomePage>*/