import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../components/home/Home';
import Destination from '../components/destination/Destination';
import Price from '../components/price/Price';
//import PropTypes from 'prop-types'

const Pages = props => {
    return (
        <>
            <Routes>
                <Route
                    path="/"
                    and
                    element={<Home />}
                />
                <Route
                    path="/travel"
                    and
                    element={<Destination />}
                />
                <Route
                    path="/price"
                    and
                    element={<Price />}
                />
            </Routes>
        </>
    );
};

Pages.propTypes = {};

export default Pages;
