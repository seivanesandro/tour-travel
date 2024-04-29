import React from 'react';
//import PropTypes from 'prop-types';
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
    //animation: ${Show} 2s linear;
`;

const Price = props => {
    return (
        <>
            <div>under construtor</div>
        </>
    );
};

Price.propTypes = {};

export default Price;
