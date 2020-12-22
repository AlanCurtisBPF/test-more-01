// import Actions Types
import * as types from "./todosTypes";

// Initial State
export const initialState = {
  loading: false,
  todos: [
    {
      "userId": 1,
      "id": 1,
      "title": "Jump",
      "completed": false
    },
    {
      "userId": 1,
      "id": 2,
      "title": "Dance",
      "completed": false
    },
    {
      "userId": 2,
      "id": 3,
      "title": "Swing",
      "completed": false
    },
  ],
  error: null
};

// todo: alan- clean up and match styles of code between counter and this todo.
// too keep consistiency.

// Reducer
const todosReducer = (state = initialState, action) => {
  let updateState;
  switch (action.type) {
    case types.ADD_TODO_STARTED:
      updateState= Object.assign({}, state, {...action.payload})
      return updateState
    case types.ADD_TODO_SUCCESS:
      updateState= Object.assign({}, state, {...action.payload});
      return updateState
    case types.ADD_TODO_FAILURE:
      updateState= Object.assign({}, state, initialState);
      return updateState
    default:
      return state;
  }
};

export default todosReducer;
