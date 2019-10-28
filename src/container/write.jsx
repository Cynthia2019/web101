import React, { Component } from 'react';
import { Input, Row, Col, Button, Upload, Icon } from 'antd'; 
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import MarkdownEditor from './editor'
import axios from 'axios'
import './write.css'
import * as qiniu from 'qiniu-js'

const config = {
    useCdnDomain: false,
    region: 'qiniu.region.na'
}
const { TextArea } = Input; 
 
export default class Window extends Component{
    constructor(props){
        super(props)
        this.state = {
            redirect: false, 
            id: 0,
            content: '',
            title: '',
            token: null, 
            imgUrl: null,
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleTitle = this.handleTitle.bind(this)
        this.renderRedirect = this.renderRedirect.bind(this)
    }
/// listen the article content
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
/// get upload token
    getToken=()=>{
        fetch('http://localhost:4000/qiniu/qiniuToken')
        .then(res => res.text())
        .then(data => {this.setState({token: data})})
    }

    componentDidMount(){
        this.getToken()
    }
    getURL=()=>{
        const domain = 'http://pzyh6r51g.bkt.gdipper.com'
        let url = domain + '/' + this.state.key
        this.setState({imgUrl: url})
    }
///put article to database 
    putArticletoDB=()=>{
        axios.post('http://localhost:4000/api/journals', {
            id:  Date.now().toLocaleString(),
            title: this.state.title, 
            content: this.state.content, 
            imgUrl: this.state.imgUrl
        }); 
    }
// set redirect
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
            </Switch>
        )}}
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
                                <Upload name='file' accept='.png, .jpg, .jepg,' 
                                action='https://upload-na0.qiniup.com' showUploadList={true}
                                beforeUpload={file => {
                                    this.setState({key: file.name})
                                }}
                                multiple={true} data={{token: this.state.token, config, key: this.state.key}}
                                onChange={(info)=>(info.file.status==='done')?this.getURL():<></>}>
                                    <Button>
                                        <Icon type="upload" /> Click to Upload
                                    </Button>
                                </Upload>
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
