import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import * as actions from "./todosActions";
import * as types from "./todosTypes";

import { initialState } from '../todos/todosReducer';
// import mockAxios from "axios";

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

  it('runs async', async ()=>{
    // todo : alan - not working as expected
    await store.dispatch(actions.getTodos())
    console.log(store.getActions())

    const expectedActions = [
      {
        type: types.GET_TODOS_STARTED,
        payload: { isLoading: true },
      },
    ];

    expect(store.getActions()).toEqual(expectedActions);
  })


});
