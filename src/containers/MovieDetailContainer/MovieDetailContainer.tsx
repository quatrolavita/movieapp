import React, { useEffect } from 'react';

//styles
import styles from './MovieDetail.module.css';

//HOCs
import { headerWithLogo } from '../../hocs/uiView/Header/headerWithLogo';

//components
import Header from '../../components/Header/Header';
import Container from '../../components/Container/Container';
import Text from '../../components/Text/Text';

export default function MovieDetailContainer(props: any) {
    const { movieDetailContent } = props;
    const { Title, Year, Rated, Poster, Ratings, Plot, Released, Runtime } =
        movieDetailContent;
    useEffect(() => {
        console.log('parse info', movieDetailContent);
    }, []);

    return (
        <>
            <HeaderWithLogo />
            <Container>
                <div className={styles.movieDetailFlexWrap}>
                    <div className={styles.title}>
                        <Text>{Title}</Text>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.boxColumn}>
                            <img
                                src={`${Poster}`}
                                alt="Poster"
                                className={styles.posterIMG}
                            />
                            <div className={styles.ratingsBox}>
                                {Ratings?.map(
                                    (ratingItem: any, index: number) => {
                                        return (
                                            <>
                                                <Text>
                                                    {ratingItem.Source}{' '}
                                                    {ratingItem.Value}
                                                </Text>
                                            </>
                                        );
                                    }
                                )}
                            </div>
                        </div>
                        <div className={styles.boxColumn}>
                            <Text>Year: {Year}</Text>
                            <Text>Rated: {Rated}</Text>
                            <Text>Plot: {Plot}</Text>
                            <Text>Released: {Released}</Text>
                            <Text>Runtime: {Runtime}</Text>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
}

const HeaderWithLogo = headerWithLogo(Header);
