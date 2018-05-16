import React, { Component } from 'react';

export default function fromFun(Comp) {
    return class fromClass extends Component{
        constructor(props){
            super(props);
            this.state = {};
            this.handleChange = this.handleChange.bind(this)
        }
        handleChange(key,val){
            console.log(this);
            this.setState({
                [key]:val
            })
        }
        render(){
            return <Comp handleChange={this.handleChange} state={this.state} {...this.props} />
        }
    }
}