import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import * as actions from "./todosActions";
import * as types from "./todosTypes";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("counterActions", () => {
  let store;
  beforeEach(() => {
    store = mockStore({ counter: { count: 0 } });
  });

  it("test run", () => {
    expect(true).toEqual(true);
  });


});
