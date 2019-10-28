import React, { Component } from 'react'; 
import { Row } from 'antd'; 
import axios from 'axios';
import './article.css'

export default class LatestPosts extends Component{
    constructor(){
        super()
        this.state={
            articles: [], 
            intervalIsSet: false
        }
        this.getArticles = this.getArticles.bind(this)
    }
    componentDidMount(){
        this.getArticles()
        if (!this.state.intervalIsSet) {
            let interval = setInterval(this.getArticlesfromDB, 4000);
            this.setState({ intervalIsSet: interval });
    }}
    getArticles=()=>{
        axios.get('/api/journals')
        .then((data)=>{this.setState({articles: data.data})})
    }

    render(){
        if(this.state.articles){
        return(
            <Row type="flex" justify='space-between' align='bottom'>
                <h5 style={{fontWeight: 300, fontSize: '20px', width:'100%'}}>{this.state.articles.map((article, index)=>{
                    if(index<6){
                    return <ul style={this.props.style} key={index+1}><a href={`/article/${article._id}`}>{article.title}</a></ul>}
                })}</h5>
            </Row>
        )
    }}
}