import expect from 'expect';
import { fromJS } from 'immutable';

import libraryReducer from '../reducer';

describe('libraryReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      loading: false,
      error: false,
      books: false,
    });
  });

  it('returns the initial state', () => {
    expect(libraryReducer(undefined, {})).toEqual(state);
  });
});
