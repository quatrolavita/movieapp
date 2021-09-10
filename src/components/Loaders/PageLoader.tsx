import React from 'react';

//styles
import styles from './Loaders.module.css';
import { useSelector } from 'react-redux';
import { selectShowPageLoader } from '../../redux/uiEffects/uiEffectSelector';

export const PageLoader = (props: any) => {
    const { children } = props;
    const isLoading = useSelector(selectShowPageLoader);

    return <>{isLoading ? <div className={styles.pageLoader} /> : children}</>;
};
