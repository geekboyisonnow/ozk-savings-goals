import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import Create from './Create'
// import Edit from './Edit'
// import Home from './'
// import Challenge from './Challenge'
// import Progress from './Progress'
import './App.css';

class Navigation extends Component {
  constructor(props) {
    super(props)

    this.props = {
    }
    
  }
  render() {
    return (
      <>
        <div className="nav">
        <Link to="/create" className="plain"><div className="hover" id="nav-bkg">
        Add New Goals
        </div></Link>
        <Link to="/edit" className="plain"><div className="hover" id="nav-bkg">
        Edit My Goals
        </div></Link>
        <Link to="/progress" className="plain"><div className="hover" id="nav-bkg">
        Chart My Progress
        </div></Link>
        <Link to="/challenge" className="plain"><div className="hover" id="nav-bkg">
        The Rainy Day Challenge
        </div></Link>
        </div>
      </>
      );
  }
}

export default Navigation;
