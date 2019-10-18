import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import HomeScreen from './pages/homeScreen'
import ProjectScreen from './pages/projects'
import 'antd/dist/antd.css'
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <HomeScreen />
        </Route>
        <Route path='/projects'>
          <ProjectScreen />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

