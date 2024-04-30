import React from 'react';
//import PropTypes from 'prop-types'
import styled, {
    keyframes
} from 'styled-components';
import CardVideo from '../video/CardVideo';
import { devices } from '../../utils/constantes';
import { NavLink } from 'react-router-dom';

const ShowTour = keyframes`
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
const ContainerTour = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8rem;
    margin: 0 auto 3rem auto;
    padding: 8rem 0;
    background: #fafafa;
    color: rgb(61, 61, 61);

    width: 100% !important;
    max-width: 500%;
    @media only screen and (${devices.tablet}) {
        gap: 7rem;
    }
    @media only screen and (${devices.iphone14}) {
        gap: 7rem;
    }
    @media only screen and (${devices.mobileG}) {
        gap: 7rem;
    }
    @media only screen and (${devices.mobileM}) {
        gap: 7rem;
    }
    @media only screen and (${devices.mobileP}) {
        gap: 7rem;
    }
`;
const ContainerTourTitle = styled.h2`
    text-align: center;
    &.title-tour {
        text-transform: uppercase;
        color: lightblue;
        letter-spacing: 0.4rem;
    }
`;
const ContainerTourText = styled.p`
    width: 61rem;
    text-align: justify;
    font-size: 1rem;
    color: rgb(61, 61, 61);
    font-weight: 600;
    letter-spacing: 0.2rem;
    line-height: 1.7;

    @media only screen and (${devices.portatilL}) {
        width: 40rem;
    }
    @media only screen and (${devices.portatil}) {
        width: 51rem;
    }
    @media only screen and (${devices.tablet}) {
        width: 41rem;
    }
    @media only screen and (${devices.iphone14}) {
        width: 22rem;
        letter-spacing: 0.1rem;
        font-size: 0.9rem;
    }
    @media only screen and (${devices.mobileG}) {
        width: 22rem;
        letter-spacing: 0.1rem;
        font-size: 0.9rem;
    }
    @media only screen and (${devices.mobileM}) {
        width: 21rem;
        letter-spacing: 0.1rem;
        font-size: 0.9rem;
    }
    @media only screen and (${devices.mobileP}) {
        width: 17rem;
        letter-spacing: 0.1rem;
        font-size: 0.9rem;
    }
`;
const ContainerRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    animation: ${ShowTour} 2s linear;

    @media only screen and (${devices.portatil}) {
        flex-direction: column;
        gap: 3rem;
    }
    @media only screen and (${devices.tablet}) {
        flex-direction: column;
    }
    @media only screen and (${devices.iphone14}) {
        flex-direction: column;
    }
    @media only screen and (${devices.mobileG}) {
        flex-direction: column;
    }
    @media only screen and (${devices.mobileM}) {
        flex-direction: column;
    }
    @media only screen and (${devices.mobileP}) {
        flex-direction: column;
    }
`;
const ContainerDescription = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &.container-description {
        animation: ${ShowTour} 2s linear;
    }
`;
const ContainerBtn = styled(NavLink)`
    font-weight: 600;
    font-size: 1.2rem;
    background: rgb(61, 61, 61);
    color: #fff;
    padding: 0.5rem 7rem 0.5rem 7rem;
    border: 1px solid rgb(61, 61, 61);
    border-radius: 6rem;

    margin: 2rem 0 0 0;
    text-shadow: 0 0 0.1rem black;
    opacity: 1.1;
    z-index: 101 !important;
    &:hover {
        text-shadow: none;
        font-weight: none;
        border: 1px solid rgb(61, 61, 61);
        background: #fafafa;
        color: rgb(61, 61, 61);
    }
`;

const Tours = props => {
    return (
        <>
            <ContainerTour className="container-tour">
                <ContainerTourTitle className="title-tour">
                    Tour Video{' '}
                </ContainerTourTitle>
                <ContainerRow className="container-row">
                    <CardVideo />
                    <ContainerDescription className="container-description">
                        <ContainerTourText className="tour-text">
                            A tour, also known as
                            a sightseeing tour or
                            guided tour, is an
                            organized activity
                            that takes
                            participants to one or
                            more places of
                            interest, usually with
                            the aim of introducing
                            the history, culture,
                            or other relevant
                            aspects of the place.
                            Tours can be taken on
                            foot, by bicycle, by
                            bus, by boat, or even
                            by other means of
                            transport, such as
                            cable cars or trains.
                            Tours can be a great
                            way to explore new
                            places, learn about
                            different cultures and
                            have memorable
                            experiences. By
                            choosing a tour
                            carefully, you can
                            ensure you have a
                            positive and enriching
                            experience.
                        </ContainerTourText>
                        <ContainerBtn
                            className="hero-btn btn-2"
                            to="/travel"
                        >
                            <span>visit</span>
                        </ContainerBtn>
                    </ContainerDescription>
                </ContainerRow>
            </ContainerTour>
        </>
    );
};

Tours.propTypes = {};

export default Tours;
