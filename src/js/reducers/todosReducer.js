export default function reducer(state={todos: []}, action) {
	switch(action.type) {
		case "FETCH_TODOS_FULFILLED": 
		return {
			...state,
			todos: action.payload
		}
		break;
		case "ADD_TODO":
		return {
			...state,
			todos: [...state.todos, action.payload]
		}
		break;
		case "DELETE_TODO_ITEM":
		return {
			...state,
			todos: state.todos.filter(todo => todo.id !== action.payload)
		}
	}
	return state
}