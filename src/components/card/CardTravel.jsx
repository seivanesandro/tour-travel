import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ColLgFour = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: 2rem auto;
    width: 23rem;
    z-index: 0 !important;
`;

const ContainerCardBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    gap: 0.2rem;
    cursor: pointer;
    opacity: 0.8 !important;
    z-index: 100 !important;

    &:hover {
        opacity: 1.1 !important;
        transform: scale(1.1);
    }
`;

const ContainerImg = styled.img`
    width: 250px;
    height: 250px;
    opacity: 0.8 !important;
    border-radius: 6%;
    border: 0.1rem solid #fafafa;
    object-fit: cover !important;
    background-repeat: no-repeat !important;
    background-position: center !important;
    background-size: cover !important;
    z-index: 99 !important;

    &:hover {
        box-shadow: 0 0 0.4rem #6dd5fa;
        opacity: 1.1 !important;
        cursor: pointer;
    }
`;

const ContainerCardTitle = styled.div`
    text-transform: uppercase;
    color: #6dd5fa;
    font-size: 1.3rem;
    font-weight: 700;
    text-shadow: 0 0 0.1rem black;
    letter-spacing: 0.3rem;
    opacity: 1;
    z-index: 101 !important;
`;

const ContainerPrice = styled.button`
    background: transparent;
    border: none;
    font-size: 1.3rem;
    color: ${({ colorprice }) => colorprice};
    background: ${({ backgroundprice }) =>
        backgroundprice};
    text-transform: uppercase;
    text-shadow: 0 0 0.1rem black;
    cursor: none;
    opacity: 1;
    z-index: 101 !important;
`;
const ContainerBtn = styled.button`
    font-weight: 600;
    background: transparent;
    color: #fff;
    padding: 0 3rem 0 3rem;
    border: 1px solid #fafafa;
    border-radius: 6rem;
    margin: 2rem 0 0 0;
    text-shadow: 0 0 0.1rem black;
    opacity: 1.1;
    z-index: 101 !important;
    &:hover {
        text-shadow: none;
        font-weight: none;
        border: 1px solid transparent;
        background: #fafafa;
        color: rgb(61, 61, 61);
    }
`;

const CardTravel = ({
    name,
    day,
    url,
    price,
    colorprice,
    backgroundprice,
    btntitle
}) => {
    return (
        <>
            <ColLgFour className="col-lg-4 col-md-6 col-sm-12">
                <ContainerCardBody className="card-body">
                    <ContainerCardTitle className="card-title">
                        {name}
                    </ContainerCardTitle>
                    <ContainerPrice
                        className="price"
                        colorprice={colorprice}
                        backgroundprice={
                            backgroundprice
                        }
                        disable="true"
                    >
                        Days: {day} price: $
                        {price}
                    </ContainerPrice>
                    {/* FIXME: fix to navLink root to page travel */}
                    <ContainerBtn
                        className="hero-btn btn-2"
                        to="/travel"
                    >
                        <span>{btntitle}</span>
                    </ContainerBtn>
                </ContainerCardBody>
                <ContainerImg
                    className="container-image"
                    src={url}
                    alt={name}
                    title={name}
                />
            </ColLgFour>
        </>
    );
};

CardTravel.propTypes = {
    name: PropTypes.string.isRequired,
    day: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    colorprice: PropTypes.string.isRequired,
    backgroundprice: PropTypes.string.isRequired,
    btntitle: PropTypes.string.isRequired
};
CardTravel.defaultProps = {
    name: 'countrie name',
    day: 0,
    url: 'photo link',
    price: 'any $',
    colorprice: '#FAFAFA',
    backgroundprice: 'transparent',
    btntitle: 'buy'
};

export default CardTravel;
