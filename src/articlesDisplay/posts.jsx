import React, { Component } from 'react'; 
import { Row } from 'antd'; 
import axios from 'axios';

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
            console.log(this.state.articles)
        return(
            <Row type="flex" justify='space-between' align='bottom'>
                <h5 >{this.state.articles.map((article, index)=>{
                    return <li key={index+1} style={this.props.style}>{article.title}</li>
                })}</h5>
            </Row>
        )
    }}
}