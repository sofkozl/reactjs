import { GET_NEWS_FAILURE, GET_NEWS_SUCCESS, GET_NEWS_LOADING } from "./Actions";

export const REQUEST_STATUS = {
  IDLE: 0,
  LOADING: 1,
  SUCCESS: 2,
  FAILURE: 3
};

export const initialState = {
  list: [],
  request: {
    error: null,
    status: REQUEST_STATUS.IDLE,
  }
};

export const newsReducer = (state = initialState, action) => {

  switch (action?.type) {

    case GET_NEWS_LOADING: {
      return {
          ...state,
          request: {
            error: null,
            status: REQUEST_STATUS.LOADING
          }
      };
    }

    case GET_NEWS_SUCCESS: {
      return {
        ...state,
        request: {
          ...state.request,
          status: REQUEST_STATUS.SUCCESS
        },
        list: action.payload
      };
    }

    case GET_NEWS_FAILURE: {
      return {
        ...state,
        request: {
          error: action.payload,
          status: REQUEST_STATUS.FAILURE
        },
      };
    }

    default: {
      return state;
    }
  }
}