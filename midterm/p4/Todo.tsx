const { Component } = React;

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
    };
  }

  handleInputChange = (e) => {
    this.setState({ inputText: e.target.value });
  }

  handleSubmit = () => {
    if (this.state.inputText.trim()) {
      this.props.onAdd(this.state.inputText);
      this.setState({ inputText: '' });
    }
  }

  render() {
    return (
      <div className="input-container">
        <input
          type="text"
          value={this.state.inputText}
          onChange={this.handleInputChange}
          placeholder="Enter a new task"
        />
        <button 
          onClick={this.handleSubmit}
          disabled={!this.state.inputText.trim()}
        >
          Add Task
        </button>
      </div>
    );
  }
}

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text
    };
    this.setState(prevState => ({
      todos: [...prevState.todos, newTodo]
    }));
  }

  deleteTodo = (id) => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== id)
    }));
  }

  render() {
    return (
      <div className="todo-container">
        <h2>Todo List</h2>
        <ListItem onAdd={this.addTodo} />
        <ul>
          {this.state.todos.map(todo => (
            <li key={todo.id}>
              <span>{todo.text}</span>
              <button 
                className="delete-btn"
                onClick={() => this.deleteTodo(todo.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

class App extends Component {
  render(){
    return (
      <div>
        <List />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".root"));