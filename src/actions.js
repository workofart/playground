const todo = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                id: action.id,
                text: action.text,
                completed: false
            };
        case 'TOGGLE_TODO':
            if (state.id !== action.id)
                return state
            return {
                ...state,
                completed: !state.completed
            }
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
            return state.filter(todo => todo.id !== action.id)
        case 'TOGGLE_TODO':
            return state.map(item => todo(item, action));
        default:
            return state;
    }
}

export function counter (state = { currentNum: 0 }, action) {
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