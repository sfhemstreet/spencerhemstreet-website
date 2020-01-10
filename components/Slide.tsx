import React, { FunctionComponent, useState, useRef } from 'react';
import { ThemeProvider } from 'styled-components';

import Arrow from './Arrow';
import {TransformItem, TransformContainer, TransformAnchor} from './TransformItem';
import useSwipe from '../hooks/useSwipe';

interface SlideProps {
    width: number
    height: number
    items: React.ReactNode[] 
    isHorizontal?: boolean
    startIndex?: number
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
* @param {number} startIndex? - index of item to start slide on
*/
const Slide:FunctionComponent<SlideProps> = ({width, height, items, isHorizontal=true, startIndex=0}) => {
    // check start index is valid
    startIndex = startIndex >= 0 && startIndex < items.length ? startIndex : 0; 
    
    // Arrow visibility 
    const [isVisible, setIsVisible] = useState(false);
    // Index of slide 
    const [index, setIndex] = useState(startIndex);
    // ref to move 
    const slide = useRef<HTMLDivElement>(null);

    
    useSwipe(slide, handlePrev, handleNext);

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
                ref={touchRef}
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