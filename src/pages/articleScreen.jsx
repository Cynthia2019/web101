import React, { Component } from 'react';
import { Card, Layout } from 'antd'; 
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import SingleArticle from '../articlesDisplay/article'

import Navbar from '../components/navbar'

//display lists of articles with their title and some content 
const { Header, Content} = Layout
const navs=[{
    displayName: 'Go Back',
    className: 'back',
    link: '/'
}]

export default class ArticleScreen extends Component{
    constructor(props){
        super(props)
        this.state={
            articles: [],
            intervalIsSet: false
        }
        this.getArticlesfromDB = this.getArticlesfromDB.bind(this)
    }
    componentDidMount(){
        this.getArticlesfromDB()
        if (!this.state.intervalIsSet) {
            let interval = setInterval(this.getArticlesfromDB, 4000);
            this.setState({ intervalIsSet: interval });
          }
    }
    getArticlesfromDB=()=>{
        fetch('http://localhost:4000/api/journals')
        .then((data)=>data.json())
        .then((data)=>{this.setState({articles:data})})
    }

    render(){
        if(this.state.articles){
            clearInterval(this.state.intervalIsSet);
        }
        return(
            <div>
                <Header>
                    <Navbar navs={navs}></Navbar>
                </Header>
                <Content>
                <div style={{padding:'20px 40px'}}>
                    <Card title='Past Articles'>
                        {this.state.articles.map((article, index)=>{
                            if(!article){return(<></>)}else{
                            return(
                                <Card type='inner' title={article.title} extra={<Link to={`/article/${article._id}`}>More</Link>} className={index} key={index} style={{maxHeight:'200px', overflow:'hidden'}}>
                                    <ReactMarkdown source={article.content}/> {/*create a link to individual article page*/}
                                </Card>
                            )}
                        })}
                    </Card>
                </div>
                </Content>
            </div>
        )
    }
}

/* 
    getNewest=()=>{
        fetch('http://localhost:4000/api/newestJournal')
        .then((data)=>data.json())
        .then((data)=>{this.setState({newest: data})})
    }
*/