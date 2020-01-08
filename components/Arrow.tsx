import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

export const ArrowStrip = styled.div`
    position: absolute;
    top: ${props => props.theme.goesForward? (props.theme.isHorizontal? `${(props.theme.height * 0.25)}px` : `${(props.theme.height - 45)}px`) : `${(props.theme.height * 0.25)}px`};
    left: ${props => props.theme.goesForward? (props.theme.isHorizontal? `${(props.theme.width - 45)}px` : '0px') : '0px'};

    width: ${props => props.theme.isHorizontal? '45px' : `${props.theme.width}px` }; 
    height: ${props => props.theme.isHorizontal? `${props.theme.height * 0.5}px` : '45px' }; 

    border-radius: 10px;

    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.2s all ease-in-out;

    z-index: 200;

    cursor: pointer;

    :hover {
        background-color: ${props => props.theme.backgroundColor};
        backdrop-filter: blur(5px);
    }
`;

export const ArrowPointer = styled.div`
    width: 20px;
    height: 20px;
    
    border-left: ${props => props.theme.goesForward? 'none' : props.theme.arrowColor}; 

    border-top:  ${props => 
        props.theme.isHorizontal? 
            (props.theme.goesForward? props.theme.arrowColor : 'none') : (props.theme.goesForward? 'none' : props.theme.arrowColor)}; 

    border-right: ${props => props.theme.goesForward? props.theme.arrowColor : 'none'};  

    border-bottom: ${props => 
        props.theme.isHorizontal? 
            (props.theme.goesForward? 'none' : props.theme.arrowColor) : (props.theme.goesForward? props.theme.arrowColor : 'none')};        
    
    transform: rotate(45deg);
    border-radius: 2px;
    margin: 10px;
   
    transition: 0.6s all ease-in-out;
    
    ${ArrowStrip}:hover & {
        border-left-color: ${props => props.theme.hoverArrowColor};
        border-top-color: ${props => props.theme.hoverArrowColor};
        border-right-color: ${props => props.theme.hoverArrowColor};
        border-bottom-color: ${props => props.theme.hoverArrowColor};
    }
`;

interface ArrowProps {
    width: number
    height: number
    onClick?: () => void
    direction?: string
}

/**
 * Arrrow - displays opaque box with arrow inside
 * - arrow can point left, down, up, or right 
 * 
 * @param {number} width - width of parent in px
 * @param {number} height - height of parent in px
 * @param {function} onClick - function to execute when clicked
 * @param {string} direction - left, right, up or down. Default = right
 */
const Arrow = ({width, height, onClick, direction='right'}:ArrowProps) => {

    if(direction !== 'right' && direction !== 'left' && direction !== 'up' && direction !== 'down'){
        direction = 'right';
    }

    const isHorizontal = (direction === 'right' || direction === 'left');
    const goesForward = (direction === 'right' || direction === 'down');

    return (
        <ThemeProvider
            theme={{
                width,
                height,
                isHorizontal,
                goesForward,
                arrowColor: '6px rgba(250, 250, 250, 0.7) solid',
                hoverArrowColor: 'purple',
                backgroundColor: 'rgba(0,0,0,0.3)'
            }}
        >
            <ArrowStrip onClick={onClick}>
                <ArrowPointer/>
            </ArrowStrip>
        </ThemeProvider>
    )
}

export default Arrow;