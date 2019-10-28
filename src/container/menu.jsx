import React, { Component } from 'react';
import { Layout, Button, Icon } from 'antd'; 
import Navbar from '../components/navbar'

const { Header, Content } = Layout
export default class MenuBar extends Component{
    constructor(props){
        super(props)
        this.state={
            addNew: false, 
            newArticle: [
                {
                    date: null, 
                }
            ]
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
        let time = new Date(Date.now())
        var date = `${time.getMonth()}/${time.getDay()}/${time.getFullYear()}`
        this.setState({
            newArticle: this.state.newArticle.concat([{
                date: date
            }])
        })
        console.log('handleClick:', this.state)
    }
    render(){
        const {navs} = this.props
        return(
            <div style={{backgroundColor:'#001529',height:'100vh'}}>
            <Header>
                <Navbar navs={navs}></Navbar>
            </Header>
            <Content className='optinons' style={{marginTop: "30px",padding: '20px'}}>
                <Button onClick={this.handleClick}><Icon type="plus" /> Create a new article</Button>
                <ul className='articles' style={{color:'white'}}>
                    {this.state.newArticle.map((item, index)=>{
                        if(!item.date){return(<span></span>)}
                        return(
                            <li key={index}><div>{item.date}_{index}</div></li>
                        )
                    })}
                </ul>
            </Content>
            </div>
        )
    }
}
