import React, { useState } from "react";
import ToDoForm from "./ToDoForm";
import ToDo from './ToDo';
import "bootstrap/dist/css/bootstrap.min.css";
import { Jumbotron } from "react-bootstrap";


const ToDoList = () => {
	const [todos, setTodos] = useState([]);

	const addTodo = (todo) => {
		if (!todo.text) {
			return;
		}

		const newTodos = [todo, ...todos];
        setTodos(newTodos);
    };
    
    const completeTodo = (id) => {
        const updatedTodos = todos.map((todo) => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        })
        setTodos(updatedTodos);
    }


    const removeTodo = (id) => {
        const removedTodos = todos.filter((todo) => todo.id !== id);
        setTodos(removedTodos);
    } 

	return (
		<div>
            <Jumbotron className="text-center">
			<h1>What To Do Today?</h1>
			<ToDoForm addTodo={addTodo} />
            </Jumbotron>
            <ToDo todos={todos} completeToDo={completeTodo} removeTodo={removeTodo} />
		</div>
	);
};

export default ToDoList;
