import React, {Component} from 'react'; 

const { Layout, Menu, Breadcrumb } = antd;

const { Header, Content, Footer } = Layout;

export default class ProjectScreen extends Component{
    render(){
        return(
            <Layout>
                <Header className='header'>
                    <Menu className='options'>
                        <Menu.Item key='option-1' className='PS'>PhotoShop</Menu.Item>
                        <Menu.Item key='option-2' className='ML'>Machine Learning</Menu.Item>
                        <Menu.Item key='option-3' className='Web'>Web</Menu.Item>
                    </Menu>
                </Header>
            </Layout>
        )
    }
}