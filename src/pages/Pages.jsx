import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../components/home/Home';
import Destination from '../components/destination/Destination';
import Price from '../components/price/Price';

const Pages = ({
    price,
    setPrice,
    places,
    setPlaces
}) => {
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
                    element={
                        <Destination
                            price={price}
                            setPrice={setPrice}
                            places={places}
                            setPlaces={setPlaces}
                        />
                    }
                />

                <Route
                    path="/price"
                    and
                    element={
                        <Price
                            price={price}
                            places={places}
                        />
                    }
                />
            </Routes>
        </>
    );
};

Pages.propTypes = {};

export default Pages;
