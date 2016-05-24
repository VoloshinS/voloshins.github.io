import expect from 'expect';

import {
  LOAD_BOOKS,
  LOAD_BOOKS_SUCCESS,
  LOAD_BOOKS_ERROR,
} from '../constants';

import {
  loadBooks,
  booksLoaded,
  booksLoadingError,
} from '../actions';

describe('App Actions', () => {
  describe('loadBooks', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: LOAD_BOOKS,
      };

      expect(loadBooks()).toEqual(expectedResult);
    });
  });

  describe('booksLoaded', () => {
    it('should return the correct type and the passed books', () => {
      const fixture = ['Test'];
      const username = 'test';
      const expectedResult = {
        type: LOAD_BOOKS_SUCCESS,
        books: fixture,
      };

      expect(booksLoaded(fixture, username)).toEqual(expectedResult);
    });
  });

  describe('booksLoadingError', () => {
    it('should return the correct type and the error', () => {
      const fixture = {
        msg: 'Something went wrong!',
      };
      const expectedResult = {
        type: LOAD_BOOKS_ERROR,
        error: fixture,
      };

      expect(booksLoadingError(fixture)).toEqual(expectedResult);
    });
  });
});
