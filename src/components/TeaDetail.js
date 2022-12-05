import React from "react";
import PropTypes from "prop-types";

function TeaDetail(props){
  const { tea } = props;

  return (
    <React.Fragment>
      <h1>Tea Details</h1>
      <h2>{tea.name}</h2>
      <h3>{tea.price}</h3>
      <h3>{tea.stock}lbs in stock</h3>
      <p><em>{tea.description}</em></p>
      <button onClick={ props.onClickingEdit }>Update Tea</button>
      <hr/>
    </React.Fragment>
  );
}

TeaDetail.propTypes = {
  tea: PropTypes.object,
  onClickingEdit: PropTypes.func
};

export default TeaDetail;