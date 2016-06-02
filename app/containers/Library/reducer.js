/*
 * BooksReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import {
  LOAD_BOOKS_SUCCESS,
  LOAD_BOOKS,
  LOAD_BOOKS_ERROR,
} from './constants';
import { fromJS } from 'immutable';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  books: false,
});

function LibraryReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_BOOKS:
      return state
        .set('loading', true)
        .set('error', false)
        .set('books', false);
    case LOAD_BOOKS_SUCCESS:
      return state
        .set('books', action.books)
        .set('loading', false);
    case LOAD_BOOKS_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    default:
      return state;
  }
}

export default LibraryReducer;
