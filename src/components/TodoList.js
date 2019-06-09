import React, { useRef } from 'react';

import './TodoList.css';

function TodoLit(props) {

  const inputElement = useRef(null);
  const { onDeleteTodo } = props;
  const { onCompleteTodo } = props;

  function handleTodoComplete(id) {
    onCompleteTodo(id);
  }

  function handleTodoDelete(id) {
    onDeleteTodo(id);
  }

  const { todos } = props;

  return (
    <div className="app-list">
      {
        todos.map((todo, index) => (
          <div className="app-list-row" key={index}>
            <input checked={todo.completed} onClick={() => handleTodoComplete(index)} className="todo-checkbox" type="checkbox" />
            <div className="todo-content">
              {index + 1}. {todo.task}
            </div>
            <button className="todo-complete" onClick = {() => handleTodoDelete(index)}>X</button>
          </div>
        ))
       }
    </div>
  );
};

export default TodoLit;