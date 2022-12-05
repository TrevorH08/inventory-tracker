import React from "react";
import whiteLotus from "./../img/whiteLotus.png";
import jasmineTea from "./../img/jasmineTea.png";

function Header(){
  return (
    <React.Fragment>
      <img src={whiteLotus} alt="An image of a White Lotus Pai Sho tile" />
      <h1>Jade Dragon Tea</h1>
      <hr/>
      <img src={jasmineTea} alt="An image of Jasmine Tea" />
    </React.Fragment>
  );
}

export default Header;