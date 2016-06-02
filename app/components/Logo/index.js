/**
*
* Logo
*
*/

import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import styles from './styles.css';

function Logo({ children }) {
  return (
    <Link
      to="/"
      className={styles.logo}
    >
      {children}
    </Link>
  );
}

Logo.propTypes = {
  children: PropTypes.node,
};

export default Logo;
