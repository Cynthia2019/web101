import React, {Component} from 'react';
import Typist from 'react-typist';
import './intro.css'

export default class Intro extends Component {
    constructor(props){
        super(props);
        this.state={
            show: false 
        };
    }
    render(){
        const string ="incredible and amazing"
        return(
            <div className='section'>
                <h1 className='headline'>
                    {/* Static Text */}
                    <span className='I-m'>
                        Hi. I'm
                    </span>
                    {/* Automatically filled Text */}
                    <span>
                        <b className='fill-1'>
                        <Typist cursor={{show: false, hideWhenDone: false}} avgTypingDelay={100}>{string}</Typist>
                        </b>
                    </span>
                </h1>
            </div>
        )
    }

}
