import React, {Component} from 'react';
import NavBar from 'react-bootstrap/NavBar';
import Nav from 'react-bootstrap/Nav';
import {Container, Row, Col} from 'react-bootstrap';
import './navigator.css';

class Navigator extends Component {
    render(){
        return (
            <NavBar bg='transparent' expand='xl'>
                <Container>
                <NavBar.Brand href="/home">Home Page</NavBar.Brand>
                <Nav className='mr-auto'>
                    <Nav.Link href='/projects'>Projects</Nav.Link>
                    <Nav.Link href='/about'>About me</Nav.Link>
                </Nav>
                <Nav PullRight>
                <div className='top-search'>
                    <a className='search-click'> Search
                        <i className='fa fa-search'>
                        </i>
                    </a>
                </div>
                </Nav>
                </Container>
            </NavBar>
        )
    }
}
export default Navigator