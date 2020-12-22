import { combineReducers } from "redux";

import counter from "./models/counter/counterReducer";
import todos from "./models/todos/todosReducer";

export default combineReducers({
  counter,
  todos,
});