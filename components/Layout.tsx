import styled from 'styled-components';
import { FunctionComponent } from 'react';

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
            <NavBar />
            <PadTop >
                {children}  
            </PadTop>
        </Container>    
    )
}

export default Layout;