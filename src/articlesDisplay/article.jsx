import React, { Component } from 'react'; 
import './article.css'
import HeaderFixed from '../components/header'
import GetArticle from './getArticle'
import LatestPosts from './posts'
import { Layout, Row, Col } from 'antd'

const { Content } = Layout

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
              <HeaderFixed />
            <Content className='main-content'>
              <Row type='flex' justify='space-around' >
                <Col span={15} className='article-container'>
                  <GetArticle id={this.state.id}/>
                </Col>
                <Col span={6}>
                  <div className='side-bar'>
                    <Row type='flex' justify='space-between' align='middle' className='card-bar'>
                      <div style={{display: 'flex', justifyContent:'space-between', width: '100%'}}>
                        <Col span={12} className='avatar-small'></Col>
                        <Col span={12} className='info'>
                          <b>Author: Yujia Xie</b>
                          <br />
                          <p>Age: 19</p>
                        </Col>
                      </div>
                      <div className='quote'><i>Love coding, love life...</i></div>
                    </Row>
                    <Row type='flex' align='stretch' justify='start' className='card-bar latest-post'>
                      <div className='title-posts'>
                        <i>Latest Posts</i>
                      </div>
                      <div style={{width:"100%"}}>
                        <LatestPosts style={{padding:'10px', borderBottom: "1px solid grey"}}/>
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