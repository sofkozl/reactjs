export const GET_NEWS_LOADING = 'GET_NEWS_LOADING';
export const GET_NEWS_SUCCESS = 'GET_NEWS_SUCCESS';
export const GET_NEWS_FAILURE = 'GET_NEWS_FAILURE';

export const getNewsLoading = () => ({
  type: GET_NEWS_LOADING,
});

export const getNewsSuccess = (news) => ({
  type: GET_NEWS_SUCCESS,
  payload: news,
});

export const getNewsFailure = (error) => ({
  type: GET_NEWS_FAILURE,
  payload: error,
});

const NEWS_ARTICLES_API = 'https://api.spaceflightnewsapi.net/v3/articles';

export const getNews = () => async (dispatch) => {
  dispatch(getNewsLoading());
  
  try {
    const response = await fetch(NEWS_ARTICLES_API);
    
    if (!response.ok) {
      throw new Error(`error ${response.status}`);
    }
    
    const result = await response.json();
    console.log(result);
    dispatch(getNewsSuccess(result));
  } catch (e) {
      console.log(e);
      dispatch(getNewsFailure(e.message));
    };
};
