import expect from 'expect';

import {
  LOAD_ARTICLES,
  LOAD_ARTICLES_SUCCESS,
  LOAD_ARTICLES_ERROR,
} from '../constants';

import {
  loadArticles,
  articlesLoaded,
  articlesLoadingError,
} from '../actions';

describe('App Actions', () => {
  describe('loadArticles', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: LOAD_ARTICLES,
      };

      expect(loadArticles()).toEqual(expectedResult);
    });
  });

  describe('articlesLoaded', () => {
    it('should return the correct type and the passed articles', () => {
      const fixture = ['Test'];
      const username = 'test';
      const expectedResult = {
        type: LOAD_ARTICLES_SUCCESS,
        articles: fixture,
      };

      expect(articlesLoaded(fixture, username)).toEqual(expectedResult);
    });
  });

  describe('articlesLoadingError', () => {
    it('should return the correct type and the error', () => {
      const fixture = {
        msg: 'Something went wrong!',
      };
      const expectedResult = {
        type: LOAD_ARTICLES_ERROR,
        error: fixture,
      };

      expect(articlesLoadingError(fixture)).toEqual(expectedResult);
    });
  });
});
