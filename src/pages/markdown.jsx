import React, { Component } from 'react';
import Window from '../container/write'
import Menubar from '../container/menu'
import { Row, Col } from 'antd'

export default class MarkdownPage extends Component{
    render(){
        const navs=[{
            displayName: 'Go Back',
            className: 'back',
            link: '/'
        }]
        return(
            <Row> 
                <Col span={4} style={{paddingRight: '20px'}}>
                    <Menubar navs={navs} />
                </Col>
                <Col span={20} style={{paddingLeft: '20px'}}>
                    <Window />
                </Col>
            </Row>
        )
    }
}