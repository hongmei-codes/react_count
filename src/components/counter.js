import React, { Component } from 'react';

class Counter extends Component {
    state = {
        value: this.props.counter.value
    }

    // css styles can be declared as a property
    // to access style -> 'this.buttonStyle'
    countStyle = {
        backgroundColor: "DodgerBlue",
        border: "none",
        color: "white",
        padding: "10px",
        margin: "10px",
        textAlign: "center",
        textDecoration: "none",
        display: "inline-block",
        fontSize: "20px",
        fontWeight: "bold"
    }

    addButtonStyle = {
        backgroundColor: "green",
        borderRadius: "5px",
        border: "none",
        color: "white",
        padding: "5px",
        margin: "5px",
        textAlign: "center",
        textDecoration: "none",
        display: "inline-block",
        fontSize: "20px",
        fontWeight: "bold",
        cursor: "pointer"
    }

    subButtonStyle = {
        backgroundColor: "red",
        borderRadius: "5px",
        border: "none",
        color: "white",
        padding: "5px",
        margin: "5px",
        textAlign: "center",
        textDecoration: "none",
        display: "inline-block",
        fontSize: "20px",
        fontWeight: "bold",
        cursor: "pointer"
    }

    rmButtonStyle = {
        backgroundColor: "orange",
        borderRadius: "100px",
        border: "none",
        color: "white",
        margin: "5px",
        textAlign: "center",
        textDecoration: "none",
        display: "inline-block",
        fontSize: "20px",
        fontWeight: "bold",
        cursor: "pointer"
    }

    incCount = () => {
        this.setState({ value: this.state.value + 1});
    }

    decCount = () => {
        this.setState({ value: this.state.value - 1});
    }

    render() {
        return (
            <div>
                <button style={ this.countStyle }>{ this.state.value }</button>
                <button style={ this.addButtonStyle } onClick={ this.incCount }>Increase</button>
                <button style={ this.subButtonStyle } onClick={ this.decCount }>Decrease</button>
                <button style={ this.rmButtonStyle} onClick={ () => this.props.onDelete(this.props.counter.id) }>x</button>
            </div>
        );
    }

}

export default Counter;
