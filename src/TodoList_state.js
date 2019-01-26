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
const FilterLink = ({text, func}) => {
    return (
        <span>
            <a onClick={(e) => {
                e.preventDefault();
                func()
            }}>
                {text}
            </a>
            {' | '}
        </span>
    )
}

let nextTodoId = 0;

class TodoList extends Component {
    state = {
        items: [],
        filteredOption: 'SHOW_ALL'
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

    filterTodo(option) {
        switch(option) {
            case 'SHOW_ALL':
            case 'SHOW_COMPLETED':
            case 'SHOW_INCOMPLETED':
                this.setState((state) => {
                    return {
                        filteredOption: option
                    }
                })
            default:
                return;
        }
    }

    render() {
        let displayedItems = this.state.items
        
        switch(this.state.filteredOption) {
            case 'SHOW_ALL':
                displayedItems = this.state.items
                break;
            case 'SHOW_COMPLETED':
                displayedItems = displayedItems.filter(item => item.completed);
                break;
            case 'SHOW_INCOMPLETED':
                displayedItems = displayedItems.filter(item => !item.completed);
                break;
            default:
                displayedItems = this.state.items
        }
        
        return (
            <div>
                <h1>Todo List (Local State)</h1>
                <br/>
                <input ref={(node) => this.textInput = node} />
                <br/>
                <button onClick={this.addTodo.bind(this)}>Add</button>
                <br />
                <ul>
                    {displayedItems.map(item => TodoItem(item, this))}
                </ul>
                <FilterLink text='Show All' func={() => this.filterTodo('SHOW_ALL')}/>
                <FilterLink text='Show Completed' func={() => this.filterTodo('SHOW_COMPLETED')}/>
                <FilterLink text='Show Incompleted' func={() => this.filterTodo('SHOW_INCOMPLETED')}/>
            </div>
        )
    }
}

export default TodoList;