import React, { Component } from 'react'; 

export default class Token extends Component{
    constructor(){
        super()
        this.state ={
            token: null
        }
    }
    componentDidMount(){
        this.getToken()
    }
    getToken=()=>{
        fetch('http://localhost:4000/qiniu/qiniuToken')
        .then(data => {this.setState({token: data})})
    }
    render(){
        return this.state.token
    }
}