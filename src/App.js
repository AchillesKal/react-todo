import React, {Component} from 'react';
import uuid from 'uuid/v4';
import './App.css';

import AppHeader from './components/AppHeader';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import AppFooter from './components/AppFooter';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      filters: {
        "all": true,
        "active": false,
        "completed": false
      }
    };

    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleDeleteTodo = this.handleDeleteTodo.bind(this);
    this.handleCompleteTodo = this.handleCompleteTodo.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
  }

  handleAddTodo(todo) {
    this.setState(prevState => {
      const newTodo = {
        id: uuid(),
        task: todo,
        completed: false
      }

      const newTodos = [...prevState.todos, newTodo];
      return { todos: newTodos};
    });
  }

  handleDeleteTodo(todoId) {
    this.setState(prevState => {
      const newTodos = [...prevState.todos];

      for (let i = 0; i < newTodos.length; i++) {
        if (newTodos[i].id === todoId) {
          newTodos.splice(i, 1);
        }
      }

      return { todos: newTodos };
    });
  }

  handleCompleteTodo(todoId) {
    this.setState(prevState => {
      const newTodos = [...prevState.todos];

      for (let i = 0; i < newTodos.length; i++) {
        if (newTodos[i].id === todoId) {
          let newTodoStatus = !newTodos[i].completed;

          newTodos[i] = {
            'id': newTodos[i].id,
            'task': newTodos[i].task,
            'completed': newTodoStatus
          };
        }
      }

      return { todos: newTodos };
    });
  }

  handleFilter(filter) {
    this.setState(prevState => {
      const newFilters = {
        "all": false,
        "active": false,
        "completed": false
      }

      newFilters[filter] = true;

      return { filters: newFilters };
    });
  }

  getCurrentFilter() {
    let filters = this.state.filters;
    let currentFilter;

    Object.keys(filters).map(function (key) {
      if (filters[key] === true){
        currentFilter = key;
      }

      return key;
    });

    return currentFilter;
  }

  getTodos() {
    const todos = this.state.todos
    const currentFilter =this.getCurrentFilter();


    let newTodos = todos.filter((todo) => {
      if (currentFilter === "active") {
        return todo.completed === 0;
      } else if (currentFilter === "completed") {
        return todo.completed === 1;
      } else {
        return todo;
      }
    })

    return newTodos;
  }

  render() {
    return (
      <div className="app">
        <AppHeader />
        <div className="app-main">
          <TodoInput onAddTodo={this.handleAddTodo} />
          <TodoList
            todos={this.getTodos()}
            onDeleteTodo={this.handleDeleteTodo}
            onCompleteTodo={this.handleCompleteTodo}
          />
        </div>
        <AppFooter
          todos={this.state.todos}
          filters={this.state.filters}
          onComplete={this.handleFilter}
        />
      </div>
    );
  }
}

export default App;