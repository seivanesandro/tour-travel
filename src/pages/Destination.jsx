import React from 'react';
import data from '../destinationdata';
import CardTravel from '../components/card/CardTravel';
//import PropTypes from 'prop-types'
import styled from 'styled-components';

const ContainerDestination = styled.div`
    background: #fafafa;
    padding: 1rem 0 7rem 0 !important;
`;

const TitleDestination = styled.h2`
    margin: 5rem auto 5rem auto !important;
    text-align: center;

    &.main-title {
        text-transform: uppercase;
        color: lightblue;
        letter-spacing: 0.4rem;
    }
`;

const Destination = props => {
    const randomData = data
        .sort(() => Math.random() - 0.5)
        .slice(0, 18);
    return (
        <>
            <ContainerDestination className="main">
                <TitleDestination className="main-title">
                    Destinations
                </TitleDestination>
                <div className="row">
                    {/*TODO: Substituir por um card component */}
                    {randomData.map(item => {
                        return (
                            <CardTravel
                                key={item.id}
                                name={item.name}
                                url={item.url}
                                day={item.day}
                                price={item.price}
                                btntitle="add travel"
                            />
                        );
                    })}
                </div>
            </ContainerDestination>
        </>
    );
};

Destination.propTypes = {};

export default Destination;
