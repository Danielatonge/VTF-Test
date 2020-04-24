import React from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './components/table';


function App() {
  return (
    <div className="App">
      <Table />
      <button type="submit" className="btn btn-primary btn-sm">Apply</button> 
    </div>
  );
}

export default App;
