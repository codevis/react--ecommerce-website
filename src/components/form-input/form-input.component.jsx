import React from 'react';

import './form-input.styles.scss';
//gets data from sign-in component
const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className='group'>
    <input className='form-input' onChange={handleChange} {...otherProps} />
    {label ? (
      <label
        className={`${
          otherProps.value.length ? 'shrink' : ''//if types the label shows
        } form-input-label`}
      >
        {label}
      </label>//otherwise null 
    ) : null}
  </div>
);

export default FormInput;
