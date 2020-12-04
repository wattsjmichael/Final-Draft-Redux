import React from "react";
import PropTypes from "prop-types";

function Keg(props){
    
  return (
    <React.Fragment>
      <div onClick= {() => props.whenKegClicked(props.id)}>
      <h2>{props.name} Made By {props.brewery}</h2>
      <p>abv {props.abv}</p>
      <h3>price {props.price}</h3>
      <p>{props.pintsLeft} total pints left</p> {/* Make this a percentage */}
      <hr/>
      </div>
    </React.Fragment>
  )
}

Keg.propTypes={
  name: PropTypes.string.isRequired,
  brewery: PropTypes.string.isRequired,
  abv: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  pintsLeft: PropTypes.string.isRequired,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func
};

export default Keg;