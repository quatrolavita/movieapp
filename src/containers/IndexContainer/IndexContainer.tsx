import React from 'react';

//styles
//HOCs
import { headerWithLogo } from '../../hocs/uiView/Header/headerWithLogo';

//components
import Header from '../../components/Header/Header';
import Container from '../../components/Container/Container';
import MovieCard from '../../components/MovieCard/MovieCard';

function IndexContainer(props: any) {
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
