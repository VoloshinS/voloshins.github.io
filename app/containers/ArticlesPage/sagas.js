import { take, call, put } from 'redux-saga/effects';

import { LOAD_ARTICLES } from './constants';
import { articlesLoaded, articlesLoadingError } from './actions';

import request from 'utils/request';

// All sagas to be loaded
export default [
  getArticles,
];

/* eslint-disable no-constant-condition */

// Individual exports for testing
export function* getArticles() {
  while (true) {
    yield take(LOAD_ARTICLES);
    // Use offset and count for pagination
    const requestURL = 'http://backend-voloshins.rhcloud.com/getpocket_proxy?state=archive&sort=newest&detailType=complete';

    // Use call from redux-saga for easier testing
    const articles = yield call(request, requestURL);

    // We return an object in a specific format, see utils/request.js for more information
    if (articles.err === undefined || articles.err === null) {
      yield put(articlesLoaded(articles.data));
    } else {
      console.log(articles.err.response); // eslint-disable-line no-console
      yield put(articlesLoadingError(articles.err));
    }
  }
}
