import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditTeaForm(props) {
  const { tea } = props;

  function handleEditTeaFormSubmission(event) {
    event.preventDefault();
    props.onEditTea({name: event.target.name.value, price: event.target.price.value, stock: event.target.stock.value, description: event.target.description.value, id: tea.id});
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleEditTeaFormSubmission}
        buttonText="Update Tea" />
    </React.Fragment>
  );
}

EditTeaForm.propTypes = {
  tea: PropTypes.object,
  onEditTea: PropTypes.func
};

export default EditTeaForm;