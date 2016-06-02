import {
  selectArticles,
} from '../selectors';
import { fromJS } from 'immutable';
import expect from 'expect';

describe('selectArticles', () => {
  const articlesSelector = selectArticles();
  it('should select the articles state', () => {
    const state = fromJS(["test"]);
    const mockedState = fromJS({
      pocket: { articles: {} },
    });
    mockedState.get('pocket').get('articles').list = { test: "test" };

    expect(articlesSelector(mockedState)).toEqual(state);
  });
});
