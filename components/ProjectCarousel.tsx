import styled from 'styled-components';
import useWindowDimensions from '../hooks/useWindowDimensions';
import Carousel from './Carousel';
import PlaceMarker from './PlaceMarker';

const Container = styled.div`
    max-width: 48rem;
    
    border-radius: 0.5rem;

    background-color: rgba(17,17,17,0.6);
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);

    overflow-x: hidden;
    overflow-y: hidden;

`;

interface ProjectCarouselProps {
    slides: React.ReactNode[] 
    currSlide: number
    onExit: () => void
}

const ProjectCarousel = ({slides, currSlide, onExit}:ProjectCarouselProps) => {
    if (typeof window !== 'undefined'){
        const { height, width } = useWindowDimensions();
        const items = slides.map(slide => slide);

        return (
            <Carousel 
                items={items}
                width={width}
                height={height}
            />
        )
    }
    else {
        return <div>Loading</div>
    }
}

export default ProjectCarousel;