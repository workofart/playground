import React, { Component } from 'react';
import './App.css';
import _ from 'lodash';


class App extends Component{
    
    constructor(props) {
        super(props)
        // This is Uncontrolled component, getting value directly from DOM
        // Reference: https://reactjs.org/docs/uncontrolled-components.html
        this.textInput = React.createRef(); 
        this.state = {
            inputVal: '',
            status: ''
        }
    }

    componentDidMount() {
        fetch('http://localhost:3001/api/status')
            .then(res => res.json())
            .then(res => this.setState({status: res.status}))
            .catch(err => console.error(err))
    }

    debouncedHandleTextChange = _.debounce(() => {        
        this.setState({inputVal: this.textInput.current.value})
    }, 300)

    submitJSON(e) {
        console.log({val: this.state.inputVal})
    }

    render() {
        return (
            <div id='text-container'>
            <h5>Long text</h5>
            <textarea ref={this.textareaInput} onChange={this.debouncedHandleTextChange}></textarea>
            <h5>Short text</h5>
            <input ref={this.textInput} onChange={this.debouncedHandleTextChange}></input>
            <p>Current status {this.state.status}</p>
            <button onClick={this.submitJSON}>Submit in JSON format</button>
            <button onClick={this.submitText}>Submit in Text format</button>
            </div>
        )
    }
}

export default App;