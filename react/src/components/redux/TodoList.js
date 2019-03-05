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

const SHOW_ALL = () => {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter: 'SHOW_ALL'
    }
}

const SHOW_COMPLETED = () => {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter: 'SHOW_COMPLETED'
    }
}

const SHOW_INCOMPLETED = () => {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter: 'SHOW_INCOMPLETED'
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

const FilterLink = ({text, func}) => {
    return (
        <span>
            <a onClick={(e) => {
                e.preventDefault();
                store.dispatch(func())
            }}>
                {text}
            </a>
            {' | '}
        </span>
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
                <FilterLink text='Show All' func={SHOW_ALL}/>
                <FilterLink text='Show Completed' func={SHOW_COMPLETED}/>
                <FilterLink text='Show Incompleted' func={SHOW_INCOMPLETED}/>
            </div>
        )
    }
}

export default TodoList;