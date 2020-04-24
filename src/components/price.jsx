import React, { Component } from "react";
class Price extends Component {
  state = {};

  render() {
    const { current_price, price_then } = this.props.priceTrend;
    let direction = "fa fa-"
    if (current_price > price_then) {
        direction += "arrow-down text-danger"
    } else if (current_price < price_then) {
        direction += "arrow-up text-success"
    } else {
        direction += "check text-primary"
    }

    return (
      <div className="row">
        <div className="col-7">
          <div>{current_price} </div> <div> {price_then} </div>
        </div>
        <div className="col-5"><span className={direction}></span></div>
      </div>
    );
  }
}

export default Price;
