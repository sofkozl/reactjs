import { REQUEST_STATUS } from "./Reducer";

export const selectNewsLoading = (state) => state.news.request.status === REQUEST_STATUS.LOADING;
export const selectNews = (state) => state.news.list;
export const selectNewsError = (state) => state.news.request.error;