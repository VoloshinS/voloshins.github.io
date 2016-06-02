/**
*
* Row
*
*/

import React, { PropTypes } from 'react';

import styles from './styles.css';

function Row({ children }) {
  return (
    <div className={styles.row}>
      {children}
    </div>
  );
}

Row.propTypes = {
  children: PropTypes.node,
};

export default Row;
