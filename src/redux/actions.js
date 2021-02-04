import {
  FETCH_ARTICLE_BEGIN,
  FETCH_ARTICLE_SUCCESS,
  FETCH_ARTICLE_FAILURE
} from "./actionTypes";

import { articleAPI } from "../utils";

export const fetchArticlesBegin = () => ({
  type: FETCH_ARTICLE_BEGIN
});

export const fetchArticlesSuccess = article => ({
  type: FETCH_ARTICLE_SUCCESS,
  payload: { article }
});

export const fetchArticlesFailure = error => ({
  type: FETCH_ARTICLE_FAILURE,
  payload: { error }
});

export function fetchArticles() {
  return dispatch => {
    dispatch(fetchArticlesBegin());
    return articleAPI
      .get()
      .then(res => {
        return dispatch(fetchArticlesSuccess(res));
      })

      .catch(error => dispatch(fetchArticlesFailure(error)));
  };
}
