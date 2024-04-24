import React from 'react';
import data from '../../utils/data';
import CardTravel from '../card/CardTravel';
//import PropTypes from 'prop-types'
import styled from 'styled-components';

const ContainerMain = styled.div``;

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
        .slice(0.3);
    return (
        <>
            <ContainerMain className="main">
                <TitleMain className="main-title">
                    The Best Packages
                </TitleMain>
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
