import React from 'react';
import data from '../../utils/data';
import CardTravel from '../card/CardTravel';
//import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components';

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

const ContainerMain = styled.div`
    padding: 5rem 0 7rem 0;
    animation: ${Show} 2s linear;
`;

const TitleMain = styled.h2`
    margin: 10rem auto 30px auto !important;
    text-align: center;
    &.main-title {
        text-transform: uppercase;
        color: lightblue;
        letter-spacing: 0.4rem;
    }
`;

const Main = props => {
    const randomData = data
        .sort(() => Math.random() - 0.5)
        .slice(0, 18);
    return (
        <>
            <ContainerMain className="main">
                <TitleMain className="main-title">
                    The Best Packages
                </TitleMain>
                <div className="row">
                    {randomData.map(item => {
                        return (
                            <CardTravel
                                key={item.id}
                                name={item.name}
                                url={item.url}
                                day={item.day}
                                price={item.price}
                                btntitle="visit"
                            />
                        );
                    })}
                </div>
            </ContainerMain>
        </>
    );
};

Main.propTypes = {};

export default Main;
