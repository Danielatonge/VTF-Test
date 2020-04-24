import React, { Component } from "react";

const Checkbox = ({ isSelected, onCheckboxChange }) => (
  <div className="row">
    <div className="form-check col-12 text-center">
      <label>
        <input
          type="checkbox"
          checked={isSelected}
          onChange={onCheckboxChange}
          className="form-check-input"
        />
      </label>
    </div>
  </div>
);

export default Checkbox;
