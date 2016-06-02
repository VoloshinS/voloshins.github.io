/**
 * Test  sagas
 */

import expect from 'expect';
import { take, call, put } from 'redux-saga/effects';
import { getBooks } from '../sagas';

import { LOAD_BOOKS } from '../constants';
import { booksLoaded, booksLoadingError } from '../actions';

import request from 'utils/request';

const generator = getBooks();

describe('getBooks Saga', () => {
  // We have to test twice, once for a successful load and once for an unsuccessful one
  // so we do all the stuff that happens beforehand automatically in the beforeEach
  beforeEach(() => {
    expect(generator.next().value).toEqual(take(LOAD_BOOKS));
    const requestURL = 'https://voloshins.firebaseio.com/books.json';
    expect(generator.next().value).toEqual(call(request, requestURL));
  });

  it('should dispatch the booksLoaded action if it requests the data successfully', () => {
    const response = {
      data: [{
        name: 'First repo',
      }, {
        name: 'Second repo',
      }],
    };
    expect(generator.next(response).value).toEqual(put(booksLoaded(response.data)));
  });

  it('should call the booksLoadingError action if the response errors', () => {
    const response = {
      err: 'Some error',
    };
    expect(generator.next(response).value).toEqual(put(booksLoadingError(response.err)));
  });
});
