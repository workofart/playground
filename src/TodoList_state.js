import React, { Component } from 'react';

const TodoItem = (item, context) => {
    return (
        <li key={item.id}>
            <span 
                onClick={() => context.toggleTodo(item.id)}
                style={{textDecoration: item.completed ? 'line-through' : 'none'}}
            >{item.text}</span>
            <button onClick={() => context.removeTodo(item.id)}>x</button>
        </li>
    )
  }

let nextTodoId = 0;

class TodoList extends Component {
    state = {
        items: []
    }

    addTodo() {
        this.setState(
            (state) => {
                return {
                    items: state.items.concat([{id: nextTodoId++, text: this.textInput.value, completed: false}])
                }
            }
        )
    }

    removeTodo(targetId) {
        this.setState(
            (state) => {
                return {
                    items: state.items.filter((item) => item.id !== targetId)
                }
            }
        )
    }

    toggleTodo(targetId) {
        this.setState(
            (state) => {
                return state.items.map((item) => {
                    if (item.id === targetId) {
                        item.completed = !item.completed
                    }
                })
            }
        )
    }

    render() {
        return (
            <div>
                <h1>Todo List (Local State)</h1>
                <br/>
                <input ref={(node) => this.textInput = node} />
                <br/>
                <button onClick={this.addTodo.bind(this)}>Add</button>
                <br />
                <ul>
                    {this.state.items.map(item => TodoItem(item, this))}
                </ul>
            </div>
        )
    }
}

export default TodoList;