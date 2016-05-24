/*
 *
 * Library
 *
 */

import React from 'react';
import { connect } from 'react-redux';

import { createSelector } from 'reselect';
import {
  selectBooks,
} from './selectors';

import { loadBooks } from './actions';

import H2 from 'components/H2';
import Table from 'components/Table';

import styles from './styles.css';

class Library extends React.Component {
  componentDidMount() {
    this.props.onComponentDidMount();
  }

  render() {
    return (
      <div className={styles.library}>
        <H2>{'100 books about JS'}</H2>
        {this.props.books && <Table items={this.props.books} />}
      </div>
    );
  }
}

Library.propTypes = {
  // loading: React.PropTypes.bool,
  // error: React.PropTypes.oneOfType([
  //   React.PropTypes.object,
  //   React.PropTypes.bool,
  // ]),
  books: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.bool,
  ]),
  onComponentDidMount: React.PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return {
    onComponentDidMount: () => { dispatch(loadBooks()); },

    dispatch,
  };
}

export default connect(createSelector(
  selectBooks(), (books) => ({ books })
), mapDispatchToProps)(Library);
