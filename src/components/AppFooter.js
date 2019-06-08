import React from 'react';

import './AppFooter.css';

function AppFooter(props) {
  const {todos} = props;

  return (
    <div className="app-footer">
      <div>
        Tasks: {todos.length}
      </div>

      <div className="app-footer-links">
        <a>All</a>
        <a>Active</a>
        <a>Completed</a>
      </div>
    </div>
  );
}

export default AppFooter;