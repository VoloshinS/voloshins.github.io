import { take, call, put } from 'redux-saga/effects';

import { LOAD_BOOKS } from './constants';
import { booksLoaded, booksLoadingError } from './actions';

import request from 'utils/request';

// All sagas to be loaded
export default [
  getBooks,
];

/* eslint-disable no-constant-condition */

// Individual exports for testing
export function* getBooks() {
  while (true) {
    yield take(LOAD_BOOKS);
    const requestURL = 'https://voloshins.firebaseio.com/books.json';

    // Use call from redux-saga for easier testing
    const books = yield call(request, requestURL);

    // We return an object in a specific format, see utils/request.js for more information
    if (books.err === undefined || books.err === null) {
      yield put(booksLoaded(books.data));
    } else {
      console.log(books.err.response); // eslint-disable-line no-console
      yield put(booksLoadingError(books.err));
    }
  }
}
