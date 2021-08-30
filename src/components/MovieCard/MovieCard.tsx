import React from 'react';

//styles
import styles from './MovieCard.module.css';

//components
import Text from '../Text/Text';

const MovieCard = (props: any) => {
    const { title, toMovieDetailPage, imdb_id } = props;

    return (
        <div
            className={styles.cardContainer}
            onClick={() => toMovieDetailPage(imdb_id)}
        >
            <Text>{title}</Text>
        </div>
    );
};

export default MovieCard;
