import styled, { keyframes } from 'styled-components';

const Spin = keyframes`
    0%  {
        transform: rotate(0deg);
        
    }
	100% {
        transform: rotate(360deg);
    }
`;

const Spinner = styled.div`
    width: 30px;
    height: 30px;
    margin: 100px auto;
    position: relative;
    transform-style: preserve-3d;
    animation: ${Spin} 6s linear infinite ;
`;

const ball = styled.div`
    height: 50px;
    width: 50px;
    left: 45%;
    top: 50%;
    background: rgba( 0, 255, 0, .5);
    border-radius: 20%;
    float: left;
    position: absolute;
    transform-style: preserve-3d;
`;

const ball1 = keyframes`
    50% {
        top: -100%;
        left: 200%;
        background: rgba( 127, 127, 0, .5);
    }
    100% {
        top: 50%;
        left: 100%;
        background: rgba( 0, 255, 0, .5);
        z-index: 2;
    }
`;

const ball2 = keyframes`
    50% {
        top: 200%;
        left: 200%;
        background: rgba( 0, 255, 255, .5);
    }
    100% {
        top: 100%;
        left: 50%;
        background: rgba( 0, 0, 255, .5);
        z-index: 1;
    }
`;

const ball3 = keyframes`
    50% {
        top: 200%;
        left: -100%;
        background: rgba( 255, 0, 255, .5);
    }
    100% {
        top: 50%;
        left: 0%;
        background: rgba( 255, 255, 0, .5);
        z-index: 2;
    }
`;

const ball4 = keyframes`
    50% {
        top: -100%;
        left: -100%;
        background: rgba( 255, 127, 0, .5);
    }
    100% {
        top: 0%;
        left: 50%;
        background: rgba( 255, 0, 0, .5);
        z-index: 1;
    }
`;

const Ball_1 = styled(ball)`
    background: rgba( 255, 0, 0, .5);
    top: 0;
    left: 50%;
    animation: ${ball1} 1s 0s ease infinite;
    z-index: 1;
`;

const Ball_2 = styled(ball)`
    background: rgba( 0, 255, 0, .5);
    top: 50%;
    left: 100%;
    animation: ${ball2} 1s 0s ease infinite;
    z-index: 2;
`

const Ball_3 = styled(ball)`
    background: rgba( 0, 0, 255, .5);
    top: 100%;
    left: 50%;
    animation: ${ball3} 1s 0s ease infinite;
    z-index: 1;
`;

const Ball_4 = styled(ball)`
    background: rgba( 255, 255, 0, .5);
    top: 50%;
    left: 0%;
    animation: ${ball4} 1s 0s ease infinite;
    z-index: 2;
`;


const Loading = () => {
    return (
        <Spinner>
            <Ball_1 />
            <Ball_2/>
            <Ball_3/>
            <Ball_4 />
        </Spinner>
    )
}

export default Loading;