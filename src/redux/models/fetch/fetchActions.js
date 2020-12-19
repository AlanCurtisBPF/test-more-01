import * as types from "./fetchTypes";

// Actions
export const fetchStart = () => (dispatch) => {
  dispatch({
    type: types.FETCH_START,
    payload: { isPending: true },
  });
};

export const fetchSuccess = (fetchData) => (dispatch) => {
  dispatch({
    type: types.FETCH_SUCCESS,
    payload: {
      isPending: false,
      data: fetchData,
      error: "",
    },
  });
};

export const fetchFailure = (error) => (dispatch) => {
  dispatch({
    type: types.FETCH_FAILURE,
    payload: {
      isPending: false,
      data: {},
      error: error,
    },
  });
};
