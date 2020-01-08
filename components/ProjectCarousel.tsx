import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import useWindowDimensions from '../hooks/useWindowDimensions';
import Carousel from './Carousel';
import CloseButton from './CloseButton';

const Container = styled.div`
    position: relative;
    width: 100%;

    overflow-x: hidden;
`;

const Center = styled.div`
    display: flex;
    justify-content: center;
`;

const SlideContainer = styled.div`
    
    width: ${props => props.theme.width};
    height: 100%;

    overflow-y: scroll;

    display: flex;
    justify-content: center;
    
    padding: 15px;
    margin: 25px;

    border-radius: 0.5rem;

    background-color: rgba(15,15,15,1);
    backdrop-filter: blur(5px);
`;

const PaddingTop = styled.div`
    padding-top: 30px;
`;

interface ProjectCarouselProps {
    slides: React.ReactNode[] 
    currSlide: number
    onExit: () => void
}

const ProjectCarousel = ({slides, currSlide, onExit}:ProjectCarouselProps) => {
    if (typeof window !== 'undefined'){
        const [ absoluteWidth, absoluteHeight ] = useWindowDimensions();

        const getWidth = (absoluteWidth: number) => {
            if(absoluteWidth > 800)
                return 768;
        
            if(absoluteWidth > 500)
                return 480;

            if(absoluteWidth > 400)
                return 370;
        
            if(absoluteWidth > 350)
                return 330;

            return 300;
        }
        
        const width = getWidth(absoluteWidth);

        const carouselItems = slides.map(slide => (
            <SlideContainer>
                <div>
                    <CloseButton onClick={onExit}/>  
                </div>
                <PaddingTop>
                    {slide}    
                </PaddingTop>
            </SlideContainer>));

        return (
            <ThemeProvider
                theme={{
                    width:`${absoluteWidth}px`,
                    alignItems:'flex-start'
                }}
            >
                <Container>
                    <Center>
                        <Carousel 
                            items={carouselItems}
                            width={width}
                            height={absoluteHeight}
                            startIndex={currSlide}
                        />  
                    </Center>    
                </Container>
            </ThemeProvider>
        )
    }
    else {
        return <div>Loading</div>
    }
}

export default ProjectCarousel;