import React, { Component } from 'react';

const TodoItem = (item, context) => {
    return (
      <ul>
      <li id={item.id} onClick={() => context.removeTodo(item.id)}>{item.text}</li>
      </ul>
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
                    items: state.items.concat([{id: nextTodoId++, text: this.textInput.value}])
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

    render() {
        return (
            <div>
                <h1>Todo List (Local State)</h1>
                <br/>
                <input ref={(node) => this.textInput = node} />
                <br/>
                <button onClick={this.addTodo.bind(this)}>Add Todo</button>
                <br />
                {this.state.items.map(item => TodoItem(item, this))}
            </div>
        )
    }
}

export default TodoList;