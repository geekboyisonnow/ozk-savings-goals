import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import plant from './plant.jpg'
import './App.css';

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = true
  }

  render() {
    return (
      <>
        <div className="body">
      <div className="home-content">
        
        <div>
          <img src={plant} alt="plant planted in change jar"/>
        </div>
        <div className="text">
          <h2>HERE IS LOREM IPSUM FOR START-UPS</h2>
          
          <p>
          Interaction design user experience long tail business plan stock social proof gamification series A financing scrum project churn rate incubator. Facebook technology first mover advantage gen-z scrum project strategy prototype metrics monetization bootstrapping supply chain innovator return on investment. Business-to-consumer customer hypotheses. Seed money facebook network effects release validation scrum project gen-z rockstar infrastructure iPad niche market.
          </p>
          </div>
        </div>
      </div>
      </>
      );
  }
}

export default Home;
