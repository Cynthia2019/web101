import React, {Component} from 'react';
import {Container} from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import './home.css'

export default class HomePage extends Component{
    render(){
        return(
            <Container>
                <div className='avatar'>
                    <Image src='https://via.placeholder.com/200' alt='avatar' roundedCircle></Image>
                </div>
                <div className='details'>
                    <h1 className='name'>Yujia Xie</h1>
                    <h2 className='main-details'>Undergraduate Student at Northwestern University</h2>
                    <p className='extended-details'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A alias adipisci odio officiis odit voluptate qui dignissimos quidem, dolore sed ipsam magni vel quam illum ea. Dolore officia nihil maiores.</p>
                </div>
            </Container>
        )
    }
}