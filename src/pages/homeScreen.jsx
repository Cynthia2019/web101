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
    displayName: 'Articles',
    className:'articles',
    link: '/articles'
  },
  {
    displayName: 'Markdown',
    className:'markdown',
    link: '/markdown'
  }
]

export default class HomeScreen extends Component {
  constructor(props){
    super(props)
    this.state={
      data: [],
      id: 0,
      message: null, 
      intervalIsSet: false,
    }
  }

  componentDidMount() {
    this.getData();
    if (!this.state.intervalIsSet) {
      let interval = setInterval(this.getData, 4000);
      this.setState({ intervalIsSet: interval });
    }
  }
  getData=()=>{
    fetch('http://localhost:4000/server/getData')
    .then((data)=> data.json())
    .then((data)=>{this.setState({data: data})})
  }

  componentWillUnmount() {
    if (this.state.intervalIsSet) {
      clearInterval(this.state.intervalIsSet);
      this.setState({ intervalIsSet: null });
    }
  }
    render(){
      const { data } = this.state
      console.log(data)
        return(
            <div className='all'>
              <Header>
                <Navbar navs={navs}/>
              </Header>
              <HomePage data={data}/>
                <Intro />
                <AboutMe />
            </div>
        )
    }
}