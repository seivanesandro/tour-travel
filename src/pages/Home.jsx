import React from 'react';
import Hero from './Hero';
import styled from 'styled-components';
//import PropTypes from 'prop-types'

const ContainerHome = styled.div``;

const Home = props => {
    return (
        <>
            <ContainerHome className="container-home">
                <Hero />
            </ContainerHome>
        </>
    );
};

Home.propTypes = {};

export default Home;
