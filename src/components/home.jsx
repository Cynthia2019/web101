import React, {Component} from 'react';
import NavBar from 'react-bootstrap/NavBar';
import Nav from 'react-bootstrap/Nav'

class HomePage extends Component {
    render(){
        return (
        <React.Fragment>
            <NavBar bg='light' expand='lg'>
                <NavBar.Brand href="#home">Home Page</NavBar.Brand>
                <Nav className='mr-auto'>
                    <Nav.Link href='#projects'>Projects</Nav.Link>
                    <Nav.Link href='#about'>About me</Nav.Link>
                </Nav>
            </NavBar>
        </React.Fragment>
        )
    }
}
export default HomePage