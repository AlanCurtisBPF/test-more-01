import configureStore from "../../configureStore";
import * as actions from "./fetchActions";
import fetchReducer, { initialState } from "./fetchReducer";

describe("counterReducer", () => {
  let store;
  beforeEach(() => {
    store = configureStore();
  });

  it("test run", () => {
    expect(true).toEqual(true);
  });

});
