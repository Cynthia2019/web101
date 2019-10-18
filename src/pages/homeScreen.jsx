import React, {Component} from 'react';
import Navbar from '../components/navbar'
import HomePage from '../components/home';
import Intro from '../components/intro';
import AboutMe from '../components/about';

export default class HomeScreen extends Component {
    render(){
        return(
            <div className='all'>
            <div className="main-background">
              <header>
                <Navbar />
                <HomePage />
              </header>
            </div>
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