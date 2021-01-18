import React, { useState, useEffect, useRef } from "react";
import { Form } from "react-bootstrap";
import "./style.css";
import _ from 'lodash';

const TodoForm = ({ addTodo }) => {
    const [input, setInput] = useState("");

    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current.focus();
    })

    const handleChange = (e) => {
        const newToDo = e.target.value;
        setInput(newToDo);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        addTodo({
            id: _.uniqueId(),
            text: input,
            isComplete: false,
        });
        setInput('');
    }
	return (
		<div>
			<Form className="todo-form" onSubmit={handleSubmit}>
				<Form.Control
					type="text"
					placeholder="Add a to do"
                    value={input}
                    name="text"
                    className="todo-input"
                    onChange={handleChange}
                    ref={inputRef}
				/>
			</Form>
            
		</div>
	);
};

export default TodoForm;
