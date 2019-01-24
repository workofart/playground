import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const TodoList = (items) => {
  return (
    <div>
      {items.length > 0 && items}
    </div>
  )
}

// this.setState({items: <TodoItem id={1} text='text' />});

const TodoItem = (item) => {
  return (
    <label id={item.id}>{item.text}</label>
  )
}

class App extends Component {
  state = {
    items: []
  };

  render() {
  
    return (
      <div className="App">
        Todo List
        <br/>
        <TodoList items={this.state.items} />
        <input />
        <br/>
        <button>Add Todo</button>
      </div>
    );
  }
}

export default App;
