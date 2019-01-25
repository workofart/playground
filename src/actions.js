const todo = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                id: action.id,
                text: action.text,
                completed: false
            };
        case 'REMOVE_TODO':
            return state.filter(todo => todo.id !== action.id)
        default:
            return state;
    }
}

export function todos (state = [], action) {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                todo(undefined, action)
            ];
        case 'REMOVE_TODO':
            return todo(state, action);
        default:
            return state;
    }
}

export function counter (state = { currentNum: 0 }, action) {
    switch (action.type) {
        case 'INCREMENT':
            return Object.assign({}, state, {
                currentNum: state.currentNum+1
            })
        case 'DECREMENT':
            return Object.assign({}, state, {
                currentNum: state.currentNum-1
            })
        default:
            return state;
    }
}