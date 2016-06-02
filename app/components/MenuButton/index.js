/**
*
* MenuButton
*
*/

import React from 'react';

import styles from './styles.css';

function MenuButton({ className }) {
  return (
    <div className={className}>
      <div className={styles.menuButton}>
        <svg
          className={styles.menuButtonIcon}
          viewBox="0 0 24 24"
        >
          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
        </svg>
      </div>
    </div>
  );
}

MenuButton.propTypes = {
  className: React.PropTypes.string,
};

export default MenuButton;
