import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({ label, checkValue, toggleCheckbox }) => (
  <div className="checkbox">
    <label htmlFor={label}>
      {label}
      <input type="checkbox" checked={checkValue} onChange={toggleCheckbox} id={label} />
    </label>
  </div>
);

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  toggleCheckbox: PropTypes.func.isRequired,
  checkValue: PropTypes.bool.isRequired,
};

export default Checkbox;
