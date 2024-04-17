import React from 'react'
import PropTypes from 'prop-types'

const CardTravel = ({name, day, url, price}) => {
  return (
      <>
          <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card-body">
                  <h5 className="card-title">
                      {name}
                  </h5>
              </div>
              <img
                  src={url}
                  alt={name}
                  title={name}
                  style={{width:'27rem', height:'23rem'}}
              />
              <button className="btn-">
                  Days: {day} price:{' '}$
                  {price}
              </button>

              <button className="hero-btn btn-2">
                  visit
              </button>
          </div>
      </>
  );
}

CardTravel.propTypes = {
    name: PropTypes.string.isRequired,
    day: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
};
CardTravel.defaultProps = {
    name: 'countrie name',
    day: 0,
    url: 'photo link',
    price: 'any $'
};


export default CardTravel