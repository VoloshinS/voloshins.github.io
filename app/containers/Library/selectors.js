// import { createSelector } from 'reselect';

const selectBooks = () => state => state.get('library').get('books');

export {
  selectBooks,
};
