import React, { Component } from 'react';
import {store} from './App';

const TOGGLE_TODO = (id) => {
    return {
        type: 'TOGGLE_TODO',
        id
    }
}

const REMOVE_TODO = (id) => {
    return {
        type: 'REMOVE_TODO',
        id
    }
}

const ADD_TODO = (text, id) => {
    return {
        type: 'ADD_TODO',
        text: text,
        id
    }
}

const TodoItem = (item) => {
    return (
        <li key={item.id}>
            <span 
                onClick={() => store.dispatch(TOGGLE_TODO(item.id))}
                style={{textDecoration: item.completed ? 'line-through': 'none'}}
            >{item.text}</span>
            <button onClick={() => store.dispatch(REMOVE_TODO(item.id))}>x</button>
        </li>
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
                <button onClick={() => {store.dispatch(ADD_TODO(this.textInput.value, nextTodoId++))}}>Add</button>
                <br />
                <ul>
                    {this.props.items.map(item => TodoItem(item))}
                </ul>
            </div>
        )
    }
}

export default TodoList;