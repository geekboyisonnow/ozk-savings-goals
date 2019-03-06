import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

class Goal {
  // Method that is called when a new goal is created
  constructor(goalData) {
    this.goalName = goalData.goal_name
    this.goalAmount = goalData.goal_amount
    this.customerID = 1
    this.depositBalance = 1000.00
    this.targetDate = "01/01/2020"

    // goalData.customer_id
    this.goalURL = "http://localhost:3000/goals/1.json"
  }
  
  goal_name() {
    return this.goalName
  }

  goal_amount() {
    return this.goalAmount
  }

  deposit_amount() {
    return this.depositBalance
  }

  targetDate() {
    return this.targetDate
  }
}

class Create extends Component {
  constructor(props) {
    super(props)

    this.state = {

      goals: [],
      loading: false
    }

    this.getGoalsFromAPI()

  }
  
  fetch('http://localhost:3000/goals/1.json').then(response => response.json()).then(goalData => {
  let goals = goalData.goals.map(
    (goalData) => {
      let newGoal = new Goal(goalData)
      return newGoal
    }
  )
  
  goals.forEach(goal => {
    let ul = document.querySelector('ul')

    let newLI = document.createElement('li')
    newLI.textContent = `${goal.goalName}`
    
    ul.appendChild(newLI)
  })
  })
  
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
            <label htmlFor="name" className="label">Goal Name:</label>
            <label htmlFor="target" className="label">Goal Amount:</label>
            <label htmlFor="current" className="label">Balance:</label>
            <label htmlFor="date" className="label">Target Date:</label>
          </div>
          <div className="column">
          <ul>
            
          </ul>
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