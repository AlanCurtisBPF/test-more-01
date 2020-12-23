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

  it("mocks axios resolve with fake results", async () => {
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

    await store.dispatch(actions.getTodos()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("mocks axios resolve with no results", async () => {
    axios.get.mockResolvedValue({
      data: [],
    });

    const expectedActions = [
      {
        type: types.GET_TODOS_REQUEST,
        payload: { isLoading: true },
      },
      {
        payload: {
          error: null,
          isLoading: false,
          todos: [],
        },
        type: types.GET_TODOS_SUCCESS,
      },
    ];

    await store.dispatch(actions.getTodos()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('mocks axios failure', async ()=>{
    const errorMessage = 'Network Error';

    axios.get.mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage)),
    );

    const expectedActions = [
      {
        type: types.GET_TODOS_REQUEST,
        payload: { isLoading: true },
      },
      {
        payload: {
          error: errorMessage,
          isLoading: false,
          todos: [],
        },
        type: types.GET_TODOS_FAILURE,
      },
    ];

    await store.dispatch(actions.getTodos()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
      expect(axios.get).toHaveBeenCalledWith(`http://localhost:3004/todos/`,);
      expect(axios.get).toHaveBeenCalledTimes(1);
    })
    
  });

});
