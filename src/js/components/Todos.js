import React from "react"
import { connect } from "react-redux"
import { fetchTodos, addTodo, deleteTodo } from "../actions/todosAction"
import { Button } from 'react-bootstrap';

@connect((store) => {
	return {
		todos: store.todos.todos
	};
})
export default class Todo extends React.Component {
	constructor() {
		super();
		this.state = {
			todo: ""
		}
	}
	//the method thet gets called when the component is mounted, like ng-init in angular
	componentWillMount() {
		this.props.dispatch(fetchTodos())
	}

	handleChange(e) {
		this.setState({todo: e.target.value})
	}

	fetchTodos() {
		this.props.dispatch(fetchTodos())
	}
	addTodo() {
		this.props.dispatch(addTodo(this.state.todo))
	}
	deleteTodo(id) {
		console.log(id)
		this.props.dispatch(deleteTodo(id))
	}

	editTodo(id) {
		console.log(id)
		this.props.dispatch(editTodo(id))
	}

	render() {
		const { todos } = this.props
		if (!todos.length) {
			console.log('todo list is empty', todos)
			return <Button className="bnt bnt-primary" onClick={this.fetchTodos.bind(this)}>Load Todos</Button>
		}

		const mappedTodos = todos.map(todo => 
			<li>{todo.text}
			<i className="fa fa-times" onClick={this.deleteTodo.bind(this, todo.id)}></i>
			<i className="fa fa-edit" onClick={this.editTodo.bind(this, todo.id)}></i>
			</li>)
		console.log('mapped todos', mappedTodos)

		return (
			<div>	
			<h1>TODO LIST:</h1>
			<ul>{mappedTodos}</ul>
			<input id="add" type="text" value={this.state.todo} onChange={this.handleChange.bind(this)}/>
			<Button bsStryle="primary" onClick={this.addTodo.bind(this)}>ADD TODO</Button>
			<div>{this.state.todo}</div>
			</div>
		)
	}
}