import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import * as actions from "./todosActions";
import * as types from "./todosTypes";

import { initialState } from '../todos/todosReducer';
import mockAxios from "axios";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("counterActions", () => {
  let store;
  beforeEach(() => {
    store = mockStore(initialState);
  });

  it("test run", () => {
    expect(true).toEqual(true);
  });


});
