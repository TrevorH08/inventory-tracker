import React from "react";

function Tea(){
  const name = "Earl Grey";
  const name2 = "Passion";
  const price = "$30/lbs";
  const description = "A nice, strong tea that has hints of lavender in it.";
  const description2 = "insert description";
  return ( 
    <React.Fragment>
      <h3>{name}</h3>
      <h3>{price}</h3>
      <p><em>{description}</em></p>
      <h3>{name2}</h3>
      <h3>{price}</h3>
      <p><em>{description2}</em></p>
      <hr/>
    </React.Fragment>
  );
}

export default Tea;