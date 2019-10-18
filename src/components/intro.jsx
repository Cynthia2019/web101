import React, {Component} from 'react';
import ReactDOM from "react-dom";
import Typist from 'react-typist';
import Line from './child'
import './intro.css'

export default class Intro extends Component {
    constructor(props){
        super(props);
        this.state={
            show: false 
        };
    }
    componentDidMount(){
        this.ShowHeadline()
    }
    ShowHeadline=()=>{
        this.interval = setInterval(()=>{
        }, 8000);
    }
    componentWillUnmount(){
        clearInterval(this.interval);
    }

    render(){
        const string ="incredible and amazing"
        let chars = string.split('');
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

/*        setInterval(()=>{
            this.setState({show:!this.state.show})
        }, 4000)

        <i className={this.state.show ? 'in':'out'} key={i}>{char}</i>
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
                            {chars.map((char, i)=>{
                            console.log('show',this.state.show)
                            return(
                                <i className={this.state.show ? 'in':'out'} key={i}>{char}</i>
                            )
                        })}
                        
                        
                        
                        chars.forEach((char, index)=>{
                            setTimeout(()=>{
                                return(<i className={this.state.show ? 'in':'out'} key={index}>{char}</i>)
                            }, (1+index)*500)
                        })*/

