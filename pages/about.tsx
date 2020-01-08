import styled from 'styled-components';
import { Transition } from 'react-transition-group';
import Layout from '../components/Layout';
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

    padding: 10px;

    margin-left: auto;
    margin-right: auto;
`;

const Fade = styled.div<{state: string}>`
    transition: all 0.5s ease-in-out;
    opacity: ${({ state }) => (state === "entered" ? 1 : 0)};
`;

function About(){
    
    const images = [
        {src: '/images/spencer-drinkin-thailand.png', alt:'Enjoying a drink after a meal in Bangkok'},
        {src:'/images/boulderatbeach.png', alt:'Climbing at Stinson Beach, CA'},
        {src:'/images/highplainsdrifter_2018.png', alt:'Climbing in Bishop, CA'}
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
                            <PhotoSlideShow photos={images} />
                            <P >
                                I am rock climbing (bouldering mostly), 
                                people watching on public transit, playing guitar, eating Japanese curry rice, 
                                and watching scary movies.  
                            </P>    
                        </Container>
                    </Fade>)
                }
                </Transition>
            </BlackBackground>     
        </Layout>
    )
    
}

export default About;