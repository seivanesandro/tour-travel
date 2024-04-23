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
    z-index: 100 !important;
`;

const ContainerImg = styled.img`
    width: 250px;
    height: 250px;
    opacity: 1 !important;
    border-radius: 6%;
    border: 0.1rem solid #fafafa;
    object-fit: cover !important;
    background-repeat: no-repeat !important;
    background-position: center !important;
    background-size: cover !important;
    z-index: 99 !important;

    &:hover {
        box-shadow: 0 0 0.4rem #6dd5fa;
        opacity: 0.8 !important;
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
    color: ${({colorPrice}) => colorPrice};
    background: ${({backgroundPrice}) => backgroundPrice};
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
    opacity: 1;
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
    colorPrice,
    backgroundPrice
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
                        colorPrice={colorPrice}
                        backgroundPrice={
                            backgroundPrice
                        }
                        disable
                    >
                        Days: {day} price: $
                        {price}
                    </ContainerPrice>

                    <ContainerBtn className="hero-btn btn-2">
                        buy
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
    colorPrice: PropTypes.string.isRequired,
    backgroundPrice: PropTypes.string.isRequired
};
CardTravel.defaultProps = {
    name: 'countrie name',
    day: 0,
    url: 'photo link',
    price: 'any $',
    colorPrice: '#FAFAFA',
    backgroundPrice: 'transparent'
};

export default CardTravel;
