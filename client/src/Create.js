import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

class Create extends Component {
  constructor(props) {
    super(props)

    this.state = true
    
  }

  render() {

    return (
      <>
        <div className="body">
    <div className="content">
          <h2>Create A New Savings Goals</h2>
          <section>Bank OZK helps you save today to meet your financial goals for tomorrow.</section>
     
     <div className="column">
      <form action="/new" method="post" className="row">
          <div className="column">
            <label for="name" className="label">Goal Name:</label>
            <label for="target" className="label">Goal Amount:</label>
            <label for="current" className="label">Balance:</label>
            <label for="date" className="label">Target Date:</label>
          </div>
          <div className="column">
            <input type="text" id="name" name="goal_name" className="input-label"/>
            <input type="text" id="target" name="target_amount" className="input-label"/>
            <input type="text" id="current" name="current_amount" className="input-label"/>
            <input type="date" id="date" name="target_date" className="input-label"/>
          </div>
          </form> 
          </div>
          
          <div className="button-content">
            <div className="create">
              <button type="submit"><strong>CREATE</strong></button>
            
            <section>Click HERE to Create Your New Goal!</section>
          </div>
          </div>
            
            </div>
            </div>
          </>
      );
  }
}

export default Create;