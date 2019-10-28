import React, { Component } from 'react';
import { Card, Layout, Row, Col, Icon } from 'antd'; 
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import Fade from 'react-reveal/Fade';

export default class ArticleLists extends Component{
    constructor(props){
        super(props)
        this.state={
            loading: true, 
            articles: [],
        }
    }
    render(){
        console.log(this.props,'props')
        const { loading } = this.props.loading
        const { articles } = this.props.articles
        return(
            <Col span={18}>
            <div style={{padding:'20px 40px'}} id='all-cards'>
                    {articles.map((article, index)=>{
                        return(
                            <Fade bottom>
                                <Row style={{padding:'15px 0px'}}>
                                {article.imgUrl? <Col span={4}><img src={article.imgUrl} alt='image' style={{width:200, height: 200, borderRadius: '100%', padding:'0 20px 0 0'}}/></Col>:<></>}
                                <Col className='card-content'>
                                    <Card title={article.title} extra={<Link to={`/article/${article._id}`} >More</Link>} 
                                    className='index-card' key={index+1} loading={loading} 
                                    style={{maxHeight:'200px', overflow:'hidden',border:'none', marginBottom:'3em'}}>
                                        <span style={{display:'inline-flex', alignItems:'center', fontSize:'15px', 
                                        color:'#bfbfbf', fontWeight:600}}>
                                            <Icon type="calendar" style={{padding: '0 10px 0 0'}}/>
                                            {this.formatDate(article.updatedAt)}</span>
                                        <ReactMarkdown source={article.content}/> {/*create a link to individual article page*/}
                                    </Card>
                                </Col>
                                </Row>
                            </Fade>
                            )
                    })}
            </div>
            </Col>
        )
    }
}