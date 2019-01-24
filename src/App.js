import React, { Component } from 'react';
import { createStore, combineReducers } from 'redux';
import TodoList from './TodoList';
import TodoList_state from './TodoList_state';
import Counter from './Counter_state';
import logo from './logo.svg';
import './App.css';

import { todosReducer } from './TodoReducers';

const app = combineReducers({
  todosReducer
})
const store = createStore(app);

export { store };

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
  
    return (
      <div className="App">
        <TodoList items={store.getState().todosReducer} />
        <TodoList_state />
        <hr />
        <Counter />
      </div>
    );
  }
}

export default App;
