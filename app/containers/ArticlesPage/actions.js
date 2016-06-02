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
  LOAD_ARTICLES,
  LOAD_ARTICLES_SUCCESS,
  LOAD_ARTICLES_ERROR,
} from './constants';

/**
 * Load the articles, this action starts the getGithubData saga
 *
 * @return {object} An action object with a type of LOAD_ARTICLES
 */
export function loadArticles() {
  return {
    type: LOAD_ARTICLES,
  };
}

/**
 * Dispatched when the articles are loaded by the getGithubData saga
 *
 * @param  {array} articles The articlesitory data
 * @param  {string} username The current username
 *
 * @return {object}      An action object with a type of LOAD_ARTICLES_SUCCESS passing the articles
 */
export function articlesLoaded(articles) {
  return {
    type: LOAD_ARTICLES_SUCCESS,
    articles,
  };
}

/**
 * Dispatched when loading the articles fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_ARTICLES_ERROR passing the error
 */
export function articlesLoadingError(error) {
  return {
    type: LOAD_ARTICLES_ERROR,
    error,
  };
}
