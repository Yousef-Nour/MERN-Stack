import React, { Component } from 'react'

export default class Person extends Component {
    constructor(props){
        super(props);
        this.state = {age : this.props.age}
    }
    render() {
        const {firstName, lastName, hairColor} = this.props;
        return (
            <div>
                <h1>{lastName}, {firstName}</h1>
                <h3>{this.state.age}</h3>
                <h3>{hairColor}</h3>
                <button onClick= {this.changeAge}>Birthday Button for {firstName} {lastName}</button>
            </div>
        )
    }

    changeAge = () => this.setState({age : this.state.age + 1})
}
