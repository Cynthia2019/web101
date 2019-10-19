import React, {Component} from 'react'; 
import {Layout, Card} from 'antd'
import Navbar from '../components/navbar'

const { Header, Content} = Layout;
const { Meta } = Card;

const navs=[
    {
        displayName: 'Home', 
        className: 'home',
        link: '/'
    },
    {
        displayName: 'PhotoShop',
        className: 'PS',
        link: '#'
    },
    {
        displayName: 'Machine Learning',
        className: 'ML',
        link: '#'
    },
    {
        displayName: 'Web',
        className: 'web',
        link: '#'
    }, 
    {
        displayName: 'Data Visualization',
        className: 'Data',
        link: '#'
    }
]
export default class ProjectScreen extends Component{
    render(){
        return(
            <Layout>
                <Header>
                    <Navbar navs={navs}/>
                </Header>
                <Content>
                    <Card hoverable style={{width: 240, margin:`20px 40px`}}
                    cover={<img src='https://via.placeholder.com/200' alt='example'/>}>
                        <Meta title='example' description='blahblahblah' />
                    </Card>
                </Content>
            </Layout>
        )
    }
}