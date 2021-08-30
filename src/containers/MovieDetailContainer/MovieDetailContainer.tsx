import React from 'react';

//styles
import styles from './MovieDetail.module.css';

//HOCs
import { headerWithLogo } from '../../hocs/uiView/Header/headerWithLogo';

//components
import Header from '../../components/Header/Header';
import Container from '../../components/Container/Container';
import Text from '../../components/Text/Text';

export default function MovieDetailContainer(props: any) {
    const {} = props;

    return (
        <>
            <HeaderWithLogo />
            <Container>
                <div className={styles.movieDetailFlexWrap}>
                    <div className={styles.box}>
                        <Text> </Text>
                    </div>
                </div>
            </Container>
        </>
    );
}

const HeaderWithLogo = headerWithLogo(Header);
