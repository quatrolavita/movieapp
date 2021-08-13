import React from 'react';

//styles
import styles from './Header.module.css';

function Header(props: any) {
    const { left, right, center } = props;

    return (
        <header className={styles.header}>
            <div className={styles.headerContainer}>
                {left} {center} {right}
            </div>
        </header>
    );
}

export default Header;
