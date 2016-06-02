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
  LOAD_ARTICLES_SUCCESS,
  LOAD_ARTICLES,
  LOAD_ARTICLES_ERROR,
} from './constants';
import { fromJS } from 'immutable';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  articles: false,
});

function LibraryReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_ARTICLES:
      return state
        .set('loading', true)
        .set('error', false)
        .set('articles', false);
    case LOAD_ARTICLES_SUCCESS:
      return state
        .set('articles', action.articles)
        .set('loading', false);
    case LOAD_ARTICLES_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    default:
      return state;
  }
}

export default LibraryReducer;
