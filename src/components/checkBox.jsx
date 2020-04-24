import React from "react";

const Checkbox = ({ name, isSelected = false, onCheckboxChange }) => (
  <div className="row">
    <div className="form-check col-12 text-center">
      <input
        type="checkbox"
        name={name}
        checked={isSelected}
        onChange={onCheckboxChange}
        className="form-check-input"
      />
    </div>
  </div>
);

export default Checkbox;
