// import Actions Types
import * as types from "./fetchTypes";

// Initial State
export const initialState = {
  isPending: false,
  error:'',
  data:{},
  
};

// Reducer
const fetchReducer = (state = initialState, action) => {
  let updateState;
  switch (action.type) {
    case types.FETCH_START:
      updateState= Object.assign({}, state, {...action.payload});
      return updateState
    case types.FETCH_SUCCESS:
      updateState= Object.assign({}, state, {...action.payload});
      return updateState
    case types.FETCH_FAILURE:
      updateState= Object.assign({}, state, {...action.payload});
      return updateState
    default:
      return state;
  }
};

export default fetchReducer;
