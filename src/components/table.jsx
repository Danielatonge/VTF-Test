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
    const i = parseInt(result[0]);
    const j = parseInt(result[1]);

    if (!this.getBoolWithName(name)) {
      const newItem = {
        name: name,
        checked: true,
        date: data[i].info[j].date,
        room_category: data[i].room_category,
        price_choosen: data[i].info[j].price_then,
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
          const columnId = cell.colId;
          const name = `${rowIndex}_${columnId}`;

          const content = {
            current_price: cell.current_price,
            price_then: cell.price_then,
          };

          return (
            <Cell
              key={name}
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
      return (
        <React.Fragment key={index}>{this.renderRow(index)}</React.Fragment>
      );
    });
  }

  handleClick = (event) => {
    event.preventDefault();

    let REQUEST = this.state.checkedItems.filter(
      (item) => item.checked === true
    );

    const POST_REQUEST = REQUEST.map(item => {
      return {
        date: item.date,
        roomCategory: item.room_category,
        currentPrice: item.price_choosen
      };
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
          className="btn btn-primary btn-lg ml-auto"
          onClick={this.handleClick}
        >
          Apply
        </button>
      </div>
    );
  }
}

export default Table;
