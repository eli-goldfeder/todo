import React, { useState, useEffect } from "react";
import { Container, Form, Button } from "react-bootstrap";

const ToDo = ({ todos, completeToDo, removeTodo }) => {
	const [newTodo, setTodos] = useState(todos);

	useEffect(() => {
		setTodos(todos);
	}, [todos]);

	const mappedTodos = newTodo.map((todo, index) => (
		<div className="todo-item" key={index}>
			<div>
				<Form.Check onClick={() => completeToDo(todo.id)} />
			</div>
			<div key={todo.id} className={todo.isComplete ? "complete" : "active"}>
				{todo.text}
			</div>
			<div onClick={() => removeTodo(todo.id)} className="hide">
				X
			</div>
		</div>
	));

	const completedTodos = newTodo.filter((todo) => todo.isComplete);
	const activeTodos = newTodo.filter((todo) => !todo.isComplete);
	const todosLength =
		activeTodos.length > 0
			? `${activeTodos.length} items left`
			: `You have nothing to do...`;

	return (
		<Container className="todos-container">
			<div>{mappedTodos}</div>
			<div>
				<div className="todos-length">{todosLength}</div>
			</div>
			<div>
				<Button
					className="mr-2"
					variant="outline-secondary"
					onClick={() => setTodos(todos)}
				>
					All
				</Button>
				<Button
					className="mr-2"
					variant="outline-secondary"
					onClick={() => setTodos(activeTodos)}
				>
					Active
				</Button>
				<Button
					className="mr-2"
					variant="outline-secondary"
					onClick={() => setTodos(completedTodos)}
				>
					Completed
				</Button>
			</div>
		</Container>
	);
};

export default ToDo;
