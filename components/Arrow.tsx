import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

export const ArrowStrip = styled.div`
    position: absolute;
    top: ${props => props.theme.goesForward? (props.theme.isHorizontal? '0px' : `${(props.theme.height - 45)}px`) : '0px'};
    left: ${props => props.theme.goesForward? (props.theme.isHorizontal? `${(props.theme.width - 45)}px` : '0px') : '0px'};

    width: ${props => props.theme.isHorizontal? '45px' : `${props.theme.width}px` }; 
    height: ${props => props.theme.isHorizontal? `${props.theme.height}px` : '45px' }; 

    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.2s all ease-in-out;

    z-index: 200;

    :hover {
        background-color: rgba(0,0,0,0.1);
    }
`;

export const ArrowPointer = styled.div`
    width: 20px;
    height: 20px;
    
    border-left: ${props => props.theme.goesForward? 'none' : '6px rgba(112, 112, 112, 0.5) solid'}; 

    border-top:  ${props => 
        props.theme.isHorizontal? 
            (props.theme.goesForward? '6px rgba(112, 112, 112, 0.5) solid' : 'none') : (props.theme.goesForward? 'none' : '6px rgba(112, 112, 112, 0.5) solid')}; 

    border-right: ${props => props.theme.goesForward? '6px rgba(112, 112, 112, 0.5) solid' : 'none'};  

    border-bottom: ${props => 
        props.theme.isHorizontal? 
            (props.theme.goesForward? 'none' : '6px rgba(112, 112, 112, 0.5) solid') : (props.theme.goesForward? '6px rgba(112, 112, 112, 0.5) solid' : 'none')};        
    
    transform: rotate(45deg);
    border-radius: 2px;
    margin: 10px;
   
    transition: 0.6s all ease-in-out;
    
    ${ArrowStrip}:hover & {
        border-left-color: grey;
        border-top-color: grey;
        border-right-color: grey;
        border-bottom-color: grey;
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
                goesForward
            }}
        >
            <ArrowStrip onClick={onClick}>
                <ArrowPointer/>
            </ArrowStrip>
        </ThemeProvider>
    )
}

export default Arrow;