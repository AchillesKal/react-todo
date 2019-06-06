import React from 'react';

function TodoLit(props) {

  const { todos } = props;

  console.log(props);

  return (
    <div>
      {
        todos.map((todo, index) => (
          <div key={index}>
            {index}. {todo}
          </div>
        ))
       }
    </div>
  );
};

export default TodoLit;