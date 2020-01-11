import styled from 'styled-components';
import { FunctionComponent } from 'react';
import Head from 'next/head';

import NavBar from './NavBar';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    margin: 0;
`;

const PadTop = styled.div`
    margin-top: 70px;
`;

const Layout:FunctionComponent = ({children}) => {
    return (
        <Container>
            <Head>
                <title>Spencer Hemstreet</title>
            </Head>
            <NavBar />
            <PadTop >
                {children}  
            </PadTop>
        </Container>    
    )
}

export default Layout;