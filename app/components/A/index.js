/**
 * A link to a certain page, an anchor tag
 */

import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import styles from './styles.css';

function A(props) {
  const Component = props.to ? Link : 'a';

  return (
    <Component
      className={
        props.className || styles.link
      }
      { ...props }
    />
  );
}

A.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string,
  to: PropTypes.string,
  target: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default A;
