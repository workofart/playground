import React, { Component } from 'react';
import './App.css';

class App extends Component{
    constructor() {
        this.state = {
            inputVal: [],
        }
    }

    handleTextChange(e) {
        console.log(e.target.value)
    }
    render() {
        return (
            <div id='text-container'>
            <h5>Long text</h5>
            <textarea onChange={this.handleTextChange}></textarea>
            <h5>Short text</h5>
            <input onChange={this.handleTextChange}></input>
            </div>
        )
    }
}

export default App;