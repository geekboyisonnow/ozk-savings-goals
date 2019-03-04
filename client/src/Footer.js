import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

class Footer extends Component {
  render() {
    return (
      <Router>
      <footer>
        Kenneth Cannon &copy; 2019
      </footer>
      </Router>
      );
  }
}

export default Footer;
