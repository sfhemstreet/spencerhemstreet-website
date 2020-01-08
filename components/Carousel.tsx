import React, { FunctionComponent, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import Arrow  from './Arrow';
import {TransformItem, TransformContainer, TransformAnchor} from './TransformItem';

interface CarouselProps {
    width: number
    height: number
    items: React.ReactNode[] 
    isHorizontal?: boolean
    startIndex?: number
}

/** 
* Carousel 
* - displays items as 3D carousel
* - user clicks to go back and forward, endless loops
* - can go thru items horizontally or vertically
* 
* @param {number} width - Width of Carousel in px
* @param {number} height - Height of Carousel in px
* @param {Array<React.ReactNode>} items - ReactNodes to be displayed 
* @param {boolean} isHorizontal? - set items to move horizontally or vertically (default horizontal)
* @param {number} startIndex? - starting index of carousel
*/
const Carousel:FunctionComponent<CarouselProps> = ({width, height, items, isHorizontal=true, startIndex=0}) => {
    // Arrows   
    const [isVisible, setIsVisible] = useState(false);
    // Index
    const [index, setIndex] = useState(startIndex);

    const [x,setX] = useState(width/2);

    const rotateFn = isHorizontal ? 'rotateY' : 'rotateX';
    const theta = 360 / items.length;
    const cellSize = isHorizontal ? width : height;
    const radius = Math.round( ( cellSize / 2) / Math.tan( Math.PI / items.length ) );

    function handlePrev(){
        setIndex(index - 1);
    }

    function handleNext(){
        setIndex(index + 1);
    }

    function handleTouchStart(evt: React.TouchEvent<HTMLDivElement>){
        const newX = evt.changedTouches[0].pageX;
        setX(newX);
    }

    function handleTouchEnd(evt: React.TouchEvent<HTMLDivElement>){
        const endX = evt.changedTouches[0].pageX;
        if(endX < x - 20)
            handleNext();

        if(endX > x + 20)
            handlePrev();
    }

    return (
        <ThemeProvider 
            theme={{
                width: `${width}px`, 
                height: `${height}px`,  
                isHorizontal
            }}
        >
            <TransformAnchor 
                onMouseOver={() => setIsVisible(true)} 
                onMouseLeave={() => setIsVisible(false)}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >
                {isVisible && 
                    <>
                        <Arrow 
                            onClick={handlePrev}
                            width={width}
                            height={height}
                            direction={isHorizontal? 'left' : 'up'}
                        />
                        <Arrow 
                            onClick={handleNext}
                            width={width}
                            height={height}
                            direction={isHorizontal? 'right' : 'down'}
                        />
                    </>
                }
                <TransformContainer
                    transform={`translateZ(${(-radius)}px) ${rotateFn}(${(theta * index * -1)}deg)`}
                >
                    {items.map((item, i) => {
                        const cellAngle = theta * i;
                        const transform = `${rotateFn}(${cellAngle}deg) translateZ(${radius}px)`;
                            
                        return (
                            <TransformItem 
                                key={`${item}${i}`} 
                                transform={transform} 
                            >
                                {item}
                            </TransformItem>
                        )
                    })}
                </TransformContainer>
            </TransformAnchor>
        </ThemeProvider>
    )
}

export default Carousel;