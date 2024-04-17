import React from 'react';
import Hero from '../components/hero/Hero';
import Main from '../components/main/Main';
import styled from 'styled-components';
//import PropTypes from 'prop-types'

const ContainerHome = styled.div``;

const Home = props => {
    return (
        <>
            <ContainerHome className="container-home">
                <Hero />
                <Main />
            </ContainerHome>
        </>
    );
};

Home.propTypes = {};

export default Home;
