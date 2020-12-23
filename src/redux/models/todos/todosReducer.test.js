import configureStore from "../../configureStore";
import * as actions from "./todosActions";
import todosReducer, { initialState } from "./todosReducer";

import axios from "axios";
jest.mock("axios");

describe("counterReducer", () => {
  let store;
  beforeEach(() => {
    store = configureStore();
  });

  it("test run", () => {
    expect(true).toEqual(true);
  });

  it("should return inital state: version 01", () => {
    expect(todosReducer(undefined, {})).toEqual(initialState);
  });

  it("async get list of todos", async () => {
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

    const action = actions.getTodos();
    await store.dispatch(action).then(() => {
      const actual = store.getState().todos;
      const expected = {
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
      };

      expect(actual).toEqual(expected);
    });
  });

  it("should request todos and set loading to true", () => {
    const actionsList = [actions.getTodosRequest()];

    actionsList.forEach((action) => store.dispatch(action));

    const actual = store.getState().todos;
    const expected = {
      error: null,
      isLoading: true,
      todos: [],
    };
    expect(actual).toEqual(expected);
  });

  it("should success and set loading:false, todos:[todos], and error:null", () => {
    const todos = [
      {
        completed: false,
        id: 1,
        title: "Jump",
        userId: 1,
      },
    ]

    const actionsList = [actions.getTodosSuccess(todos)];


    actionsList.forEach((action) => store.dispatch(action));

    const actual = store.getState().todos;
    const expected = {
      error: null,
      isLoading: false,
      todos: todos,
    };
    expect(actual).toEqual(expected);
  });

  it("should failure todos set loading to false and return error and todos to empty array", () => {
    const errorMessage = 'Network Error'

    const actionsList = [actions.getTodosFailure(errorMessage)];


    actionsList.forEach((action) => store.dispatch(action));

    const actual = store.getState().todos;
    const expected = {
      error: errorMessage,
      isLoading: false,
      todos: []
    };
    expect(actual).toEqual(expected);
  });
});
