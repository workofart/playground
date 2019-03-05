import React, { Component } from 'react';
import { store } from './App';

class Counter extends Component {
    render() {
        return (
            <div>
            <h1>Counter (Redux Store)</h1>
            <h3>{store.getState().counter.currentNum}</h3>
            <button onClick={() => store.dispatch({
                type: 'INCREMENT'
            })}>+</button>
            <button onClick={() => store.dispatch({
                type: 'DECREMENT'
            })}>-</button>
            </div>
        )
    }
}

export default Counter;