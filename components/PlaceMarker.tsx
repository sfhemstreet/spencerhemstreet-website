import styled from 'styled-components';

const ColoredDot = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 3px;
    background-color: darkcyan;
`;

const EmptyDot = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 3px;
    background-color: darkgrey;
`;

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    max-width: 4rem;
`;

interface PlaceMarkerProps {
    dot: number
    totalDots: number
    onClick: (i: number) => void
}

const PlaceMarker = ({dot, totalDots, onClick}: PlaceMarkerProps) => {

    let dotArray = new Array(totalDots).fill(false);
    dotArray[dot] = true;

    const renderDots = dotArray.map((_,i) => {
        if(dotArray[i]){
            return ( 
                <ColoredDot key={`PlaceMarker${i}`} onClick={() => onClick(i)} />
            )
        }
        else{
            return (
                <EmptyDot key={`PlaceMarker${i}`} onClick={() => onClick(i)} />
            )
        }
    })
    
    return(
        <Container>
            {renderDots}
        </Container>
    )

}

export default PlaceMarker;