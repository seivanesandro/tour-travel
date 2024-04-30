import React from 'react';
import styled, {
    keyframes
} from 'styled-components';
import bgimage from '../../imgs/bgvacationwithfilter.jpg';
import { devices } from '../../utils/constantes';
import { NavLink } from 'react-router-dom';
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
    max-width: 100%;
    height: 99vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${bgimage}) !important;
    object-fit: cover !important;
    background-repeat: no-repeat !important;
    background-position: center !important;
    background-size: cover !important;
    width: 105%;
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
const HeroButtonStyle = styled(NavLink)`
    transition: 0.2s ease-in !important;
    text-align: center;
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

                        {/*FIXME: fix button to navigate */}
                        <HeroButtonStyle
                            to="/travel"
                            className="hero-btn btn btn-light text-center font-weight-bold dark px-5 rounded-pill shadow"
                            active={true}
                        >
                            search
                        </HeroButtonStyle>
                    </HeroBanner>
                </ContainerHero>
            </header>
        </>
    );
};

Hero.propTypes = {};

export default Hero;
