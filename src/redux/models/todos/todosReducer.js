// import Actions Types
import * as types from "./todosTypes";

// Initial State
export const initialState = {
  isLoading: false,
  todos: [],
  error: null
};

// todo: alan- clean up and match styles of code between counter and this todo.
// too keep consistiency.

// Reducer
const todosReducer = (state = initialState, action) => {
  let updateState;
  switch (action.type) {
    case types.GET_TODOS_REQUEST:
      updateState= Object.assign({}, state, {...action.payload})
      return updateState
    case types.GET_TODOS_SUCCESS:
      updateState= Object.assign({}, state, {...action.payload});
      return updateState
    case types.GET_TODOS_FAILURE:
      updateState= Object.assign({}, state, {...action.payload});
      return updateState
    case types.ADD_TODO_REQUEST:
      updateState= Object.assign({}, state, {...action.payload})
      return updateState
    case types.ADD_TODO_SUCCESS:
      updateState= Object.assign({}, state, {...action.payload});
      return updateState
    case types.ADD_TODO_FAILURE:
      updateState= Object.assign({}, state, {...action.payload});
      return updateState
    default:
      return state;
  }
};

export default todosReducer;
