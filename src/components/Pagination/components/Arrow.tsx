import React from 'react';
import ClassNames from 'classnames/bind';

//styles
import styles from './PaginationComponents.module.css';

const cx = ClassNames.bind(styles);

export const Arrow = (props: any) => {
    const { left, right } = props;
    const arrowStyles = cx({
        arrow: true,
        left: left,
        right: right,
    });

    return <div className={arrowStyles} />;
};
