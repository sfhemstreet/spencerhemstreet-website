import styled from 'styled-components';

export const KirkwoodBackground = styled.div`
    height: 100%;
    max-height: 120vh;
    margin: 0;
    padding: 0;
	position: relative;
	background-image: linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6)),url("/images/tankkirkwoodsunset-800.png");
	background-size: cover;
	background-color: black;
	background-repeat: no-repeat;

    @media only screen and (min-width: 992px){
        background-image: linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6)),url("/images/tankkirkwoodsunset.png");
    }

    @media only screen and (min-width: 768px) and (max-width: 991px){
        background-image: linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6)),url("/images/tankkirkwoodsunset-800.png");
    }

    @media only screen and (min-width: 480px) and (max-width: 767px){
        background-image: linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6)),url("/images/tankkirkwoodsunset-550.png");
    }

    @media only screen and (min-width: 320px) and (max-width: 479px){
        background-image: linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6)),url("/images/tankkirkwoodsunset-400.png");
    }
`;

export const YosemiteBackground = styled.div`
    height: 100%;
    max-height: 100vh;
    margin: 0;
    padding: 0;
    position: relative;
    background-image: linear-gradient(rgba(19, 14, 14, 0.7),rgba(0, 0, 0, 0.6)),url("/images/yosemiteview-800.png");
    background-size: cover;
    background-color: black;
    background-repeat: no-repeat;

    @media only screen and (min-width: 992px){
        background-image: linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6)),url("/images/yosemiteview.png");
    }

    @media only screen and (min-width: 768px) and (max-width: 991px){
        background-image: linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6)),url("/images/yosemiteview-800.png");
    }

    @media only screen and (min-width: 480px) and (max-width: 767px){
        background-image: linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6)),url("/images/yosemiteview-550.png");
    }

    @media only screen and (min-width: 320px) and (max-width: 479px){
        background-image: linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6)),url("/images/yosemiteview-400.png");
    }
`;