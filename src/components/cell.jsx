import React, { Component } from "react";
import Checkbox from "./checkBox";
import Price from "./price";

class Cell extends Component {
  render() {
    return (
      <td>
        <div className="row">
          <div className="col-4">
            <Checkbox />
          </div>
          <div className="col-8">
            <Price priceTrend= {this.props.content} />
          </div>
        </div>
      </td>
    );
  }
}

export default Cell;
