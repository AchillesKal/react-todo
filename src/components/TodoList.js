import React, { useRef } from 'react';

import './TodoList.css';

function TodoLit(props) {

  const inputElement = useRef(null);
  const { onDeleteTodo } = props;

  function handleTodoDelete(id) {
    onDeleteTodo(id);
  }

  const { todos } = props;

  return (
    <div className="app-list">
      {
        todos.map((todo, index) => (
          <div className="app-list-row" key={index}>
            <input type="checkbox" />
            {index + 1}. {todo}
            <button onClick = {() => handleTodoDelete(index)}>X</button>
          </div>
        ))
       }
    </div>
  );
};

export default TodoLit;