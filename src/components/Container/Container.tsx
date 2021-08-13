import React from 'react';

//styles
import styles from './Container.module.css';

const Container = (props: any) => {
    const { children, column } = props;

    return <div className={styles.container}>{children}</div>;
};

export default Container;
