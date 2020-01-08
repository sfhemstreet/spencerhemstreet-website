import styled from 'styled-components';
import { Transition } from 'react-transition-group';
import Layout from '../components/Layout';
import Fade from '../components/Fade';
import PhotoSlideShow from '../components/PhotoSlideShow';
import { BlackBackground } from '../components/Backgrounds';

const Container = styled.div`
    padding-top: 15px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const P = styled.p` 
    max-width: 25em;

    margin-bottom: 0;
    margin-left: auto;
    margin-right: auto;
`;

function About(){
    
    const images = [
        {src: '/images/spencer-drinkin-thailand.png', alt:'Enjoying a drink after a meal in Bangkok'},
        {src:'/images/highplainsdrifter_2018.png', alt:'Climbing in Bishop, CA'},
        {src:'/images/boulderatbeach.png', alt:'Climbing at Stinson Beach, CA'},
    ];
    
    return (
        <Layout>
            <BlackBackground>
                <Transition
                    in={true}
                    timeout={{
                        appear: 150,
                    }}
                    appear={true}
                >
                {(state: string) => (
                    <Fade state={state}>
                        <Container>
                            <P>
                                Hello! I'm Spencer, and I am Front-End developer based out of San Francisco.
                            </P>
                            <P >
                                In my free time I enjoy rock climbing (bouldering mostly), 
                                playing guitar, hiking, and watching scary movies.  
                            </P>  
                            <PhotoSlideShow photos={images} />  
                        </Container>
                    </Fade>)
                }
                </Transition>
            </BlackBackground>     
        </Layout>
    )
}

export default About;