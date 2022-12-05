import React from "react";
import PropTypes from "prop-types";

function Tea(props){
  // const stock = props.stock;
  
  // function reduceStock(stock){
  //   props.stock - 1;
  // };
  return ( 
    <React.Fragment>
      <div onClick = {() => props.whenTeaClicked(props.id)}>
        <h2>{props.name}</h2>
        <h3>{props.price}</h3>
        <h3>{props.stock}oz in stock</h3>
        <p><em>{props.description}</em></p>
        {/* <button onClick={this.handleSellingStock}>Sell 1oz</button> */}
        <hr/>
      </div>
    </React.Fragment>
  );
}

Tea.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  stock: PropTypes.int,
  description: PropTypes.string,
  id: PropTypes.string,
  whenTeaClicked: PropTypes.func
};

export default Tea;