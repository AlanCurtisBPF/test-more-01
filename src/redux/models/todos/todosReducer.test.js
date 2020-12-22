import configureStore from "../../configureStore";
import * as actions from "./todoActions";
import todosReducer, { initialState } from "./todosReducer";

describe("counterReducer", () => {
  let store;
  beforeEach(() => {
    store = configureStore();
  });

  it("test run", () => {
    expect(true).toEqual(true);
  });


});
