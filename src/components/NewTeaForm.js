import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";
import { v4 } from 'uuid';

function NewTeaForm(props){
  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleNewTeaFormSubmission}
        buttonText="Add" />
    </React.Fragment>
  );

  function handleNewTeaFormSubmission(event) {
    event.preventDefault();
    props.onNewTeaCreation({
      name: event.target.name.value,
      price: event.target.price.value,
      stock: event.target.stock.value,
      description: event.target.description.value,
      id: v4()
    });
  }
}

NewTeaForm.propTypes = {
  onNewTeaCreation: PropTypes.func
};

export default NewTeaForm;