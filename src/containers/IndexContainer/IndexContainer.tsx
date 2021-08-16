import React, { useEffect } from 'react';

//styles
//HOCs
import { headerWithLogo } from '../../hocs/uiView/Header/headerWithLogo';

//components
import Header from '../../components/Header/Header';
import Container from '../../components/Container/Container';
import MovieCard from '../../components/MovieCard/MovieCard';
import getMovieByTitle from '../../api/api';

function IndexContainer(props: any) {
    useEffect(() => {
        {
            getMovieByTitle('shrek').then((response) => {
                console.log('response', response?.data);
            });
        }
    });

    return (
        <>
            <HeaderWithLogo />
            <Container>
                <MovieCard />
                <MovieCard />
                <MovieCard />
            </Container>
        </>
    );
}

export default IndexContainer;

const HeaderWithLogo = headerWithLogo(Header);
