import React, {Component} from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import './about.css'

export default class AboutMe extends Component{
    render(){
        return(
            <div className='full-aboutme'>
                <Row className='big-aboutme'>
                    <Col xs={12} md={7}>
                        <h1 className='title'>About Me</h1>
                        <p className='paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores eaque deleniti a dolore dolores dolor voluptas est, molestias fugit. Vel totam nobis laudantium dolor dolores voluptate consectetur, excepturi repellat architecto!</p>
                        <p className='paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum dolor quas provident a quae. Accusamus quasi possimus, excepturi culpa expedita cum natus iste, earum quibusdam illo eum veniam debitis quo!</p>
                    </Col>
                    <Col xs={12} md={5}>
                        <Image src='https://via.placeholder.com/400' alt='about-me-image'/> 
                    </Col>
                </Row>
                <section className='extra-aboutme'>
                    <Row className='extra-content'>
                        <Col className='coffee'></Col>
                        <Col className='hobbies'></Col>
                        <Col className='quality'></Col>
                    </Row>
                </section>
            </div>
        )
    }
}