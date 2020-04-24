import React, { Component } from "react";
import Cell from "./cell";
import data from "../data";


class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedItems: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.getBoolWithName = this.getBoolWithName.bind(this);
  }

  handleChange = (e) => {
    //you might want to apply a conditional handler if check box was checked or not
    const name = e.target.name;
    let svar = name;
    let result = svar.split("_");

    if (!this.getBoolWithName(name)) {
      const newItem = {
        name: name,
        checked: true,
        date: result[1],
        room_category: data[parseInt(result[0])].room_category,
        price_choosen: result[2],
      };
      this.setState({ checkedItems: [...this.state.checkedItems, newItem] });
    } else {
      const index = this.getIndexWithName(name);
      const check = this.state.checkedItems[index].checked;
      const checkedItems = [...this.state.checkedItems];
      checkedItems[index].checked = !check;
      this.setState({ checkedItems: checkedItems });
      console.log(check);
    }
  };

  getIndexWithName(name) {
    const myArray = this.state.checkedItems;
    for (let i = 0; i < myArray.length; i++) {
      if (myArray[i].name === name) {
        return i;
      }
    }
    return false;
  }

  getBoolWithName(name) {
    const myArray = this.state.checkedItems;
    for (let i = 0; i < myArray.length; i++) {
      if (myArray[i].name === name) {
        return true;
      }
    }
    return false;
  }

  verifyCheckedWithName(name) {
    const myArray = this.state.checkedItems;
    for (let i = 0; i < myArray.length; i++) {
      if (myArray[i].name === name) {
        return myArray[i].checked;
      }
    }
    return false;
  }

  renderRow = (rowIndex) => {
    return (
      <tr key={`row-${rowIndex}`}>
        {data[rowIndex].info.map((cell) => {
          const date = cell.date;
          const price_then = cell.price_then;
          const name = `${rowIndex}_${date}_${price_then}`;

          const content = {
            current_price: cell.current_price,
            price_then: cell.price_then,
          };

          return (
            <Cell
              name={name}
              isSelected={this.verifyCheckedWithName(name)}
              onCheckboxChange={this.handleChange}
              content={content}
            />
          );
        })}
      </tr>
    );
  };

  renderTableData() {
    return data.map((cell, index) => {
      return <React.Fragment>{this.renderRow(index)}</React.Fragment>;
    });
  }

  handleClick = (event) => {
    event.preventDefault();
    const POST_REQUEST = this.state.checkedItems.map(function(item){
        if (item.checked === true){
            return ({date: item.date, roomCategory: item.room_category, currentPrice: item.price_choosen});
        }
    });
    console.log(POST_REQUEST);
  };

  render() {
    return (
      <div className="row">
        <table className="table table-bordered">
          <tbody>{this.renderTableData()}</tbody>
        </table>
        <button
          type="submit"
          className="btn btn-primary btn-lg pull-right"
          onClick={this.handleClick}
        >
          Apply
        </button>
      </div>
    );
  }
}

export default Table;
