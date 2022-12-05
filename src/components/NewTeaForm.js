import React from "react";
import PropTypes from "prop-types";
import { v4 } from 'uuid';

function NewTeaForm(props){
  return (
    <React.Fragment>
      <form onSubmit={handleNewTeaFormSubmission}>
        <input
          type='text'
          name='name'
          placeholder='Tea Strain' />
        <input
          type='text'
          name='price'
          placeholder='Price' />
        <input
          type='number'
          name='stock'
          placeholder='Amount in Stock' />
        <textarea
          name='description'
          placeholder='Describe this strain of tea.' />
        <button type='submit'>Add</button>
      </form>
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