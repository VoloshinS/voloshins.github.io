/**
 * Test  sagas
 */

import expect from 'expect';
import { take, call, put } from 'redux-saga/effects';
import { getArticles } from '../sagas';

import { LOAD_ARTICLES } from '../constants';
import { articlesLoaded, articlesLoadingError } from '../actions';

import request from 'utils/request';

const generator = getArticles();

describe('getArticles Saga', () => {
  // We have to test twice, once for a successful load and once for an unsuccessful one
  // so we do all the stuff that happens beforehand automatically in the beforeEach
  beforeEach(() => {
    expect(generator.next().value).toEqual(take(LOAD_ARTICLES));
    const requestURL = 'http://backend-voloshins.rhcloud.com/getpocket_proxy';
    expect(generator.next().value).toEqual(call(request, requestURL));
  });

  it('should dispatch the articlesLoaded action if it requests the data successfully', () => {
    const response = {
      data: [{
        name: 'First repo',
      }, {
        name: 'Second repo',
      }],
    };
    expect(generator.next(response).value).toEqual(put(articlesLoaded(response.data)));
  });

  it('should call the articlesLoadingError action if the response errors', () => {
    const response = {
      err: 'Some error',
    };
    expect(generator.next(response).value).toEqual(put(articlesLoadingError(response.err)));
  });
});
