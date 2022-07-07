import React from 'react';

import styles from './Header.module.css';

import Logo from '../../assets/ignite-logo.svg';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
        <img src={Logo} alt="Logotipo do site" />
    </header>
  );
}

export default Header;