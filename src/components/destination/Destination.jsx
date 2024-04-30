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

const ContainerDestination = styled.div`
    padding: 1rem 0 7rem 0 !important;
    animation: ${Show} 2s linear;
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

const Destination = ({
    price,
    setPrice,
    places,
    setPlaces
}) => {
    function add(cost, name) {
        setPrice((price + cost));
        setPlaces([...places , name]);
         console.log(places + price);
    }
   

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
                    {randomData.map(item => {
                        return (
                            <CardTravel
                                key={item.id}
                                name={item.name}
                                url={item.url}
                                day={item.day}
                                price={item.price}
                                btntitle="add"
                                onclick={() =>
                                    add(
                                        item.price,
                                        item.name
                                    )
                                }
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
