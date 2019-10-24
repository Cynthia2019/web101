import React, { Component } from 'react'; 
import './article.css'
import GetArticle from './getArticle'
import Navbar from '../components/navbar'
import LatestPosts from './posts'
import { Layout, Row, Col } from 'antd'

const { Header, Content, Sider } = Layout
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

export default class SingleArticle extends Component{
    constructor(props){
        super(props)
        this.props = props
        this.state={
            id: this.props.match.params.articleId
        }
    }

    render(){
        return(
            <div className='bg'>
            <Header>
                <Navbar navs={navs}></Navbar>
            </Header>
            <Content className='main-content'>
              <Row type='flex' justify='space-around' >
                <Col span={15} className='article-container'>
                  <GetArticle id={this.state.id}/>
                </Col>
                <Col span={6}>
                  <div className='side-bar'>
                    <Row type='flex' justify='space-between' align='middle' className='card'>
                      <div>
                        <Col span={12} className='avatar-small'></Col>
                        <Col span={12} className='info'>
                          <b>Author: Yujia Xie</b>
                          <br />
                          <p>Age: 19</p>
                        </Col>
                      </div>
                      <div className='quote'><i>Love coding, love life...</i></div>
                    </Row>
                    <Row type='flex' align='stretch' justify='start' className='card latest-post'>
                      <div className='title-posts'>
                        <strong><i>Latest Posts</i></strong>
                      </div>
                      <div >
                        <LatestPosts style={{padding:'10px', borderBottom: "2px dotted black"}}/>
                      </div>
                    </Row>
                  </div>

                </Col>
              </Row>

            </Content>
            </div>
        )
    }
}