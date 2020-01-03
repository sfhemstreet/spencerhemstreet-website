import styled, { ThemeProvider } from 'styled-components';
import { FunctionComponent } from 'react';

import NavBar from './NavBar';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    margin: 0;

    color: ${props => props.theme.color};
    background: ${props => props.theme.background};
`;

const PadTop = styled.div`
    padding-top: 70px;
`;

const Layout:FunctionComponent = ({children}) => {

    const theme = {
        color: "#aaa",
        background: "#111"
    }

    return (
        <ThemeProvider theme={theme}>
            <Container>
                <NavBar />
                <PadTop >
                    {children}  
                </PadTop>
            </Container>    
        </ThemeProvider>
    )
}

export default Layout;