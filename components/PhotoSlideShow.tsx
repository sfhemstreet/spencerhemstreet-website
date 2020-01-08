import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import Slide from './Slide';
import useWindowDimensions from '../hooks/useWindowDimensions';

interface PhotoProps {
    width: string
    height: string
}

const Margin = styled.div`
    margin: 15px 0px;
`;

const PhotoContainer = styled.div<PhotoProps>`
    width: ${props => props.width};
    height: ${props => props.height};

    overflow-x: hidden;
    overflow-y: hidden;
    border-radius: 10px;
`;

const Img = styled.img`
    border-radius: 10px;

    max-width: 100%;
    height: auto;
    max-height: 300px;
`;

interface PhotoPreviewProps {
    photos: {
        src: string
        alt: string
    }[]
}

const PhotoPreview: FunctionComponent<PhotoPreviewProps> = ({photos}) => {
    if (typeof window !== 'undefined'){
        const [ absoluteWidth ] = useWindowDimensions();

        const getWidthHeight = (absoluteWidth: number) => {
            if(absoluteWidth > 500)
                return {width:480, height:300};

            if(absoluteWidth > 400)
                return {width:370, height:300};

            return {width:300, height:300};
        }
        
        const {width, height} = getWidthHeight(absoluteWidth);
        const items = photos.map(photo => <Img src={photo.src} alt={photo.alt} />);

        return (
            <Margin>
                <PhotoContainer
                    width={`${width}px`}
                    height={`${height}px`}
                >
                    <Slide
                        isHorizontal={true}
                        width={width}
                        height={height}
                        items={items}
                        startIndex={1}
                    />
                </PhotoContainer>    
            </Margin>
        )
    }
    else {
        return (
            <div>Loading</div>
        )
    }
}

export default PhotoPreview;