export function fetchTodos() {
  return {
    type: 'FETCH_TODOS_FULFILLED',
    payload: [
      {
        id: '1', 
        text: 'eat breakfast'
      }
    ]
  }
}

let nextTodo = 1
export function addTodo(text) {
  return {
    type: 'ADD_TODO',
    payload: {
      id: nextTodo++,
      text,
    },
  }
}

export function deleteTodo(id) {
  return { type: 'DELETE_TODO_ITEM', payload: id}
}

export function editTodo(id) {
  return { type: 'EDIT_TODO', payload: id}
}
