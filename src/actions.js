/**
 * Helper function for "todos"
 * @param {Object} todo - the object representing one todo item
 * @param {Object} action - the object representing the action
 */
const todo = (todo, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                id: action.id,
                text: action.text,
                completed: false
            };
        case 'TOGGLE_TODO':
            if (todo.id !== action.id)
                return todo
            return {
                ...todo,
                completed: !todo.completed
            }
        default:
            return todo;
    }
}

/**
 * Helper function to filter actual todo list items
 * @param {Array} state - the current list of todos
 * @param {*} action 
 */
export function filterTodosByOption (todos, filter) {
    switch(filter) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_COMPLETED':
            return todos.filter(item => item.completed)
        case 'SHOW_INCOMPLETED':
            return todos.filter(item => !item.completed)
        default:
            return todos;
    }
}

/**
 * The default/initial state of todos is an empty array
 * that will be assigned to the redux store in this format
 * store.getState() = {
*                       todos: []
 *                    }
 * @param {Array} state - the current state
 * @param {Object} action - the provided action
 */
export function todos (state = [], action) {
    console.log('todos reducer called');
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                todo(undefined, action)
            ];
        case 'REMOVE_TODO':
            return state.filter(todo => todo.id !== action.id)
        case 'TOGGLE_TODO':
            return state.map(item => todo(item, action));
        default:
            return state;
    }
}

export function counter (state = { currentNum: 0 }, action) {
    console.log('counter reducer called');
    switch (action.type) {
        case 'INCREMENT':
            return {...state,
                currentNum: state.currentNum+1
            }
        case 'DECREMENT':
            return {...state, 
                currentNum: state.currentNum-1
            }
        default:
            return state;
    }
}

/**
 * 
 * @param {String} state - the state representing the selected filter option
 * @param {Object} action 
 */
export function filter(state = 'SHOW_ALL', action) {
    switch(action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter;
        default:
            return state;
    }
}