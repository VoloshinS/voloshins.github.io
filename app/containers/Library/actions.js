/*
 *
 * Library actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your appliction state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  LOAD_BOOKS,
  LOAD_BOOKS_SUCCESS,
  LOAD_BOOKS_ERROR,
} from './constants';

/**
 * Load the books, this action starts the getGithubData saga
 *
 * @return {object} An action object with a type of LOAD_BOOKS
 */
export function loadBooks() {
  return {
    type: LOAD_BOOKS,
  };
}

/**
 * Dispatched when the books are loaded by the getGithubData saga
 *
 * @param  {array} books The booksitory data
 * @param  {string} username The current username
 *
 * @return {object}      An action object with a type of LOAD_BOOKS_SUCCESS passing the books
 */
export function booksLoaded(books) {
  return {
    type: LOAD_BOOKS_SUCCESS,
    books,
  };
}

/**
 * Dispatched when loading the books fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_BOOKS_ERROR passing the error
 */
export function booksLoadingError(error) {
  return {
    type: LOAD_BOOKS_ERROR,
    error,
  };
}
