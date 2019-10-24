import React, {Component} from 'react';
import {Container} from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import './home.css'

export default class HomePage extends Component{
    render(){
        const { data } = this.props
        return(
            <div className='main-background'>
            <Container>
                <div className='avatar'>
                    <Image src='https://via.placeholder.com/200' alt='avatar' roundedCircle></Image>
                </div>
                <div className='details'>
                    <h1 className='name'>Yujia Xie</h1>
                    <h2 className='main-details'>Undergraduate Student at Northwestern University</h2>
                    <p className='extended-details'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A alias adipisci odio officiis odit voluptate qui dignissimos quidem, dolore sed ipsam magni vel quam illum ea. Dolore officia nihil maiores.</p>
                </div>
                <div>
                    <ul>
                        {data.length <= 0 ? <span>'No Data Yet'</span> : data.map((dat)=>{
                            return (<li key={dat.id}>
                                <span>{dat.id}</span>
                                <span>{dat.message}</span>
                            </li>)
                        })}
                    </ul>
                </div>
            </Container>
            </div>
        )
    }
}