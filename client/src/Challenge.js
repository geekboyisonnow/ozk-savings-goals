import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

class Challenge extends Component {
  render() {
    return (

      <>
        <div className="body">
    <div className="content">
          <h2>The Rainy Day Challenge</h2>
          <div className="rainy-content">
          <section>Competition can be healthy.  So, try the Rainy Day Challenge.  Here's how it works... You pick a savings goal that you might need for a rainy day, such as; $100, $1,000, $10,000, or more.  Match your progress against others in the challenge.  See if you can beat expectations.  Are you ready for the Challenge?  Bank OZK helps you save today to meet your financial goals for tomorrow!  Enter now to take the Challenge!</section>
          </div>
     </div>
     
      <div className="row">
          <div className="column">
            <label for="name" className="label">Goal:</label>
            <label for="target" className="label">Amount:</label>
            <label for="current" className="label">Balance:</label>
            <label for="date" className="label">Date:</label>
          </div>
          <div className="column">
          <div type="text" id="name" name="goal_name" className="label" >Rainy Day Challenge</div>
            <input type="text" id="target" name="target_amount" className="challenge-label"/>
            <div type="text" id="current" name="current_amount" className="label" >$900.00</div>
            <div type="date" id="date" name="target_date" className="label" >12/31/2019</div>
          </div>
          </div> 
          
          
          <div className="content">
           
              <button type="submit"><strong>ENTER</strong></button>
            
            <section>Click HERE to take the Challenge!</section>
          
          </div>
            
           
            </div>
          </>
);
  }
}

export default Challenge;