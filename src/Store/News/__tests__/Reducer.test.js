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

  describe('getNews', () => {

        it('calls dispatch with getNewsLoading', async () => {
          const mockDispatch = jest.fn();
          
          // eslint-disable-next-line no-undef
          fetchMock.mockOnce(
            JSON.stringify("The next call to fetch will always return this as the body")
          );

          await getNews()(mockDispatch);

          expect(mockDispatch).toHaveBeenCalledWith(getNewsLoading());
        });

        it('getNews action after fetch API', async () => {
          const mockDispatch = jest.fn();
          
          // eslint-disable-next-line no-undef
          fetchMock.mockOnce(
            JSON.stringify("The next call to fetch will always return this as the body")
          );

          await getNews()(mockDispatch);

          // eslint-disable-next-line no-undef
          expect(fetchMock).toHaveBeenCalledWith(NEWS_ARTICLES_API);
        });
        
        it('calls dispatch with getNewsSuccess from API', async () => {
          const mockDispatch = jest.fn();
          const result = ['news'];
          
          // eslint-disable-next-line no-undef
          fetchMock.mockOnce(
            JSON.stringify(result)
          );

          await getNews()(mockDispatch);

          expect(mockDispatch).toHaveBeenCalledTimes(2);
          expect(mockDispatch).toHaveBeenLastCalledWith(getNewsSuccess(result));
        });

    })
})