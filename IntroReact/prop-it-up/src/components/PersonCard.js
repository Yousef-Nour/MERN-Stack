import React, { Component } from 'react'

export default class PersonCard extends Component {
    render() {
        const {firstName, age, hairColor} = this.props;
        return (
            <div>
                <h1>{firstName}</h1>
                <h3>{age}</h3>
                <h3>{hairColor}</h3>
            </div>
        )
    }
}
