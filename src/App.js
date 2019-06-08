import React, {Component} from 'react';
import './App.css';

import AppHeader from './components/AppHeader';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import AppFooter from './components/AppFooter';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };

    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleDeleteTodo = this.handleDeleteTodo.bind(this);
  }

  handleAddTodo(todo) {
    this.setState(prevState => {
      const newTodos = [...prevState.todos, todo];
      return {todos: newTodos};
    });
  }

  handleDeleteTodo(todoId) {
    this.setState(prevState => {
      const newTodos = [...prevState.todos];
      newTodos.splice(todoId, 1);

      return { todos: newTodos };
    });
  }

  render() {
    return (
      <div className="app">
        <AppHeader />
        <div className="app-main">
          <TodoInput onAddTodo={this.handleAddTodo} />
          <TodoList todos={this.state.todos} onDeleteTodo={this.handleDeleteTodo} />
        </div>
        <AppFooter todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
