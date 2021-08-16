import React from 'react';

//images
import logo from './img/logo.png';

//styles
import styles from './Logo.module.css';

function Logo(props: any) {
    return <img src={logo} alt={'logo'} className={styles.logo} />;
}

export default Logo;
