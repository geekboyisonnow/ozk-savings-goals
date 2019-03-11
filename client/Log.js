import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import plant from './plant.jpg';
import './App.css';
// import Auth from './auth'

class Log extends Component {

  
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
            <div className="column">
                <div className="content">
                <h1>Your Personal Savings Goals</h1>
                <h3>Click Here to Securely Login</h3>
                <h3>or Logout</h3>

                <div className="button-plain">
                <Link to="/login" ><button className="button-plain"><strong>Login</strong></button></Link>
                
                <Link to="/logout"><button className="button-plain"><strong>Logout</strong></button></Link>
              
              </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Log;