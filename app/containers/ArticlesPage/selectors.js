// import { createSelector } from 'reselect';

const selectArticles = () => state => {
  const arcsObj = state.get('pocket').get('articles');

  return arcsObj && Object.keys(arcsObj.list).map(key => arcsObj.list[key]);
};

export {
  selectArticles,
};
