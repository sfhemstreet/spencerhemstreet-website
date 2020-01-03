import React, { FunctionComponent, useState } from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import ProjectCarousel from '../components/ProjectCarousel';
import { ProjectImages, ProjectSlides, A } from '../data/projectData';
import { KirkwoodBackground } from '../components/Backgrounds';

const Container = styled.div`
    max-width: 100%;
    max-height: 100%;
    margin: 0px;
    padding: 15px;

    display: block;
`;

const ProjectsContainer = styled(Container)`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 1rem;
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
                    <Container>
                        { isSelected && 
                            <ProjectCarousel onExit={this.closeProject} slides={ProjectSlides} currSlide={image}/>
                        }
                        <BigText>
                            <A  target='_blank' 
                                rel="noopener noreferrer" 
                                href='https://github.com/sfhemstreet'  
                            >
                                My Projects
                            </A>
                        </BigText>
                        <ProjectsContainer>{renderProjectImages}</ProjectsContainer>
                    </Container>       
                </KirkwoodBackground>
            </Layout>
        )        
    }
}

export default HomePage;