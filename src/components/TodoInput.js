import React, { useRef } from 'react';

import './TodoInput.css';

function TodoInput(props) {
  const inputElement = useRef(null);
  const { onAddTodo } = props;

  function handleFormSubmit(event) {
    event.preventDefault();

    const todoInput = inputElement.current;

    if(todoInput.value == '') {
      return;
    }

    onAddTodo(todoInput.value);
    todoInput.value = '';
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input ref={inputElement}
        className="app-input"
        type="text"
        placeholder="Todo todo todo todo..."
      />
    </form>
  );
};

export default TodoInput;