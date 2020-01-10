import styled,  {keyframes} from 'styled-components';

const Spin = keyframes`
    0%  {transform: rotate(0deg);}
	100% {transform: rotate(180deg);}
`;

const Close = styled.div`
    position: absolute;
    margin-top: 0;
    margin-right: 0;
    width: 30px;
    height: 30px;
    color: grey;

    animation-name: ${Spin};
    animation-duration: 1s;

    cursor: pointer;

    :before {
        content: '';
        position: absolute;
        top: 13px;
        width: 30px;
        height: 5px;
        border-radius: 8px;
        background-color: currentColor;
        -webkit-transform: rotate(-45deg);
                transform: rotate(-45deg);
    }

    :after {
        content: '';
        position: absolute;
        top: 13px;
        width: 30px;
        height: 5px;
        border-radius: 8px;
        background-color: currentColor;
        -webkit-transform: rotate(45deg);
                transform: rotate(45deg);
    }

    :hover {
        color: red;
    }
`;

interface CloseButtonProps {
    onClick: () => void
}

const CloseButton = ({onClick}:CloseButtonProps) => <Close onClick={onClick} onTouchStart={onClick}/>

export default CloseButton;