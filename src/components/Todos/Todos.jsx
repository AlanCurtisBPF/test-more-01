import { useState } from "react";
import { connect } from "react-redux";
import {
  addTodo as addTodoAction,
} from "../../redux/models/todos/todosActions";

// todo: alan- make dummy server or way to fake dummy server.
// todo: add this to the test suit
// todo: allow for full crud testing.

const Todos = (props) => {
  const { addTodo, todos } = props;
  const [todo, setTodo] = useState('hamster');

  const handleAddTodo = () => {
      const todoToAdd = {
          title: todo,
          id: Math.floor(Math.random() * Math.floor(1000))
      }
    addTodo(todoToAdd);
  };

  const handleSetTodo = (e) => {
    let value = e.target.value;
    setTodo(value);
  };

  const mapOverTodosToDisplay =()=>{
      return todos.todos.map((todo,i)=>{return(
      <div key={i}>{todo.title}</div>
      )})
  }

  return (
    <div className="Todos">
      Todo Comp
      <input
        type="text"
        data-testid="todo-input"
        value={todo}
        onChange={handleSetTodo}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <button onClick={()=>console.log({todos})}>log</button>
      {mapOverTodosToDisplay()}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (todo) => dispatch(addTodoAction(todo)),
    dispatch,
  };
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
