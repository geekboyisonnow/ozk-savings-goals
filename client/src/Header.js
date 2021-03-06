import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import logo from './bank-ozk-logo.png';
import './App.css';

class Header extends Component {
  render() {
    return (
            <>
                <header>
                  <Link to="/home" className="plain">
                    <img
                      align="bottom"
                      src={logo}
                      className="logo"
                      alt="the Bank OZK logo"
                    />
                  </Link>
                </header>
            </>
    );
  }
}

export default Header;
