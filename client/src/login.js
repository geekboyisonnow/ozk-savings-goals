import React, { Component } from 'react';
import plant from './plant.jpg';
import './App.css';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = null;
  }

  render() {
    return (
      <>
        <div className="body">
          <div className="home-content">
            <div>
              <img
                src={plant}
                alt="plant planted in change jar"
              />
            </div>
            <div className="text">
              <h2>LOGIN!</h2>

              <p>
                
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Login;