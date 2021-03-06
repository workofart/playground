import React, { Component } from 'react';
import { createStore, combineReducers } from 'redux';
import TodoList from './TodoList';
import TodoList_state from './TodoList_state';
import Counter_state from './Counter_state';
import Counter from './Counter';
import logo from '../../logo.svg';
import './App.css';

import { todos, counter, filter, filterTodosByOption } from './actions';

/**
 * The keys used here will be the keys in the redux store
 * E.g.
 * {
 *    "todos": []
 *    "counter": {
 *      "currentNum": 0
 *    }
 * }
 */
const app = combineReducers({
  todos,
  counter,
  filter
})

const store = createStore(app);

export { store };

class App extends Component {

  render() {
  
    return (
      <div id='redux-container'>
        <TodoList items={filterTodosByOption(store.getState().todos, store.getState().filter)} />
        <TodoList_state />
        <hr />
        <Counter />
        <Counter_state />
        <hr />
        <h5>Current Redux Store</h5>
        <pre>{JSON.stringify(store.getState(), null, '\t')}</pre>
      </div>
    );
  }
}

export default App;
