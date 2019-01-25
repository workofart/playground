import React, { Component } from 'react';
import { store } from './App';

class Counter extends Component {
    state = {
        currentNum: 0
    }

    increment() {
        this.setState((state) => state.currentNum++)
    }

    decrement() {
        this.setState((state) => state.currentNum--)
    }
    render() {
        return (
            <div>
            <h1>Counter (Local State)</h1>
            <h3>{this.state.currentNum}</h3>
            <button onClick={this.increment.bind(this)}>+</button>
            <button onClick={this.decrement.bind(this)}>-</button>
            </div>
        )
    }
}

export default Counter;