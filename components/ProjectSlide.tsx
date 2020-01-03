import styled from 'styled-components';
import { FunctionComponent } from 'react';

import PlaceMarker from './PlaceMarker';

const Container = styled.div`
    max-width: 48rem;
    border-radius: 0.5rem;

    padding: 10px;

    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    background-color: #111;
`;

interface ProjectSlideProps {
    onExit: () => void
    onChangeSlide: (index: number) => void
    index: number
    numOfProjects: number
}

const ProjectSlide:FunctionComponent<ProjectSlideProps> = ({onExit, onChangeSlide, index, numOfProjects, children}) => {
    return (
        <Container onClick={onExit}>
            {children}
            <PlaceMarker dot={index} totalDots={numOfProjects} onClick={onChangeSlide}/>
        </Container>
    )
}

export default ProjectSlide;