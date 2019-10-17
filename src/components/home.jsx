import React, {Component} from 'react';
import {Containter, Row, Col, Container} from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import './home.css'

export default class HomePage extends Component{
    render(){
        return(
            <Container>
                <div className='avatar'>
                    <Image src='../avatar.jpg' roundedCircle></Image>
                </div>
            </Container>
        )
    }
}