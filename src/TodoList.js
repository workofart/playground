import React, { Component } from 'react';
import {store} from './App';

const TodoItem = (item) => {
    return (
      <ul>
      <li
        id={item.id}
        onClick={() => {store.dispatch({
            type: 'REMOVE_TODO',
            id: item.id
        })}}
        >{item.text}</li>
      </ul>
    )
  }

let nextTodoId = 0;
class TodoList extends Component {
    render() {
        return (
            <div>
                <h1>Todo List (Redux Store)</h1>
                <br/>
                <input ref={(node) => this.textInput = node} />
                <br/>
                <button onClick={() => {
                store.dispatch({
                    type: 'ADD_TODO',
                    text: this.textInput.value,
                    id: nextTodoId++
                });
                }}>Add Todo</button>
                <br />
                {this.props.items.map(item => TodoItem(item))}
            </div>
        )
    }
}

export default TodoList;