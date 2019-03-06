import React, { Component } from 'react';
import './App.css';
import _ from 'lodash';


class App extends Component{
    
    constructor(props) {
        super(props)
        // This is Uncontrolled component, getting value directly from DOM
        // Reference: https://reactjs.org/docs/uncontrolled-components.html
        this.textInput = React.createRef(); 
        this.textareaInput = React.createRef();
        this.state = {
            inputVal: '',
            convertedText: '',
            node_status: '',
            python_status: ''
        }
    }

    componentDidMount() {
        fetch('http://localhost:3001/api/status')
            .then(res => res.json())
            .then(res => this.setState({node_status: res.status}))
            .catch(err => console.error(err))

            fetch('http://localhost:5000/api/status')
            .then(res => res.json())
            .then(res => this.setState({python_status: res.status}))
            .catch(err => console.error(err))
    }

    debouncedHandleTextChange = _.debounce(() => {        
        this.setState({inputVal: this.textInput.current.value})
    }, 300)

    submitText(ref) {
        fetch('http://localhost:3001/api/text',
             {
                 method: 'POST',
                 body: JSON.stringify({value: ref.current.value}),
                 headers: {
                     'Content-Type': 'application/json'
                 }
             }
        )
        .then(res => res.json())
        .then(res => this.setState({convertedText: res.map(t => t.value).join(' ')}))
        .catch(err => console.error(err))
    }

    render() {
        return (
            <div id='text-container'>
            <h5>Long text</h5>
            <textarea ref={this.textareaInput} onChange={this.debouncedHandleTextChange}></textarea>
            <button onClick={() => this.submitText(this.textareaInput)}>Submit</button>
            <h5>Short text</h5>
            <input ref={this.textInput} onChange={this.debouncedHandleTextChange}></input>
            <button onClick={() => this.submitText(this.textInput)}>Submit</button>
            <p>Node Server status: {this.state.node_status}</p>
            <p>Python Server status: {this.state.python_status}</p>
            <p>{this.state.convertedText}</p>
            </div>
        )
    }
}

export default App;