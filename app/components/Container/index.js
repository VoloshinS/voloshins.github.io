/**
*
* Container
*
*/

import React, { PropTypes } from 'react';

import styles from './styles.css';

function Container({ children, className }) {
  return (
    <div className={className || styles.containerWrapper}>
      <div className={styles.container}>
        {children}
      </div>
    </div>
  );
}

Container.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Container;
