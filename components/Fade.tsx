import styled from 'styled-components';

const Fade = styled.div<{state: string}>`
    transition: all 0.5s ease-in-out;
    opacity: ${({ state }) => (state === "entered" ? 1 : 0)};
`;

export default Fade;