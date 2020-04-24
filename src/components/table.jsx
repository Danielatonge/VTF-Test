import React, { Component } from "react";
import Cell from "./cell";

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cells: [
        {
          id: 1,
          room_category: "Luxury",
          info: [
            {
              date: "24/04/2020",
              current_price: 1200,
              price_then: 1000,
            },
            {
              date: "25/04/2020",
              current_price: 1200,
              price_then: 1300,
            },
            {
              date: "26/04/2020",
              current_price: 1200,
              price_then: 1200,
            },
            {
                date: "27/04/2020",
                current_price: 1200,
                price_then: 1000,
              }
          ],
        },
        {
          id: 2,
          room_category: "Standard for two",
          info: [
            {
              date: "24/04/2020",
              current_price: 800,
              price_then: 1000,
            },
            {
              date: "25/04/2020",
              current_price: 800,
              price_then: 700,
            },
            {
              date: "26/04/2020",
              current_price: 800,
              price_then: 1100,
            },
            {
                date: "27/04/2020",
                current_price: 800,
                price_then: 1000,
              }
          ],
        },
        {
          id: 3,
          room_category: "Twin",
          info: [
            {
              date: "24/04/2020",
              current_price: 1200,
              price_then: 1500,
            },
            {
              date: "25/04/2020",
              current_price: 1200,
              price_then: 1300,
            },
            {
              date: "26/04/2020",
              current_price: 1200,
              price_then: 1200,
            },
            {
                date: "27/04/2020",
                current_price: 1200,
                price_then: 1000,
              }
          ],
        },
        {
          id: 4,
          room_category: "Standard for three",
          info: [
            {
              date: "24/04/2020",
              current_price: 700,
              price_then: 1200,
            },
            {
              date: "25/04/2020",
              current_price: 700,
              price_then: 600,
            },
            {
              date: "26/04/2020",
              current_price: 700,
              price_then: 700,
            },
            {
                date: "27/04/2020",
                current_price: 700,
                price_then: 1000,
              }
          ],
        },
      ],
    };
  }

  renderRow = (rowIndex) => {
    return (
      <tr key={`row-${rowIndex}`}>
        {this.state.cells[rowIndex].info.map((cell) => {
            const content = {
                current_price: cell.current_price,
                price_then: cell.price_then
            }
          return <Cell content={content}/>;
        })}
      </tr>
    );
  };

  renderTableData() {
    return this.state.cells.map((cell, index) => {
      //   const { id, room_category} = rowData;
      return <React.Fragment>{this.renderRow(index)}</React.Fragment>;
    });
  }

  render() {
    return (
      <div>
        <table className="table table-bordered">
          <tbody>{this.renderTableData()}</tbody>
        </table>
      </div>
    );
  }
}

export default Table;
