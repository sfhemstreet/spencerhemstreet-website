import styled from "styled-components";
import { Transition } from "react-transition-group";
import Layout from "../components/Layout";
import Fade from "../components/Fade";
import PhotoSlideShow from "../components/PhotoSlideShow";
import { BlackBackground } from "../components/Backgrounds";

const Container = styled.div`
  padding-top: 15px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const P = styled.p`
  max-width: 25em;

  padding: 0px 20px;

  margin-bottom: 0;
  margin-left: auto;
  margin-right: auto;
`;

const Margin = styled.div`
  margin: 20px 0px;
`;

function About() {
  const images = [
    {
      src: "/images/spencer-drinkin-thailand.png",
      alt: "Enjoying a drink after a meal in Bangkok"
    },
    {
      src: "/images/highplainsdrifter_2018.png",
      alt: "Climbing in Bishop, CA"
    },
    { src: "/images/boulderatbeach.png", alt: "Climbing at Stinson Beach, CA" }
  ];

  return (
    <Layout>
      <BlackBackground>
        <Transition
          in={true}
          timeout={{
            appear: 120
          }}
          appear={true}
        >
          {(state: string) => (
            <Fade state={state}>
              <Container>
                <P>
                  Hello! I'm Spencer, and I am front-end developer based out of
                  San Francisco.
                </P>
                <P>
                  I have experience building single page and SSR web
                  applications, as well as cross platform mobile applications,
                  using tools such as TypeScript, React.js, Node.js, Express.js,
                  Dart, Flutter, Firebase, etc.
                </P>
                <P></P>
                <P>
                  In my free time I enjoy rock climbing, playing guitar, hiking,
                  and watching scary movies.
                </P>
                <Margin>
                  <PhotoSlideShow photos={images} />
                </Margin>
              </Container>
            </Fade>
          )}
        </Transition>
      </BlackBackground>
    </Layout>
  );
}

export default About;
