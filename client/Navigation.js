import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';


class Navigation extends Component {
  render() {
    return (
      <>
        <div className="nav">
          <Link to="/login" className="plain">
            <div className="hover" id="nav-bkg">
              Login
            </div>
          </Link>
          <Link to="/create" className="plain">
            <div className="hover" id="nav-bkg">
              Add New Goals
                    </div>
          </Link>
          <Link to="/edit" className="plain">
            <div className="hover" id="nav-bkg">
              Edit My Goals
                    </div>
          </Link>
          <Link to="/progress" className="plain">
            <div className="hover" id="nav-bkg">
              Chart My Progress
                    </div>
          </Link>
          <Link to="/challenge" className="plain">
            <div className="hover" id="nav-bkg">
              The Rainy Day Challenge
                    </div>
          </Link>
          <Link to="/logout" className="plain">
            <div className="hover" id="nav-bkg">
              Logout
            </div>
          </Link>
        </div>
      </>
    );
  }
}

export default Navigation;
