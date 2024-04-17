import React from 'react'
import data from '../../utils/data'
import CardTravel from '../card/CardTravel';
//import PropTypes from 'prop-types'

const Main = props => {
  return (
      <>
          <div className="main">
              <h4 className="main-title">
                  The Best Packages
              </h4>
              <div className="row">
                  {/*TODO: Substituir por um card component */}
                  {data.map(item => {
                      return (
                          <CardTravel 
                            name={item.name}
                            url={item.url}
                            day={item.day}
                            price={item.price}
                          />
                      );
                  })}
              </div>
          </div>
      </>
  );
}

Main.propTypes = {}

export default Main