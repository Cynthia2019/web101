import React from 'react';
import './App.css';
import 'antd/dist/antd.css'
import './index.css'

import { BrowserRouter as Router, Switch, Route, withRouter  } from 'react-router-dom';
import HomeScreen from './pages/homeScreen'
import ProjectScreen from './pages/projects'
import Markdown from '../src/pages/markdown'
import ArticleScreen from '../src/pages/articleScreen'
import SingleArticle from './articlesDisplay/article';
import { TransitionGroup, CSSTransition } from 'react-transition-group'
function App() {
  return (
  <Route render={({ location })=> (
    <TransitionGroup component={null} className='transition-group'>
      <CSSTransition key={location.key} timeout={{enter: 300, exit: 300}} classNames='fade'>
        <section className='route-section'>
        <Switch location={location}>
          <Route exact path='/' component={HomeScreen} />
          <Route path='/projects' component={ProjectScreen} />
          <Route exact path='/articles' component={ArticleScreen} />
          <Route exact path='/article/:articleId' component={SingleArticle} />
          <Route exact path='/markdown' component={Markdown} />
        </Switch>
        </section>
        </CSSTransition>
    </TransitionGroup>
  )}
    />)};



export default withRouter(App);

