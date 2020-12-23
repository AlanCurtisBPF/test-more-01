import axios from "axios";
import * as types from "./todosTypes";

// todo: alan- clean up and match styles of code between counter and this todo.
// too keep consistiency.

// Actions

//// get todos ////
export const getTodos = () => {
  return async (dispatch) => {
    dispatch(getTodosRequest());

    return axios
      .get("http://localhost:3004/todos/")
      .then((res) => {
        dispatch(getTodosSuccess(res.data));
      })
      .catch((error) => {
        dispatch(getTodosFailure(error.message));
      });
  };
};

export const getTodosRequest = () => {
  return {
    type: types.GET_TODOS_REQUEST,
    payload: {
      isLoading: true,
    },
  };
};

export const getTodosSuccess = (todos) => {
  return {
    type: types.GET_TODOS_SUCCESS,
    payload: {
      todos: [...todos],
      isLoading: false,
      error: null,
    },
  };
};

export const getTodosFailure = (error) => {
  return {
    type: types.GET_TODOS_FAILURE,
    payload: {
      error,
      todos: [],
      isLoading: false,
    },
  };
};

//// add todo ////
export const addTodo = (todoTitle) => {
  return async (dispatch) => {
    dispatch(addTodoRequest());
    const body = {
      title: todoTitle,
      completed: false,
    };

    return axios
      .post("http://localhost:3004/todos/", body)
      .then((res) => {
        dispatch(addTodoSuccess(res.data));
      })
      .catch((error) => {
        dispatch(addTodoFailure(error.message));
      });
  };
};

export const addTodoRequest = () => {
  return {
    type: types.ADD_TODO_REQUEST,
    payload: {
      isLoading: true,
    },
  };
};

export const addTodoSuccess = (todo) => (dispatch, getState) => {
  const currentTodoList = getState().todos.todos;
  dispatch( {
    type: types.ADD_TODO_SUCCESS,
    payload: {
      todos: [...currentTodoList, todo],
      isLoading: false,
      error: null,
    },
  });
};

export const addTodoFailure = (error) => {
  return {
    type: types.ADD_TODO_FAILURE,
    payload: {
      error,
      isLoading: false,
    },
  };
};

// const resetTodos = () => {
//   return {
//     type: types.TODOS_RESET
//   };
// };

/*

export const getTodos = () => {
  return async (dispatch) => {
    dispatch(getTodosRequest());

    return axios
      .get("http://localhost:3004/todos/")
      .then((res) => {
        dispatch(getTodosSuccess(res.data));
        // or you can throw an error
        throw new Error("failed to retrieve todos!");
        // setTimeout to represnt latency
        // setTimeout(() => {
        //   dispatch(getTodosSuccess(res.data));
        // }, 2000);
      })
      .catch((error) => {
        dispatch(getTodosFailure(error.message));
      });
  };
};
*/
