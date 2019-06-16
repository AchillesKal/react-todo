import React from 'react';
import PropTypes from 'prop-types';

import './AppFooter.css';

function AppFooter(props) {
  const { todos, filters, onComplete} = props;

  function handleTodoFilter(filter){
    onComplete(filter);
  }

  return (
    <div className="app-footer">
      <div className="app-footer-counter">
        Tasks: {todos.length}
      </div>

      <div className="app-footer-links">
        {
          Object.keys(filters).map(function (key) {
            return <button onClick={() => handleTodoFilter(key)} href="#" key={key}>{key}</button>;
          })
        }
      </div>
    </div>
  );
}

AppFooter.propTypes = {
  todos: PropTypes.array.isRequired,
  onComplete: PropTypes.func.isRequired
};

export default AppFooter;