import React from 'react';
import Hero from '../hero/Hero';
import Main from '../main/Main';
import styled from 'styled-components';
import Promotion from '../promotion/Promotion';
import Tours from '../tour/Tours';
//import PropTypes from 'prop-types'

const ContainerHome = styled.div``;

const Home = props => {
    return (
        <>
            <ContainerHome className="container-home">
                <Hero />
                <Main />
                <Tours />
                <Promotion />
            </ContainerHome>
        </>
    );
};

Home.propTypes = {};

export default Home;
