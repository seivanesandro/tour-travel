import React from 'react';
//import CardTravel from '../card/CardTravel';
//import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { NavLink } from 'react-router-dom'
import { devices } from '../../utils/constantes';

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

const PricingOne = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    gap: 3rem;
    text-align: center;
    margin: 5rem auto 15% auto;

    animation: ${Show} 1s linear;
`;

const ContainerData = styled.div`
    border: 1px solid #fafafa;
    border-radius: 1rem;

    padding: 2rem;
    background: #4d4d4d;

    display: flex;
    flex-direction: row;
    text-align: center;
    gap: 10rem;
    &:hover {
        box-shadow: 0 0 0.5rem #6dd5fa;
    }
    @media only screen and (${devices.iphone14}) {
        gap: 3rem;
        flex-direction: column;
        text-align: center;

        align-items: center;
    }

    @media only screen and (${devices.mobileG}) {
        gap: 3rem;
        flex-direction: column;
        text-align: center;

        align-items: center;
    }
    @media only screen and (${devices.mobileM}) {
        gap: 3rem;
        flex-direction: column;
        text-align: center;

        align-items: center;
    }
    @media only screen and (${devices.mobileP}) {
        gap: 3rem;
        flex-direction: column;
        text-align: center;

        align-items: center;
    }
`;

const ContainerTitle = styled.div`
    margin: 3rem auto 7rem auto;
    text-align: center;
    color: lightblue;
    font-weight: 700;
    text-shadow: 0 0 0.1rem black;
    letter-spacing: 0.3rem;
    text-transform: uppercase;
    @media only screen and (${devices.iphone14}) {
        margin: 3rem auto 5rem auto;
    }
    @media only screen and (${devices.mobileG}) {
        margin: 3rem auto 5rem auto;
    }
    @media only screen and (${devices.mobileM}) {
        margin: 3rem auto 4rem auto;
    }
    @media only screen and (${devices.mobileP}) {
        margin: 3rem auto 3rem auto;
    }
`;

const ContainerPlaces = styled.div`
    display: flex;
    flex-direction: column;
    text-align: start;
    gap: 1rem;

    @media only screen and (${devices.iphone14}) {
        text-align: center;
    }
    @media only screen and (${devices.mobileG}) {
        text-align: center;
    }
    @media only screen and (${devices.mobileM}) {
        text-align: center;
    }
    @media only screen and (${devices.mobileP}) {
        text-align: center;
    }
`;
const PlacesNames = styled.span`
    color: lightblue;
    font-size: 1.3rem;
    color: lightblue;
    font-weight: 500;
    text-shadow: 0 0 0.1rem black;
    letter-spacing: 0.3rem;
    text-transform: uppercase;
`;

const ContainerTotalPrice = styled.div`
    display: flex;
    flex-direction: column;
    text-align: end;
    @media only screen and (${devices.iphone14}) {
        text-align: center;
    }
    @media only screen and (${devices.mobileG}) {
        text-align: center;
    }
    @media only screen and (${devices.mobileM}) {
        text-align: center;
    }
    @media only screen and (${devices.mobileP}) {
        text-align: center;
    }
`;
const TotalPrices = styled.h1`
    color: lightblue;
    font-weight: 700;
    text-shadow: 0 0 0.1rem black;
    letter-spacing: 0.3rem;
    text-transform: uppercase;
`;

const Price = ({price, places}) => {

    const handleonClick = () => {
        alert(
            'Your order has been successfully processed. We will be in touch shortly to confirm your order details and arrange delivery'
        );
    }
    return (
        <>
            <PricingOne className="pricing-1">
                <ContainerTitle className="container-title">
                    <h1 className="trips">
                        Trips
                    </h1>
                </ContainerTitle>
                <ContainerData className="container-data">
                    <ContainerPlaces className="container-places">
                        <h3 className="hthree">
                            Places
                        </h3>
                        {places.map(
                            (item, price) => {
                                return (
                                    <PlacesNames className="places-name">
                                        {item}
                                    </PlacesNames>
                                );
                            }
                        )}
                    </ContainerPlaces>
                    <ContainerTotalPrice className="container-total-price">
                        <h3 className="hthree">
                            Total
                        </h3>
                        <TotalPrices>
                            {' '}
                            ${price}
                        </TotalPrices>
                    </ContainerTotalPrice>
                </ContainerData>
                <NavLink
                    
                    onClick={handleonClick}
                    to='/'
                    className="btn btn-light text-center font-weight-bold dark px-5 rounded-pill shadow"
                >
                    Order
                </NavLink>
            </PricingOne>
        </>
    );
};

Price.propTypes = {};

export default Price;
