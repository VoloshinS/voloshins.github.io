/**
*
* Column
*
*/

import React, { PropTypes } from 'react';

import styles from './styles.css';

function Column({ children, className, width }) {
  const columnsClass = width ? `span_${width}` : 'span_6_of_12';

  return (
    <div className={`${styles.column} ${styles[columnsClass]} ${className}`}>
      {children}
    </div>
  );
}

Column.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  width: PropTypes.string,
};

export default Column;
