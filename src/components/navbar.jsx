import React, {Component} from 'react';
import {Layout, Menu} from 'antd'
import {Link} from 'react-router-dom'
import {Container, Nav} from 'react-bootstrap';
import './navbar.css';

/* 
a nav should have: 
nav {
    displayName: photoshop, 
    className: PS,
    link: / or none,
}
*/
class Navbar extends Component {
    render(){
        const {navs} = this.props
        return (
                <Menu mode='horizontal' theme='light' style={{backgroundColor:'transparent', color:'white', }}>
                {navs.map((nav, index)=>{
                    return(
                        <Menu.Item key={`option-${index}`} className={nav.className}>
                            <Link to={nav.link} style={{color:'white'}}>{nav.displayName}</Link>
                        </Menu.Item>
                    )
                })}
                </Menu>
        )
    }
}
export default Navbar

/* 

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
*/