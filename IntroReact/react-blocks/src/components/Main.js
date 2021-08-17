import React, { Component } from 'react'

const mainStyle = {
    backgroundColor : "#e06666",
    height : "450px",
    width : "100%",
    marginLeft : "15px",
    padding : "15px"
};
export default class Main extends Component {
    render() {
        return (
            <div style = {mainStyle}>
                {this.props.children}
            </div>
        )
    }
}
