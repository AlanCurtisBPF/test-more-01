import axios from "axios";
import * as types from "./todosTypes";

// todo: alan- clean up and match styles of code between counter and this todo.
// too keep consistiency.

// Actions

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

const getTodosRequest = () => {
  return {
    type: types.GET_TODOS_REQUEST,
    payload: {
      isLoading: true,
    },
  };
};

const getTodosSuccess = (todos) => {
  return {
    type: types.GET_TODOS_SUCCESS,
    payload: {
      todos: [...todos],
      isLoading: false,
      error: null,
    },
  };
};

const getTodosFailure = (error) => {
  return {
    type: types.GET_TODOS_FAILURE,
    payload: {
      error,
      todos: [],
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

