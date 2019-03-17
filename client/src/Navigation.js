import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import auth from './auth';


class Navigation extends Component {


  handleButtonChange(value) {
    this.setState({
      Authorization: value
    });
  }


  loginOrLogout = () => {
    if (auth.isAuthenticated()) {
      return <Link to="/logout" className="plain">
        <div className="hover" id="nav-bkg">
          Logout
        </div>
      </Link>
    } else {
      return <Link to="/login" className="plain">
        <div className="hover" id="nav-bkg">
          Login
        </div>
      </Link>
    }
  }

  render() {
    return (
      <>
        <div className="nav">
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
          {this.loginOrLogout()}

        </div>
      </>
    );
  }
}

export default Navigation;
