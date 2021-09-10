import React from 'react';
import ClassNames from 'classnames/bind';

//styles
import styles from './MovieCard.module.css';

//components
import Text from '../Text/Text';

const MovieCard = (props: any) => {
    const { title, toMovieDetailPage, imdb_id, withRightMargin } = props;

    let cx = ClassNames.bind({ ...styles });

    let movieCardStyles = cx({
        cardContainer: true,
        rightMargin: withRightMargin,
    });

    return (
        <div
            className={movieCardStyles}
            onClick={() => toMovieDetailPage(imdb_id)}
        >
            <Text>{title}</Text>
        </div>
    );
};

export default MovieCard;
