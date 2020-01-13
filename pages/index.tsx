import React from 'react';
import { Transition } from "react-transition-group"
import styled from 'styled-components';
import Layout from '../components/Layout';
import ProjectCarousel from '../components/ProjectCarousel';
import Fade from '../components/Fade';
import { ProjectImages, ProjectSlides, A } from '../data/projectData';
import { KirkwoodBackground, Container } from '../components/Backgrounds';

const ProjectsContainer = styled(Container)`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 1rem;
    max-width: 1200px;

    margin-left: auto;
    margin-right: auto;
`;

const BigText = styled.p`
    font-size: 1.5rem;
    text-align: center;
    padding: 0.5rem;
    margin: 0;
`;

interface HomePageState {
    image : number,
    isSelected : boolean,
    hasProjectExited : boolean,
    hasImagesExited : boolean,
    hasClicked : boolean
}

class HomePage extends React.Component<any, HomePageState>{
    constructor(props: any){
        super(props);
        this.state = {
            image : 0,
            isSelected : false,
            hasProjectExited : true,
            hasImagesExited : true,
            hasClicked : false
        }
    }

    onSelectImage = (index: number) => {
        this.setState({ image : index, isSelected: true, hasProjectExited: false, hasImagesExited: false });
    }
    
    closeProject = () => {
        this.setState({ isSelected : false , hasClicked: true});
    }
    
    onProjectExited = () => {
        this.setState({ hasProjectExited : true });
    }

    onImagesExited = () => {
        this.setState({ hasImagesExited : true });
    }
       
    render(){
        const {image, hasClicked, hasImagesExited, hasProjectExited, isSelected} = this.state;

        const renderProjectImages = ProjectImages.map((image, index) => {
            return (
                <div key={`image_${index}`} onClick={() => this.onSelectImage(index)}>{image}</div>
            )
        });

        return (
            <Layout>
                <KirkwoodBackground>
                    <Container >
                        {/* ProjectCarousel only appears when a project is clicked */}
                        <Transition
                            in={isSelected && hasImagesExited}
                            timeout={{
                                enter: 120,
                                exit: 500,
                            }}
                            onExited={this.onProjectExited}
                            unmountOnExit 
                            mountOnEnter
                        >
                            {(state: string) => (
                                <Fade state={state}>
                                    <ProjectCarousel 
                                        onExit={this.closeProject} 
                                        slides={ProjectSlides} 
                                        currSlide={image}
                                    />    
                                </Fade>    
                            )}
                        </Transition>
                        {/* Displays only after the ProjectCarousel has exited */}
                        <Transition
                            in={hasProjectExited}
                            timeout={{
                                appear: 150,
                                enter: 150,
                                exit: 500,
                            }}
                            onExited={this.onImagesExited}
                            appear={true}
                            unmountOnExit 
                            mountOnEnter
                        >
                            {(state: string) => (
                                <Fade state={state}>
                                    <BigText>
                                        <A  target='_blank' 
                                            rel="noopener noreferrer" 
                                            href='https://github.com/sfhemstreet'  
                                        >
                                            My Projects
                                        </A>
                                    </BigText>
                                    <ProjectsContainer>
                                        {renderProjectImages}
                                    </ProjectsContainer>
                                </Fade>    
                            )}
                        </Transition>
                    </Container>       
                </KirkwoodBackground>
            </Layout>
        )        
    }
}

export default HomePage;