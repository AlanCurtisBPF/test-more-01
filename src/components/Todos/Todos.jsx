import { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  // addTodo as addTodoAction,
  getTodos as getTodosAction,
} from "../../redux/models/todos/todosActions";

import SpinnerSVG from "../../assets/svgs/SpinnerSVG";
// todo: add this to the test suit
// todo: allow for full crud testing.

const Todos = (props) => {
  const { todos, getTodos } = props;
  const [todo, setTodo] = useState("hamster");

  useEffect(() => {
    getTodos();
  }, [getTodos]);

  const handleAddTodo = () => {
    // const todoToAdd = {
    //     title: todo,
    //     id: Math.floor(Math.random() * Math.floor(1000))
    // }
    // addTodo(todoToAdd);
  };

  const handleSetTodo = (e) => {
    let value = e.target.value;
    setTodo(value);
  };

  const mapOverTodosToDisplay = () => {
    return todos.todos.map((todo, i) => {
      return <div key={i}>{todo.title}</div>;
    });
  };

  const displayTodos = () =>{
    if(todos.isLoading){
      return(
        <SpinnerSVG />
      )
    } else if(!todos.isLoading && todos.todos.length < 1) {
      return(
        <div>No todos</div>
      )

    }else {
      return mapOverTodosToDisplay()
    }
  }

  const displayError = () =>{
    if(todos.error){
      return (
        <div>{todos.error}</div>
      )
    }else{
      return null;
    }
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
      <button onClick={() => console.log({ todos })}>log</button>
      <div>
        <div>
          {displayTodos()}
        </div>
        {displayError()}
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTodos: () => dispatch(getTodosAction()),
    dispatch,
  };
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
