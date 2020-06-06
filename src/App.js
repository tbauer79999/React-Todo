import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Navbar from "./components/NavBar";
import "./components/Todo.css";


const todos = [{ name: "", id: Date.now(), completed: false }];

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      todos,
    };
  }


  addItem = (e, item) => {
    e.preventDefault();
    const newItem = {
      name: item,
      id: Date.now(),
      completed: false,
    };

    this.setState({
      todos: [...this.state.todos, newItem],
    });

    console.log(item);
  };


  toggleItem = (itemId) => {

    console.log(itemId);
    this.setState({
      todos: this.state.todos.map((item) => {
        if (itemId === item.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      }),
    });
  };


  clearCompleted = (e) => {
    e.preventDefault();
    this.setState({
      todos: this.state.todos.filter((item) => !item.completed),
    });
  };


  render() {

    return (
      <div>
        <Navbar />
        <div className="App">
          <h1>Welcome to the To-Do App!</h1>
          <TodoForm addItem={this.addItem} />
          <div>
            <TodoList todos={this.state.todos} toggleItem={this.toggleItem} clearCompleted={this.clearCompleted} />
          </div>
        </div>
      </div>
    );
  }
}
export default App;