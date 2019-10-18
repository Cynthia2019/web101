import React, {Component} from 'react';
import NavBar from 'react-bootstrap/NavBar';
import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom'
import {Container} from 'react-bootstrap';
import './navbar.css';

class Navbar extends Component {
    render(){
        return (
            <NavBar bg='transparent' expand='xl'>
                <Container>
                <NavBar.Brand href="/">Home Page</NavBar.Brand>
                <Nav className='mr-auto'>
                    <Nav.Link><Link  to='/projects'>Projects</Link></Nav.Link>
                    <Nav.Link to='/about'>About me</Nav.Link>
                </Nav>
                <Nav>
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
export default Navbar