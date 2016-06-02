import React from 'react';

import A from 'components/A';
import Container from 'components/Container';
import styles from './styles.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <p>2016 © <A href="https://github.com/VoloshinS">Voloshin Sergey</A>.</p>
      </Container>
    </footer>
  );
}

export default Footer;
