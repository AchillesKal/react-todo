import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import TodoCheck from './TodoCheck';

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
            <div onClick={() => handleTodoComplete(index)} className="todo-check-wrap">
              <TodoCheck status={todo.completed} />
            </div>
            <div className="todo-content">
              {index + 1}. {todo.task}
            </div>
            <button className="todo-complete" onClick={() => handleTodoDelete(index)}>
              <FontAwesomeIcon icon={faTimesCircle} />
            </button>
          </div>
        ))
       }
    </div>
  );
};

export default TodoLit;