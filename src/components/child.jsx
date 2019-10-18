import React, {Component} from 'react'

let countDown = 8000
export default class Line extends Component{
    constructor(props){
        super(props)
        this.state={
            letterShow: 'hidden'
        }
    }
    componentDidMount(){
         this.eachLetter()
    }
    eachLetter(){
        let that = this
        this.time = setInterval(async ()=>{
            await that.setState({letterShow: this.state.letterShow == 'visible'?"hidden":'visible'})
        }, that.props.wait);
    }
    stopInterval(){
        clearInterval(this.time)
    }

    render(){
        console.log(this.state.letterShow, this.props.index)
        return(
            <i className={this.props.show} style={{visibility: this.state.letterShow}}key={this.props.index}>{this.props.char}</i>
        )
    }
}