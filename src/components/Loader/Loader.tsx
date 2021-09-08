import React from 'react';

//styles
import styles from './Loader.module.css';

export default function Loader(props: any) {
    return (
        <div className={styles.loaderOverlay}>
            <div className={styles.loader} />
        </div>
    );
}
