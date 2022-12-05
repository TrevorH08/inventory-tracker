import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
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
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;