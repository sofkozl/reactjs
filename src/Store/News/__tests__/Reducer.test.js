import { getNewsLoading, getNewsSuccess, getNewsFailure, getNews, NEWS_ARTICLES_API } from '../Actions';
import { newsReducer, REQUEST_STATUS, initialState } from '../Reducer';

describe('news articles reducer test', () => {

  it('returns initialState without action', () => {
    const received = newsReducer();
    const expected = initialState;
    
    expect(received).toEqual(expected);
  });

  it('returns state with status LOADING after getNewsLoading action', () => {
    const expected = {
      list: [], 
      request: {
        error: null,
        status: REQUEST_STATUS.LOADING
      },
    }
    
    const received = newsReducer(undefined, getNewsLoading());
    expect(received).toEqual(expected);
  });

  it('returns state with status SUCCESS after getNewsSuccess action', () => {
    const expected = {
        list: undefined,
        request: {
          error: null,
          status: REQUEST_STATUS.SUCCESS
        },
    }

    const received = newsReducer(undefined, getNewsSuccess());
    expect(received).toEqual(expected);
  });

  it('returns state with status FAILURE after getNewsFailure action', () => {
    const expected = {
        list: [],
          request: {
          error: undefined,
          status: REQUEST_STATUS.FAILURE
        },
    }

    const received = newsReducer(undefined, getNewsFailure());
    expect(received).toEqual(expected);
  });

})