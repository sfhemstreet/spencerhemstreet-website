import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Link from 'next/link';
import Tilt from 'react-tilt';
import Logo from './Logo';

const Container = styled.nav`
    z-index: 1; 

    transition: top 0.5s;

    position: fixed;
	top: ${props => props.theme.top};
	left: 0;
	right: 0;

    border-bottom: 0.5px solid rgb(0, 0, 0);
	box-shadow: 0 0 5px 0 black;

    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);

    width: 100%;
    height: 50px;

    background-color: rgba(0,0,0,0.7);

    display: flex;
    flex-wrap: nowrap;
    align-items: center;

    padding: 10px;
    margin: 0px;
`;

const PadLeft = styled.div`
    padding-left: 10px;
`;

const MarginLeft = styled.div`
    margin-left: auto;
    margin-right: 10px;
    padding-left: 10px;
`;

const Links = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-wrap: nowrap;
    align-items: center;

    padding: 0px 25px;
`;

const Item = styled.div`
    -moz-osx-font-smoothing:grayscale;
    backface-visibility:hidden;
    transform:translateZ(0);
    transition: all 0.25s ease-out;

    display: flex;
    flex-wrap: nowrap;
    align-items: center;

    padding: 20px;

    cursor: pointer;


    :hover,:focus{
        transform:scale(1.05);
    }

    :active{
       transform:scale(.90); 
    }
`;

const PinkHover = styled(Item)`
    :hover {
        color: hotpink;
    }
`;

const OrangeHover = styled(Item)`
    :hover {
        color: orange;
    }
`;

const NavBar = () => {

    const [prevScrollPosition, setScrollPosition] = useState(0);
    const [isHidden, setHidden]  = useState(false)

    const navbarHide = () => {
        const currentScrollPosition = window.pageYOffset;

        if(prevScrollPosition > currentScrollPosition) {
            setHidden(false);
        } 
        else if(currentScrollPosition > 45){
            setHidden(true);
        }

        setScrollPosition( currentScrollPosition );
    }

    if (typeof window !== 'undefined'){
        window.onscroll = navbarHide;    
    }

    return (
        <ThemeProvider theme={isHidden ? {top: "-70px"} : {top: "0"}}>
            <Container >
                <PadLeft>
                    <Logo />   
                </PadLeft>
                <MarginLeft>
                    <Links >   
                        {/*
                        <Link href='/'>
                            <Tilt options={{ max : 55, perspective: 55 }}>
                                Home
                            </Tilt>
                        </Link>
                        */}
                        {/*<Link href='/resume'>
                            <Tilt options={{ max : 55, perspective: 50}} >
                                Resume
                            </Tilt>
                        </Link>*/}
                        <Link href='/about'>
                            <Tilt options={{ max : 55, perspective: 75 }} >
                                <PinkHover>About</PinkHover>
                            </Tilt>
                        </Link>
                        <Link href='/contact'>
                            <Tilt options={{ max : 55, perspective: 75 }} >
                                <OrangeHover>Contact</OrangeHover> 
                            </Tilt>
                        </Link>
                    </Links>    
                </MarginLeft>  
                
            </Container>      
        </ThemeProvider>
        
    )

}

export default NavBar;