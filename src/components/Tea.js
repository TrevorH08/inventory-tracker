import React from "react";
import PropTypes from "prop-types";

function Tea(props){
  return ( 
    <React.Fragment>
      <h3>{props.name}</h3>
      <h3>{props.price}</h3>
      <p><em>{props.description}</em></p>
      <hr/>
    </React.Fragment>
  );
}

Tea.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default Tea;