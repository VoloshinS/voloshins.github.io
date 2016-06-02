import {
  selectBooks,
} from '../selectors';
import { fromJS } from 'immutable';
import expect from 'expect';

describe('selectBooks', () => {
  const booksSelector = selectBooks();
  it('should select the home state', () => {
    const state = fromJS([]);
    const mockedState = fromJS({
      library: { books: [] },
    });
    expect(booksSelector(mockedState)).toEqual(state);
  });
});
