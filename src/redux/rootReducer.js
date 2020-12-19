import { combineReducers } from "redux";

import counter from "./models/counter/counterReducer";
import fetch from "./models/fetch/fetchReducer";

export default combineReducers({
  counter,
  fetch,
});