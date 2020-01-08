import React, { FunctionComponent, useState, useRef } from 'react';
import { ThemeProvider } from 'styled-components';

import Arrow from './Arrow';
import {TransformItem, TransformContainer, TransformAnchor} from './TransformItem';

interface SlideProps {
    width: number
    height: number
    items: React.ReactNode[] 
    isHorizontal?: boolean
}

/** 
* Slide  
* - displays items as slideshow
* - user clicks to go back and forward, endless loops
* - can go thru items horizontally or vertically
* 
* @param {number} width - Width of Slide in px
* @param {number} height - Height of Slide in px
* @param {Array<React.ReactNode>} items - ReactNodes to be displayed 
* @param {boolean} isHorizontal? - set items to move horizontally or vertically (default horizontal)
*/
const Slide:FunctionComponent<SlideProps> = ({width, height, items, isHorizontal=true}) => {
    // Arrows   
    const [isVisible, setIsVisible] = useState(false);
    // Index
    const [index, setIndex] = useState(0);
    // ref to move 
    const slide = useRef<HTMLDivElement>(null);
    // x for touch calculations
    const [x,setX] = useState(width/2);

    const translateFn = isHorizontal ? 'translateX' : 'translateY';
    const cellSize = isHorizontal ? width : height;

    function rotateSlide() {
        // calcuate current position and max position
        const currPos = cellSize * index;
        const max = items.length * cellSize;
        // stay within max then make it opposite
        // - JS handles negative mod poorly, fixed by adding max, then % by max again 
        const position = (((currPos % max) + max) % max) * -1;
       
        if(slide && slide.current){
            slide.current.style.transform = `${translateFn}(${position}px)`;
        }
    }

    function handlePrev() {
        setIndex(index - 1);
        rotateSlide();
    };

    function handleNext() {
        setIndex(index + 1);
        rotateSlide();
    };

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

    rotateSlide();

    return (
        <ThemeProvider 
            theme={{
                width: `${width}px`, 
                height: `${height}px`, 
            }} 
        >
            <TransformAnchor 
                onMouseEnter={() => setIsVisible(true)} 
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
                    ref={slide}
                >
                    {items.map((item, i) => {
                        const cellPosition = cellSize * i;
                        const transform = `${translateFn}(${cellPosition}px) `;
                            
                        return (
                            <TransformItem 
                                key={`${item}${i}`} 
                                transform={transform} 
                            >
                                { item }
                            </TransformItem>
                        )
                    })}
                </TransformContainer>
            </TransformAnchor>
        </ThemeProvider>
    )
}

export default Slide;