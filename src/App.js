import React, { Component } from "react";
import "./App.css";
import Table from "./components/table";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="container" style={{paddingTop: "30px"}}>
        <Table />
      </div>
    );
  }
}

export default App;
