import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import useWindowDimensions from '../hooks/useWindowDimensions';
import Carousel from './Carousel';
import CloseButton from './CloseButton';
import Loading from './Loading';

const Container = styled.div`
     position: relative;
    overflow-x: hidden;
    min-height: 850px;
    width: 100%;
`;

const Center = styled.div`
    display: flex;
    justify-content: center;

    
`;

const SlideContainer = styled.div`
    
    width: ${props => props.theme.width};

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

        const getWidthHeight = (absoluteWidth: number) => {
            if(absoluteWidth > 985)
                return {width: 768, height: 550};

            if(absoluteWidth > 897)
                return {width: 668, height: 600};
        
            if(absoluteWidth > 725)
                return {width: 480, height: 600};

            if(absoluteWidth > 400)
                return {width: 370, height: 600};
        
            if(absoluteWidth > 350)
                return {width: 330, height: 600};

            return {width: 300, height: 600};
        }
        
        const {width, height} = getWidthHeight(absoluteWidth);

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
                            height={height}
                            startIndex={currSlide}
                        />  
                    </Center>    
                </Container>
            </ThemeProvider>
        )
    }
    else {
        return (
            <Container>
                    <Center>
                        <Loading />
                    </Center>    
            </Container>
        )
    }
}

export default ProjectCarousel;