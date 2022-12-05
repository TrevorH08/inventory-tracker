import React from "react";
import Tea from "./Tea";
import PropTypes from "prop-types";

// const mainTeaList = [
//   {
//     name: 'Earl Grey',
//     price: '$30/lbs',
//     description: 'A nice, strong tea that has hints of lavender in it.'
//   },
//   {
//     name: 'Passion',
//     price: '$25/lbs',
//     description: 'insert description'
//   },
//   {
//     name: 'Jasmine',
//     price: '3 Silver/lbs',
//     description: 'Youre looking at the rare white dragon bush. Its leaves make a tea so delicious its heartbreaking! That, or its the white jade bush, which is poisonous.'
//   }
// ];

function TeaList(props){
  return (
    <React.Fragment>
      <hr/>
      {props.teaList.map((tea) =>
        <Tea 
          whenTeaClicked = { props.onTeaSelection }
          name={tea.name}
          price={tea.price}
          description={tea.description}
          key={tea.id}/>
      )}
    </React.Fragment>
  );
}

TeaList.propTypes = {
  teaList: PropTypes.array,
  onTeaSelection: PropTypes.func
};

export default TeaList;