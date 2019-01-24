const todoReducer = (state, action) => {
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

export function todosReducer (state = [], action) {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                todoReducer(undefined, action)
            ];
        case 'REMOVE_TODO':
            return todoReducer(state, action);
        default:
            return state;
    }
}