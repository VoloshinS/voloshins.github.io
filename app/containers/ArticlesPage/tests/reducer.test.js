import expect from 'expect';
import { fromJS } from 'immutable';

import articlesReducer from '../reducer';

describe('articlesReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      loading: false,
      error: false,
      articles: false,
    });
  });

  it('returns the initial state', () => {
    expect(articlesReducer(undefined, {})).toEqual(state);
  });
});
