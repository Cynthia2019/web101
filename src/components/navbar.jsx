import React, {Component} from 'react';
import {Menu} from 'antd'
import {Link} from 'react-router-dom'
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
                            <Link to={nav.link} style={{color:'#7a716f', fontSize: 20}}>{nav.displayName}</Link>
                        </Menu.Item>
                    )
                })}
                </Menu>
        )
    }
}
export default Navbar
