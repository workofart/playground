import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navbar from './components/Navbar';
import logo from './logo.svg';


class App extends Component {

  render() {
  
    return (
      <div className="App">
        <Navbar />
      </div>
    );
  }
}

export default App;