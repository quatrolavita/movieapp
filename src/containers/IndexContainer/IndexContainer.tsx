import React, { useEffect } from 'react';

//styles
import styles from './IndexContainer.module.css';
//HOCs
import { headerWithLogo } from '../../hocs/uiView/Header/headerWithLogo';

//components
import Header from '../../components/Header/Header';
import Container from '../../components/Container/Container';
import MovieCard from '../../components/MovieCard/MovieCard';

//action

function IndexContainer(props: any) {
    useEffect(() => {
        console.log('props', props);
    }, []);
    return (
        <>
            <HeaderWithLogo />
            <Container>
                <div className={styles.cardBox}>
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                </div>
            </Container>
        </>
    );
}

export default IndexContainer;

const HeaderWithLogo = headerWithLogo(Header);
