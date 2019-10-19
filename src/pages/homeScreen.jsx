import React, {Component} from 'react';
import Navbar from '../components/navbar'
import HomePage from '../components/home';
import Intro from '../components/intro';
import AboutMe from '../components/about';
import {Layout} from 'antd';
const {Header} = Layout

const navs = [
  {
    displayName: 'Home Page',
    className: 'home',
    link: '/'
  },
  {
    displayName: 'Projects', 
    className: 'projects',
    link: '/projects'
  },
  {
    displayName: 'About Me',
    className:'aboutme',
    link: '/about'
  }
]

export default class HomeScreen extends Component {
    render(){
        return(
            <div className='all'>
              <Header>
                <Navbar navs={navs}/>
              </Header>
              <HomePage />
              <section>
                <Intro />
              </section>
              <section>
                <AboutMe />
              </section>
            </div>
        )
    }
}