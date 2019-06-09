import React from 'react';

import './AppFooter.css';

function AppFooter(props) {
  const { todos, filters, onComplete} = props;

  function handleTodoFilter(filter){
    onComplete(filter);
  }

  return (
    <div className="app-footer">
      <div>
        Tasks: {todos.length}
      </div>

      <div className="app-footer-links">
        {
          Object.keys(filters).map(function (key) {
            return <a onClick={() => handleTodoFilter(key)} href="#" key={key}>{key}</a>;
          })
        }
      </div>
    </div>
  );
}

export default AppFooter;