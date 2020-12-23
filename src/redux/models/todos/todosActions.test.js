import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import * as actions from "./todosActions";
import * as types from "./todosTypes";

import { initialState } from "../todos/todosReducer";

import axios from "axios";
jest.mock("axios");

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

  it("mocks axios redolve get with fake data", async () => {
    axios.get.mockResolvedValue({
      data: [
        {
          userId: 1,
          id: 1,
          title: "Jump",
          completed: false,
        },
      ],
    });

    await store.dispatch(actions.getTodos()).then(() => {
      const expectedActions = [
        {
          type: types.GET_TODOS_REQUEST,
          payload: { isLoading: true },
        },
        {
          payload: {
            error: null,
            isLoading: false,
            todos: [
              {
                completed: false,
                id: 1,
                title: "Jump",
                userId: 1,
              },
            ],
          },
          type: types.GET_TODOS_SUCCESS,
        },
      ];
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
