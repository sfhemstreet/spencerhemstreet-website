import styled from 'styled-components';

/*****************  TRANSFORM ITEM  **************/ 
// TransformItem - takes transform prop
// TransformContainer - contains the item
// TransformAnchor - ties down AbsoluteContainer, takes 'width' and 'height'
// 
// for example use, see Carousel and Slider

export const TransformAnchor = styled.div`
    width: ${props => props.theme.width};
    height: ${props => props.theme.height};
    
    position: relative;
    perspective: 1000px;
    
    transform: translate3d(0px, 0px, 0px);
`;

export const TransformContainer = styled.div<{transform?: string}>`
    width: 100%;
    height: 100%;
    position: absolute;
    
    transform-style: preserve-3d;
    transition: transform 1.5s;

    transform: ${props => props.transform ? props.transform : 'translate3d(0px, 0px, 0px)'};
`;

export const TransformItem = styled.div<{transform: string}>`
    position: absolute;
    width: ${props => props.theme.width};
    height: ${props => props.theme.height};
    transition: transform 1s, opacity 1s;
    
    transform: ${props => props.transform};

    z-index: 100;

    top: 0;
    bottom: 0;
    left:0;
    right:0;

    display: flex;
    justify-content: center;
    align-items: flex-start;
`;