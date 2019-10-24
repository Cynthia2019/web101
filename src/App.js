import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link, useParams, useLocation } from 'react-router-dom';
import HomeScreen from './pages/homeScreen'
import ProjectScreen from './pages/projects'
import Markdown from '../src/pages/markdown'
import ArticleScreen from '../src/pages/articleScreen'
import 'antd/dist/antd.css'
import SingleArticle from './articlesDisplay/article';
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
        <Route exact path='/articles'>
          <ArticleScreen />
        </Route>
        <Route exact path='/article/:articleId' component={SingleArticle}>
        </Route>
        <Route>
          <Markdown exact path='/markdown'/>
        </Route>
      </Switch>
    </Router>
  );
}


export default App;

