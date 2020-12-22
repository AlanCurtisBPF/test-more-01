import axios from 'axios';
import * as types from "./todosTypes";

// todo: alan- clean up and match styles of code between counter and this todo.
// too keep consistiency.

// Actions
export const addTodo = ({ title, userId }) => {
  return (dispatch, getState) => {
    const { todos } = getState();
    console.log('current State:', {todos, list: todos.todos})
    dispatch(addTodoStarted());

    axios
      .post(`https://jsonplaceholder.typicode.com/todos`, {
        title,
        userId,
        completed: false
      })
      .then(res => {
        // dispatch(addTodoSuccess(res.data));
        // timeout faking delay
        setTimeout(() => {
          dispatch(addTodoSuccess(res.data, todos.todos));
        }, 2500);
        // or you can manually throw and error
        // throw new Error('addToDo error!');
      })
      .catch(err => {
        dispatch(addTodoFailure(err.message));
      });
  };
};

const addTodoSuccess = (todo,todos )=> {
  console.log({todo, todos})
  return{
    type: types.ADD_TODO_SUCCESS,
    payload: {
      todos:[...todos,{todo}],
      loading:false,
      error: null
    }
  }
};

const addTodoStarted = () => ({
  type: types.ADD_TODO_STARTED,
  payload:{
    loading: true
  }
});

const addTodoFailure = error => ({
  type: types.ADD_TODO_FAILURE,
  payload: {
    error,
    todos:[],
    loading:false
  }
});

/*
export const increment = (margin) => (dispatch, getState) => {
  const currentCount = getState().counter.count;
  const updateCount = currentCount * 1 + margin * 1;

  dispatch({
    type: types.INCREMENT_COUNTER,
    payload: { count: updateCount },
  });
};

export const decrement = (margin) => (dispatch, getState) => {
  const currentCount = getState().counter.count;
  const updateCount = currentCount * 1 - margin * 1;
  dispatch({
    type: types.DECREMENT_COUNTER,
    payload: { count: updateCount },
  });
};

export const reset = () => (dispatch) => {
  dispatch({ type: types.RESET_COUNTER });
};

*/