import React, { Component } from "react";
import Checkbox from "./checkBox";
import Price from "./price";

class Cell extends Component {
  render() {
    const { name, isSelected, onCheckboxChange, content } = this.props;
    return (
      <td>
        <div className="row">
          <div className="col-4">
            <Checkbox
              name={name}
              isSelected={isSelected}
              onCheckboxChange={onCheckboxChange}
            />
          </div>
          <div className="col-8">
            <Price priceTrend={content} />
          </div>
        </div>
      </td>
    );
  }
}

export default Cell;
