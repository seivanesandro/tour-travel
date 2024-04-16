import React from 'react';
import styled, {
    keyframes
} from 'styled-components';
import bgimage from '../imgs/bgvacationwithfilter.jpg';
import { devices } from '../utils/constantes';
//import PropTypes from 'prop-types'

const Show = keyframes`
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
const ContainerHero = styled.div`
    /*TODO: Trick to put image background */
    height: 87vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${bgimage}) !important;
    object-fit: cover !important;
    background-repeat: no-repeat !important;
    background-position: center !important;
    background-size: cover !important;

    border: 1px solid blue;
`;
const HeroBanner = styled('div')`
    text-align: center;
    padding: 0 3rem;
`;
const HeroTitleStyled = styled.h1`
    text-transform: uppercase;
    text-shadow: 0 0 0.4rem black;
    font-weight: 600;
    animation: ${Show} 3s linear;
    font-size: 3rem;
    letter-spacing: 0.5rem;

    @media only screen and (${devices.iphone14}) {
        font-size: 1.5rem;
    }
    @media only screen and (${devices.mobileG}) {
        font-size: 1.5rem;
    }
    @media only screen and (${devices.mobileM}) {
        font-size: 1.5rem;
        letter-spacing: 0.2rem;
    }
    @media only screen and (${devices.mobileP}) {
        font-size: 1.5rem;
        letter-spacing: 0.1rem;
    }
`;
const HeroTextStyled = styled.p`
    max-width: 35rem;
    margin: 3rem auto 3rem auto;
    font-size: 1.3rem;
    text-shadow: 0 0 0.4rem black;
    font-weight: 600;
    animation: ${Show} 2s linear;
    letter-spacing: 0.2rem;
    @media only screen and (${devices.iphone14}) {
        font-size: 1.1rem;
        letter-spacing: 0.2rem;
    }
    @media only screen and (${devices.mobileG}) {
        font-size: 1.1rem;
        letter-spacing: 0.2rem;
    }
    @media only screen and (${devices.mobileM}) {
        font-size: 1.1rem;
        letter-spacing: 0.2rem;
    }
    @media only screen and (${devices.mobileP}) {
        font-size: 1.1rem;
        letter-spacing: 0.2rem;
    }
`;
const HeroButtonStyle = styled.button`
    font-weight: 600;
    font-size: 1.4rem;
    text-decoration: none;
    transition: 0.2s ease-in !important;
    &:hover {
        background: #007bff;
        color: #fff;
        box-shadow: 0 0 0.5rem #007bff;
        transition: 0.2s ease-in !important;
    }
`;

const Hero = props => {
    return (
        <>
            <header className="header-hero">
                <ContainerHero className="hero">
                    <HeroBanner className="hero-banner">
                        <HeroTitleStyled className="hero-title h1">
                            travel & tours
                        </HeroTitleStyled>
                        <HeroTextStyled className="hero-text">
                            “Viajar é a melhor
                            forma de se perder e
                            de se encontrar ao
                            mesmo tempo”
                        </HeroTextStyled>
                        <HeroButtonStyle className="hero-btn btn btn-light font-weight-bold shadow px-5 rounded-pill shadow">
                            Search
                        </HeroButtonStyle>
                    </HeroBanner>
                </ContainerHero>
            </header>
        </>
    );
};

Hero.propTypes = {};

export default Hero;
