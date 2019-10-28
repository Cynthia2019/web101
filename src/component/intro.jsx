import React, {Component} from 'react';
import { Container } from 'react-bootstrap';
import './intro.css'
/*
function waitTime(seconds){
    const now = Date.now();
    const then = now + seconds * 1000
    setInterval(()=>{
        showHeadline()
    }, 3000)
}
*/
export default class Intro extends Component {
    constructor(props){
        super(props);
        this.state={
            show: false
        };
    }
    showHeadline(){
        this.setState(state=>({
            show: !showx
        }))
    };
    render(){
        console.log(this.state)
        return(
            <div className='section'>
                <h1 className='headline'>
                    {/* Static Text */}
                    <span>Hi. I'm </span>
                    {/* Automatically filled Text */}
                    <span>
                        <b className='fill-1' style={{visibility:this.state.show ? 'visible':'hidden'}}>
                            <i className='in'>i</i>
                            <i className='in'>n</i>
                            <i className='in'>c</i>
                            <i className='in'>r</i>
                            <i className='in'>e</i>
                            <i className='in'>d</i>
                            <i className='in'>i</i>
                            <i className='in'>b</i>
                            <i className='in'>l</i>
                            <i className='in'>e</i>
                        </b>
                    </span>
                </h1>
            </div>
        )
    }
}