import React from 'react';
//import PropTypes from 'prop-types'
import styled, {
    keyframes
} from 'styled-components';
import ReactPlayer from 'react-player';
import videoOne from '../../assets/videoOne.mp4';
import { devices } from '../../utils/constantes';

const ShowVideo = keyframes`
    0%{
        opacity:0;
    }
    50%{
        opacity:0.5;
    }

    100%{
        opacity:1;
    }
`;

const Video = styled(ReactPlayer)`
    width: 40% !important;
    height: 50% !important;
    cursor: pointer;
    animation: ${ShowVideo} 2s linear;

    @media only screen and (${devices.portatil}) {
        width: 71% !important;
    }
    @media only screen and (${devices.tablet}) {
        width: 84% !important;
    }
    @media only screen and (${devices.iphone14}) {
        width: 84% !important;
    }
    @media only screen and (${devices.mobileG}) {
        width: 84% !important;
    }
    @media only screen and (${devices.mobileM}) {
        width: 92% !important;
    }
    @media only screen and (${devices.mobileP}) {
        width: 98% !important;
    }
`;

const CardVideo = props => {
    return (
        <>
            <Video
                url={videoOne}
                controls={true}
                volume={0}
                muted={false}
                playbackRate={1}
            />
        </>
    );
};

CardVideo.propTypes = {};

export default CardVideo;

/*
contianer video: width={410}
              height={372}
          
video: width={100%}
              height={80%}
*/
