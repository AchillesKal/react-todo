import React, {Component} from 'react';
import './App.css';

import AppHeader from './components/AppHeader';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };

    this.onNewTodoSubmit = this.onNewTodoSubmit.bind(this);
  }

  onNewTodoSubmit(todo) {
    const todos = this.state.todos;

    todos.push(todo);
    this.setState({todos: todos});
  }

  render() {
    return (
      <div className="app">
        <AppHeader />
        <div className="app-main">
          <TodoInput onNewTodoSubmit={this.onNewTodoSubmit} />
          <TodoList todos={this.state.todos} />
        </div>
      </div>
    );
  }
}

export default App;
