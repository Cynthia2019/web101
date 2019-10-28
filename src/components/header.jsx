import React, { Component } from 'react';
import { Layout } from 'antd'; 
import Navbar from './navbar'

const { Header } = Layout 
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

export default class HeaderFixed extends Component{
    render(){
        return(
        <Header style={{background:'#feeae7', boxShadow: '0px 2px 10px rgba(0,0,0,0.2)'}}>
            <Navbar navs={navs}/>
        </Header>
        )
    }
}