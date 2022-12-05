import React from "react";
import PropTypes from "prop-types";

function Tea(props){
  return ( 
    <React.Fragment>
      <div onClick = {() => props.whenTeaClicked(props.id)}>
        <h2>{props.name}</h2>
        <h3>{props.price}</h3>
        <h3>{props.stock}oz in stock</h3>
        <p><em>{props.description}</em></p>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Tea.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  stock: PropTypes.number,
  description: PropTypes.string,
  id: PropTypes.string,
  whenTeaClicked: PropTypes.func
};

export default Tea;