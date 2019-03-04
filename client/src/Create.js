import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

class Create extends Component {
  constructor(props) {
    super(props)

    this.state = true
    
  }

  render() {

    class Goal {
      // Method that is called when a new goal is created
      constructor(goalData) {
        this.goalName = goalData.goal_name
        this.goalAmount = goalData.goal_amount
        this.customerID = goalData.customer_id
        this.goalURL = "http://localhost:3000/goals/1.json"
      }
      
      name() {
        return this.goalName
      }

      theGoalAmount() {
        return this.goalAmount
      }

      theCustomerID() {
        return this.customerID
      }

      theGoalURL() {
        return this.goalURL
      }

    }

    const main = () => {

    const fakeData = {
  
    customers: 
    [{"id":2,"customer_name": "Joseph Campbell","created_at":"2019-03-04T14:48:16.562Z","updated_at":"2019-03-04T14:48:16.562Z","url":"http://localhost:3000/customers/2.json"},{"id":1,"customer_name":"Kenneth Frequency","created_at":"2019-03-04T14:48:16.234Z","updated_at":"2019-03-04T14:48:16.234Z","url":"http://localhost:3000/customers/1.json"},{"id":6,"customer_name":"Kenny McCormic","created_at":"2019-03-04T14:48:17.744Z","updated_at":"2019-03-04T14:48:17.744Z","url":"http://localhost:3000/customers/6.json"},{"id":11,"customer_name":"Keyser Soze","created_at":"2019-03-04T14:48:18.392Z","updated_at":"2019-03-04T14:48:18.392Z","url":"http://localhost:3000/customers/11.json"},{"id":8,"customer_name":"Leonardo Di Vinci","created_at":"2019-03-04T14:48:17.996Z","updated_at":"2019-03-04T14:48:17.996Z","url":"http://localhost:3000/customers/8.json"},{"id":12,"customer_name":"Lucas Stephenson","created_at":"2019-03-04T14:48:18.556Z","updated_at":"2019-03-04T14:48:18.556Z","url":"http://localhost:3000/customers/12.json"},{"id":10,"customer_name":"Martin Van Scorsese","created_at":"2019-03-04T14:48:18.283Z","updated_at":"2019-03-04T14:48:18.283Z","url":"http://localhost:3000/customers/10.json"},{"id":15,"customer_name":"Milla Joan Jovovich","created_at":"2019-03-04T14:48:18.914Z","updated_at":"2019-03-04T14:48:18.914Z","url":"http://localhost:3000/customers/15.json"},{"id":9,"customer_name":"Obi Wan Kenobi","created_at":"2019-03-04T14:48:18.091Z","updated_at":"2019-03-04T14:48:18.091Z","url":"http://localhost:3000/customers/9.json"},{"id":7,"customer_name":"Pablo Picaso","created_at":"2019-03-04T14:48:17.799Z","updated_at":"2019-03-04T14:48:17.799Z","url":"http://localhost:3000/customers/7.json"},{"id":14,"customer_name":"Roger Verbal Kint","created_at":"2019-03-04T14:48:18.805Z","updated_at":"2019-03-04T14:48:18.805Z","url":"http://localhost:3000/customers/14.json"},{"id":13,"customer_name":"Salvador Dali","created_at":"2019-03-04T14:48:18.722Z","updated_at":"2019-03-04T14:48:18.722Z","url":"http://localhost:3000/customers/13.json"},{"id":5,"customer_name":"Shannon Hoon","created_at":"2019-03-04T14:48:17.623Z","updated_at":"2019-03-04T14:48:17.623Z","url":"http://localhost:3000/customers/5.json"},{"id":4,"customer_name":"Veronica Electronica","created_at":"2019-03-04T14:48:17.447Z","updated_at":"2019-03-04T14:48:17.447Z","url":"http://localhost:3000/customers/4.json"},{"id":3,"customer_name":"Willie Nelson Smith","created_at":"2019-03-04T14:48:17.275Z","updated_at":"2019-03-04T14:48:17.275Z","url":"http://localhost:3000/customers/3.json"}],
  
    goals:
    [{"id":1,"goal_name": "College Fund","goal_amount":"100000.0","customer_id":1,"created_at":"2019-03-04T14:48:16.422Z","updated_at":"2019-03-04T14:48:16.422Z","url":"http://localhost:3000/goals/1.json"},{"id":2,"goal_name":"New House","goal_amount":"60000.0","customer_id":1,"created_at":"2019-03-04T14:48:16.451Z","updated_at":"2019-03-04T14:48:16.451Z","url":"http://localhost:3000/goals/2.json"},{"id":3,"goal_name":"Retirement","goal_amount":"4000000.0","customer_id":1,"created_at":"2019-03-04T14:48:16.489Z","updated_at":"2019-03-04T14:48:16.489Z","url":"http://localhost:3000/goals/3.json"},{"id":4,"goal_name":"Vacation","goal_amount":"2000.0","customer_id":1,"created_at":"2019-03-04T14:48:16.506Z","updated_at":"2019-03-04T14:48:16.506Z","url":"http://localhost:3000/goals/4.json"},{"id":5,"goal_name":"New Car","goal_amount":"10000.0","customer_id":1,"created_at":"2019-03-04T14:48:16.544Z","updated_at":"2019-03-04T14:48:16.544Z","url":"http://localhost:3000/goals/5.json"},{"id":6,"goal_name":"Retirement","goal_amount":"100000.0","customer_id":2,"created_at":"2019-03-04T14:48:16.631Z","updated_at":"2019-03-04T14:48:16.631Z","url":"http://localhost:3000/goals/6.json"},{"id":7,"goal_name":"College Fund","goal_amount":"50000.0","customer_id":2,"created_at":"2019-03-04T14:48:16.823Z","updated_at":"2019-03-04T14:48:16.823Z","url":"http://localhost:3000/goals/7.json"},{"id":8,"goal_name":"Vacation","goal_amount":"1000.0","customer_id":2,"created_at":"2019-03-04T14:48:16.979Z","updated_at":"2019-03-04T14:48:16.979Z","url":"http://localhost:3000/goals/8.json"},{"id":9,"goal_name":"Disney Stock","goal_amount":"1000000.0","customer_id":2,"created_at":"2019-03-04T14:48:17.169Z","updated_at":"2019-03-04T14:48:17.169Z","url":"http://localhost:3000/goals/9.json"},{"id":10,"goal_name":"Tatooine Rental","goal_amount":"1000000000.0","customer_id":2,"created_at":"2019-03-04T14:48:17.210Z","updated_at":"2019-03-04T14:48:17.210Z","url":"http://localhost:3000/goals/10.json"},{"id":11,"goal_name":"Retirement","goal_amount":"120000.0","customer_id":3,"created_at":"2019-03-04T14:48:17.309Z","updated_at":"2019-03-04T14:48:17.309Z","url":"http://localhost:3000/goals/11.json"},{"id":12,"goal_name":"Bolder Rental","goal_amount":"250000.0","customer_id":3,"created_at":"2019-03-04T14:48:17.336Z","updated_at":"2019-03-04T14:48:17.336Z","url":"http://localhost:3000/goals/12.json"},{"id":13,"goal_name":"New Car","goal_amount":"300000.0","customer_id":3,"created_at":"2019-03-04T14:48:17.364Z","updated_at":"2019-03-04T14:48:17.364Z","url":"http://localhost:3000/goals/13.json"},{"id":14,"goal_name":"College Fund","goal_amount":"360000.0","customer_id":3,"created_at":"2019-03-04T14:48:17.391Z","updated_at":"2019-03-04T14:48:17.391Z","url":"http://localhost:3000/goals/14.json"},{"id":15,"goal_name":"Bel Air Rental","goal_amount":"4500000.0","customer_id":3,"created_at":"2019-03-04T14:48:17.419Z","updated_at":"2019-03-04T14:48:17.419Z","url":"http://localhost:3000/goals/15.json"},{"id":16,"goal_name":"Retirement","goal_amount":"400000.0","customer_id":4,"created_at":"2019-03-04T14:48:17.485Z","updated_at":"2019-03-04T14:48:17.485Z","url":"http://localhost:3000/goals/16.json"},{"id":17,"goal_name":"Record Album","goal_amount":"50000.0","customer_id":4,"created_at":"2019-03-04T14:48:17.511Z","updated_at":"2019-03-04T14:48:17.511Z","url":"http://localhost:3000/goals/17.json"},{"id":18,"goal_name":"Vacation","goal_amount":"4500.0","customer_id":4,"created_at":"2019-03-04T14:48:17.540Z","updated_at":"2019-03-04T14:48:17.540Z","url":"http://localhost:3000/goals/18.json"},{"id":19,"goal_name":"Paris Trip","goal_amount":"9500.0","customer_id":4,"created_at":"2019-03-04T14:48:17.567Z","updated_at":"2019-03-04T14:48:17.567Z","url":"http://localhost:3000/goals/19.json"},{"id":20,"goal_name":"College Fund","goal_amount":"125000.0","customer_id":4,"created_at":"2019-03-04T14:48:17.595Z","updated_at":"2019-03-04T14:48:17.595Z","url":"http://localhost:3000/goals/20.json"},{"id":21,"goal_name":"Retirement","goal_amount":"415658.14","customer_id":5,"created_at":"2019-03-04T14:48:17.661Z","updated_at":"2019-03-04T14:48:17.661Z","url":"http://localhost:3000/goals/21.json"},{"id":22,"goal_name":"College Fund","goal_amount":"98751.23","customer_id":5,"created_at":"2019-03-04T14:48:17.688Z","updated_at":"2019-03-04T14:48:17.688Z","url":"http://localhost:3000/goals/22.json"},{"id":23,"goal_name":"New House","goal_amount":"175693.33","customer_id":5,"created_at":"2019-03-04T14:48:17.716Z","updated_at":"2019-03-04T14:48:17.716Z","url":"http://localhost:3000/goals/23.json"},{"id":24,"goal_name":"New House","goal_amount":"12635.98","customer_id":6,"created_at":"2019-03-04T14:48:17.771Z","updated_at":"2019-03-04T14:48:17.771Z","url":"http://localhost:3000/goals/24.json"},{"id":25,"goal_name":"Paint","goal_amount":"36.5","customer_id":7,"created_at":"2019-03-04T14:48:17.837Z","updated_at":"2019-03-04T14:48:17.837Z","url":"http://localhost:3000/goals/25.json"},{"id":26,"goal_name":"Canvas","goal_amount":"156.48","customer_id":7,"created_at":"2019-03-04T14:48:17.864Z","updated_at":"2019-03-04T14:48:17.864Z","url":"http://localhost:3000/goals/26.json"},{"id":27,"goal_name":"New Car","goal_amount":"54988.88","customer_id":7,"created_at":"2019-03-04T14:48:17.892Z","updated_at":"2019-03-04T14:48:17.892Z","url":"http://localhost:3000/goals/27.json"},{"id":28,"goal_name":"Retirement","goal_amount":"801254.45","customer_id":7,"created_at":"2019-03-04T14:48:17.918Z","updated_at":"2019-03-04T14:48:17.918Z","url":"http://localhost:3000/goals/28.json"},{"id":29,"goal_name":"New House","goal_amount":"415684.21","customer_id":7,"created_at":"2019-03-04T14:48:17.946Z","updated_at":"2019-03-04T14:48:17.946Z","url":"http://localhost:3000/goals/29.json"},{"id":30,"goal_name":"College Fund","goal_amount":"12500.3","customer_id":8,"created_at":"2019-03-04T14:48:18.051Z","updated_at":"2019-03-04T14:48:18.051Z","url":"http://localhost:3000/goals/30.json"},{"id":31,"goal_name":"Retirement","goal_amount":"5600145.89","customer_id":9,"created_at":"2019-03-04T14:48:18.183Z","updated_at":"2019-03-04T14:48:18.183Z","url":"http://localhost:3000/goals/31.json"},{"id":32,"goal_name":"New House","goal_amount":"4569363.17","customer_id":10,"created_at":"2019-03-04T14:48:18.326Z","updated_at":"2019-03-04T14:48:18.326Z","url":"http://localhost:3000/goals/32.json"},{"id":33,"goal_name":"Retirement","goal_amount":"8500046.57","customer_id":10,"created_at":"2019-03-04T14:48:18.364Z","updated_at":"2019-03-04T14:48:18.364Z","url":"http://localhost:3000/goals/33.json"},{"id":34,"goal_name":"Vacation","goal_amount":"10000.0","customer_id":11,"created_at":"2019-03-04T14:48:18.419Z","updated_at":"2019-03-04T14:48:18.419Z","url":"http://localhost:3000/goals/34.json"},{"id":35,"goal_name":"Retirement","goal_amount":"100000.0","customer_id":11,"created_at":"2019-03-04T14:48:18.446Z","updated_at":"2019-03-04T14:48:18.446Z","url":"http://localhost:3000/goals/35.json"},{"id":36,"goal_name":"New Car","goal_amount":"50000.0","customer_id":11,"created_at":"2019-03-04T14:48:18.473Z","updated_at":"2019-03-04T14:48:18.473Z","url":"http://localhost:3000/goals/36.json"},{"id":37,"goal_name":"New House","goal_amount":"350000.0","customer_id":11,"created_at":"2019-03-04T14:48:18.501Z","updated_at":"2019-03-04T14:48:18.501Z","url":"http://localhost:3000/goals/37.json"},{"id":38,"goal_name":"Tanker Ship","goal_amount":"1500565.36","customer_id":11,"created_at":"2019-03-04T14:48:18.528Z","updated_at":"2019-03-04T14:48:18.528Z","url":"http://localhost:3000/goals/38.json"},{"id":39,"goal_name":"College Fund","goal_amount":"125000.0","customer_id":12,"created_at":"2019-03-04T14:48:18.583Z","updated_at":"2019-03-04T14:48:18.583Z","url":"http://localhost:3000/goals/39.json"},{"id":40,"goal_name":"Vacation","goal_amount":"12500.0","customer_id":12,"created_at":"2019-03-04T14:48:18.611Z","updated_at":"2019-03-04T14:48:18.611Z","url":"http://localhost:3000/goals/40.json"},{"id":41,"goal_name":"New House","goal_amount":"250000.0","customer_id":12,"created_at":"2019-03-04T14:48:18.639Z","updated_at":"2019-03-04T14:48:18.639Z","url":"http://localhost:3000/goals/41.json"},{"id":42,"goal_name":"Retirement","goal_amount":"2500000.0","customer_id":12,"created_at":"2019-03-04T14:48:18.666Z","updated_at":"2019-03-04T14:48:18.666Z","url":"http://localhost:3000/goals/42.json"},{"id":43,"goal_name":"Independent Film","goal_amount":"25000.0","customer_id":12,"created_at":"2019-03-04T14:48:18.694Z","updated_at":"2019-03-04T14:48:18.694Z","url":"http://localhost:3000/goals/43.json"},{"id":44,"goal_name":"New Car","goal_amount":"315000.0","customer_id":13,"created_at":"2019-03-04T14:48:18.749Z","updated_at":"2019-03-04T14:48:18.749Z","url":"http://localhost:3000/goals/44.json"},{"id":45,"goal_name":"New House","goal_amount":"7500000.0","customer_id":13,"created_at":"2019-03-04T14:48:18.776Z","updated_at":"2019-03-04T14:48:18.776Z","url":"http://localhost:3000/goals/45.json"},{"id":46,"goal_name":"New House","goal_amount":"57000.0","customer_id":14,"created_at":"2019-03-04T14:48:18.832Z","updated_at":"2019-03-04T14:48:18.832Z","url":"http://localhost:3000/goals/46.json"},{"id":47,"goal_name":"Retirement","goal_amount":"130000.0","customer_id":14,"created_at":"2019-03-04T14:48:18.858Z","updated_at":"2019-03-04T14:48:18.858Z","url":"http://localhost:3000/goals/47.json"},{"id":48,"goal_name":"Vacation","goal_amount":"1100.31","customer_id":14,"created_at":"2019-03-04T14:48:18.886Z","updated_at":"2019-03-04T14:48:18.886Z","url":"http://localhost:3000/goals/48.json"},{"id":49,"goal_name":"Aerosmith Tickets","goal_amount":"27.5","customer_id":15,"created_at":"2019-03-04T14:48:18.941Z","updated_at":"2019-03-04T14:48:18.941Z","url":"http://localhost:3000/goals/49.json"},{"id":50,"goal_name":"New House","goal_amount":"58650.0","customer_id":15,"created_at":"2019-03-04T14:48:18.968Z","updated_at":"2019-03-04T14:48:18.968Z","url":"http://localhost:3000/goals/50.json"},{"id":51,"goal_name":"College Fund","goal_amount":"3000.0","customer_id":15,"created_at":"2019-03-04T14:48:18.996Z","updated_at":"2019-03-04T14:48:18.996Z","url":"http://localhost:3000/goals/51.json"},{"id":52,"goal_name":"New Car","goal_amount":"3657.25","customer_id":15,"created_at":"2019-03-04T14:48:19.023Z","updated_at":"2019-03-04T14:48:19.023Z","url":"http://localhost:3000/goals/52.json"},{"id":53,"goal_name":"Vacation","goal_amount":"100.0","customer_id":15,"created_at":"2019-03-04T14:48:19.051Z","updated_at":"2019-03-04T14:48:19.051Z","url":"http://localhost:3000/goals/53.json"}],
  
    deposits:
    [{"id":1,"deposit_amount":"1000.0","goal_id":1,"created_at":"2019-03-04T14:50:13.762Z","updated_at":"2019-03-04T14:50:13.762Z","url":"http://localhost:3000/deposits/1.json"},{"id":2,"deposit_amount":"12000.0","goal_id":9,"created_at":"2019-03-04T14:50:28.350Z","updated_at":"2019-03-04T14:50:28.350Z","url":"http://localhost:3000/deposits/2.json"}]
    
    }

    console.log(fakeData.goals)

    fakeData.goals.forEach(
      (goalData) => {
        new Goal(goalData)

      }
    )
  }

  document.addEventListener('DOMContentLoaded', main)

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