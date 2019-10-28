import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import axios from 'axios'
import {Row, Col} from 'antd'

export default class GetArticle extends Component{
    constructor(props){
        super(props)
        this.state = {
            articles: [],
            intervalIsSet: false, 
        }
        this.props = props
        this.formatDate = this.formatDate.bind(this)
    }
    componentDidMount(){
        const { id } = this.props 
        this.getArticlefromDB(id)
        if (!this.state.intervalIsSet) {
            let interval = setInterval(this.getArticlesfromDB, 4000);
            this.setState({ intervalIsSet: interval });
          }
        
    }
    getArticlefromDB=(id)=>{
        axios.get('/api/journalsById', {params:{id: id}})
        .then((data)=>{this.setState({articles:data.data[0]})})
    }

    formatDate=()=>{
        let time = new Date(Date.now())
        return (`${(time.getMonth()+1)<10 ?'0'+(time.getMonth()+1): (time.getMonth()+1)}/${time.getDate()}/${time.getFullYear()}`
        )
    }
    render(){
        if(this.state.articles){
            clearInterval(this.state.intervalIsSet);
        }
        return(
            <>
            <Row type="flex" justify='space-between' align='bottom'>
                <Col>
                <h1><strong><i>{this.state.articles.title}</i></strong></h1>
                </Col>
                <Col>
                    <p>Date: {this.formatDate()}</p>
                </Col>
            </Row>
            <br />
            <Row>
                <ReactMarkdown source={this.state.articles.content}/>
            </Row>
            </>
        )
    }
}