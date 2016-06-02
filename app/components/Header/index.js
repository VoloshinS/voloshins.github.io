/**
*
* Header
*
*/

import React from 'react';

import Container from '../Container';
import Logo from '../Logo';
import MenuButton from '../MenuButton';

import styles from './styles.css';

function Header() {
  return (
    <div className={styles.header}>
      <Container>
        <Logo className={styles.headerLogo}>
          {"Sergey Voloshin"}
        </Logo>
        <MenuButton className={styles.menuButtonWrapper} />
      </Container>
    </div>
  );
}

export default Header;
