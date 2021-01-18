import React from "react";
import { Container, Form } from "react-bootstrap";

const ToDo = ({ todos, completeToDo, removeTodo }) => {
	const mappedTodos = todos.map((todo, index) => (
		<div
			className={todo.isComplete ? "todo-item complete" : "todo-item"}
			key={index}
		>
			<div>
				<Form.Check onClick={() => completeToDo(todo.id)} />
			</div>
			<div key={todo.id}>
				{todo.text}
			</div>
			<div onClick={() => removeTodo(todo.id)}>X</div>
		</div>
	));

	return <Container className="todos-container">{mappedTodos}</Container>;
};

export default ToDo;
