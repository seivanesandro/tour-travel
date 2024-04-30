import React from 'react';
import data from '../../destinationdata';
import CardTravel from '../card/CardTravel';
//import PropTypes from 'prop-types'
import styled, {
    keyframes
} from 'styled-components';

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

const ContainerPromotion = styled.div`
    margin: auto auto 10rem auto;
    animation: ${Show} 2s linear;
`;

const TitlePromotion = styled.h2`
    margin: 8rem auto 6rem auto !important;
    text-align: center;
    &.promotion-title {
        text-transform: uppercase;
        color: lightblue;
        letter-spacing: 0.4rem;
    }
`;

const Promotion = () => {

   const filterDataPromotion = data.filter(
        item => parseInt(item.price) < 500
    );
    const randomDataPRomotion =
        filterDataPromotion
            .sort(() => Math.random() - 0.5)
            .slice(0, 4);
    return (
        <>
            <ContainerPromotion className="promotion">
                <TitlePromotion className="promotion-title">
                    The Best Promotion
                </TitlePromotion>
                <div className="row w-75">
                    {randomDataPRomotion.map(
                        item => {
                            return (
                                <CardTravel
                                    key={item.id}
                                    name={
                                        item.name
                                    }
                                    url={item.url}
                                    day={item.day}
                                    price={
                                        item.price
                                    }
                                    colorprice="white"
                                    backgroundprice="red"
                                    btntitle="Go"
                                />
                            );
                        }
                    )}
                </div>
            </ContainerPromotion>
        </>
    );
};

Promotion.propTypes = {};

export default Promotion;
