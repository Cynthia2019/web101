import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

export default class MarkdownEditor extends Component{
    constructor(props){
        super(props)
        this.state={
            value: ''
        }
    }
    render(){
        const { content } = this.props
         return(
             <div style={{border:'2px solid black', borderRadius:'5px', height:'calc(100vh - 142px)', padding: '20px'}}>
                <ReactMarkdown source={content}/>
            </div>
        )
    }
}