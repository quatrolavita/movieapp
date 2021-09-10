import React from 'react';

//styles
import styles from './Text.module.css';

const Text = ({ children }: any) => {
    return <p className={styles.text}>{children}</p>;
};

export default Text;
