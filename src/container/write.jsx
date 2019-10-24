import React, { Component } from 'react';
import { Input, Row, Col, Button } from 'antd'; 
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import MarkdownEditor from './editor'
import axios from 'axios'
import './write.css'
import ArticleScreen from '../pages/articleScreen';

const { TextArea } = Input; 
 
export default class Window extends Component{
    constructor(props){
        super(props)
        this.state = {
            redirect: false, 
            id: 0,
            content: '',
            title: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleTitle = this.handleTitle.bind(this)
        this.renderRedirect = this.renderRedirect.bind(this)
    }
    handleChange(e){
        this.setState({
            content: e.target.value
        })
    }
    handleTitle(e){
        this.setState({
            title: e.target.value
        })
    }

    handleSubmit(){
        if(this.state.title || this.state.content){
            this.putArticletoDB()
            alert('This article is submitted')
            this.setRedirect()
        } else {
            alert('Title and Content cannot be empty.')
        }

    }
    putArticletoDB=()=>{
        axios.post('http://localhost:4000/api/journals', {
            id:  Date.now().toLocaleString(),
            title: this.state.title, 
            content: this.state.content, 
        }); 
    }
    setRedirect=()=>{
        this.setState({
            redirect: true, 
        })
    }
    renderRedirect=()=>{
        if(this.state.redirect){
        return (
            <Switch>
                <Redirect from='/markdown' to='/articles'/>
                <Router path='/articles' render={(props)=><ArticleScreen {...props}/>}></Router>
            </Switch>
        )
        }
    }

    render(){
        return(
            <div>
                {/*Area for write article*/}
                <Row type='flex' justify='space-between'> 
                    <Col span={12}> {/*Input text area where user can type article in markdown language*/}
                        <div className='container-text'>
                            {/*article title*/}
                            <Row  type='flex' justify='space-between' align='middle'>
                                <span className='title editor-title'>Editor</span>
                                {this.renderRedirect()}
                                <Button type='primary' className='btn btn-submit' onClick={this.handleSubmit}>Submit</Button>
                            </Row>
                            <div className='article-title'>
                                <Input placeholder='Title' onChange={this.handleTitle}></Input>
                            </div>
                            <TextArea value={this.state.content} onChange={this.handleChange} />
                        </div>
                    </Col>
                    <Col span={12}>{/*Display the what the actual look will be like*/}
                        <div className='container-text'>
                        <div className='title display-title'>Display</div>
                            <MarkdownEditor content={this.state.content} className='markdown'/>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }

}
