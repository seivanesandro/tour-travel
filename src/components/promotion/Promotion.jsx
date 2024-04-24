import React from 'react';
import data from '../../utils/data';
import CardTravel from '../card/CardTravel';
//import PropTypes from 'prop-types'
import styled from 'styled-components';

const ContainerPromotion = styled.div`
    margin: auto auto 10rem auto;
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

const Promotion = props => {
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
                <div className="row">
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
