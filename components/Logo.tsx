import styled from 'styled-components';
import Link from 'next/link'
import Tilt from 'react-tilt';

const Img = styled.img`
    border-radius: 100%;
    
    -moz-osx-font-smoothing:grayscale;
    backface-visibility:hidden;
    transform:translateZ(0);
    transition: all 0.25s ease-out;

    cursor: pointer;

    width: 100%;
    height: auto;

    :hover,:focus{
        transform:scale(1.05);
        box-shadow: 0 0 10px rgb(6, 72, 83);
    }

    :active{
       transform:scale(.90); 
    }
`;

const Logo = () => {
    return(
        <Tilt  
            options={{ max : 55 }} 
            style={{ height: 50, width: 50 }} >
                <Link href='/' >
                    <Img alt="SH" src="/images/logo.png"/> 
                </Link>
        </Tilt>
    )
}

export default Logo;