import React, { Component } from 'react';
import { Card, Layout, Row, Col, Icon } from 'antd'; 
import HeaderFixed from '../components/header'
import LatestPosts from '../articlesDisplay/posts'
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import Fade from 'react-reveal/Fade';
import './pages.css'


//display lists of articles with their title and some content 
const { Content } = Layout

export default class ArticleScreen extends Component{
    constructor(props){
        super(props)
        this.state={
            loading: true, 
            articles: [],
            intervalIsSet: false,
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
        .then((data)=>{this.setState({
            articles: data, 
            loading: false
        })
        })
    }
    formatDate=(date)=>{
        let time = new Date(date)
        return (`${(time.getMonth()+1)<10 ?'0'+(time.getMonth()+1): (time.getMonth()+1)}/${time.getDate()}/${time.getFullYear()}`
        )}

    render(){
        if(this.state.articles){
            clearInterval(this.state.intervalIsSet);
        }
        console.log(this.state.articles, 'state')
        return(
            <div>
                <HeaderFixed />
                <Content>
                <Row type='flex' justify='center' align='middle'>
                    <div style={{fontWeight:700, fontSize:'40px', padding:'10px 0'}}>Past Posts</div>
                </Row>
                <Row>
                <Col span={18}>
            <div style={{padding:'20px 40px'}} id='all-cards'>
                    {this.state.articles.map((article, index)=>{
                        return(
                            <Fade bottom>
                                <Row style={{padding:'15px 0px'}}>
                                {article.imgUrl?<Col span={4}><img src={article.imgUrl} alt='image' style={{width:200, height: 200, borderRadius: '100%', padding:'0 20px 0 0'}}/></Col>:<></>}
                                <Col className='card-content'>
                        <Card title={<Link to={`/article/${article._id}`}>{article.title}</Link>} extra={<Link to={`/article/${article._id}`}>Read More ></Link>} 
                                    className='index-card' key={index+1} loading={this.state.loading} 
                                    style={{maxHeight:'200px', overflow:'scroll',border:'none', marginBottom:'3em'}}>
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
                <Col span={6}>
                    <div style={{margin:'35px'}}>
                <Row type='flex' align='stretch' justify='start' className='card-bar latest-post' style={{backgroundColor:'rgba(250,240,100, 0.45)'}}>
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
