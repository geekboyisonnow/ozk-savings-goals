import React, { Component } from 'react';
import './App.css';



class Progress extends Component {
  constructor(props) {
    super(props)

    this.state = {
      customer_id: 1,      
      goals: [
        {
          "id": 49,
          "goal_name": "Aerosmith Tickets",
          "goal_amount": "27.5",
          "customer_id": 15,
          "created_at": "2019-03-04T14:48:18.941Z",
          "updated_at": "2019-03-04T14:48:18.941Z",
          "url": "http://localhost:3000/goals/49.json",
          "deposit_count": 0,
          "deposits": [
            
          ]
        },
        {
          "id": 15,
          "goal_name": "Bel Air Rental",
          "goal_amount": "4500000.0",
          "customer_id": 3,
          "created_at": "2019-03-04T14:48:17.419Z",
          "updated_at": "2019-03-04T14:48:17.419Z",
          "url": "http://localhost:3000/goals/15.json",
          "deposit_count": 0,
          "deposits": [
            
          ]
        },
        {
          "id": 12,
          "goal_name": "Bolder Rental",
          "goal_amount": "250000.0",
          "customer_id": 3,
          "created_at": "2019-03-04T14:48:17.336Z",
          "updated_at": "2019-03-04T14:48:17.336Z",
          "url": "http://localhost:3000/goals/12.json",
          "deposit_count": 0,
          "deposits": [
            
          ]
        },
        {
          "id": 26,
          "goal_name": "Canvas",
          "goal_amount": "156.48",
          "customer_id": 7,
          "created_at": "2019-03-04T14:48:17.864Z",
          "updated_at": "2019-03-04T14:48:17.864Z",
          "url": "http://localhost:3000/goals/26.json",
          "deposit_count": 0,
          "deposits": [
            
          ]
        },
        {
          "id": 51,
          "goal_name": "College Fund",
          "goal_amount": "3000.0",
          "customer_id": 15,
          "created_at": "2019-03-04T14:48:18.996Z",
          "updated_at": "2019-03-04T14:48:18.996Z",
          "url": "http://localhost:3000/goals/51.json",
          "deposit_count": 0,
          "deposits": [
            
          ]
        },
        {
          "id": 7,
          "goal_name": "College Fund",
          "goal_amount": "50000.0",
          "customer_id": 2,
          "created_at": "2019-03-04T14:48:16.823Z",
          "updated_at": "2019-03-04T14:48:16.823Z",
          "url": "http://localhost:3000/goals/7.json",
          "deposit_count": 0,
          "deposits": [
            
          ]
        },
        {
          "id": 39,
          "goal_name": "College Fund",
          "goal_amount": "125000.0",
          "customer_id": 12,
          "created_at": "2019-03-04T14:48:18.583Z",
          "updated_at": "2019-03-04T14:48:18.583Z",
          "url": "http://localhost:3000/goals/39.json",
          "deposit_count": 0,
          "deposits": [
            
          ]
        },
        {
          "id": 30,
          "goal_name": "College Fund",
          "goal_amount": "12500.3",
          "customer_id": 8,
          "created_at": "2019-03-04T14:48:18.051Z",
          "updated_at": "2019-03-04T14:48:18.051Z",
          "url": "http://localhost:3000/goals/30.json",
          "deposit_count": 0,
          "deposits": [
            
          ]
        },
        {
          "id": 14,
          "goal_name": "College Fund",
          "goal_amount": "360000.0",
          "customer_id": 3,
          "created_at": "2019-03-04T14:48:17.391Z",
          "updated_at": "2019-03-04T14:48:17.391Z",
          "url": "http://localhost:3000/goals/14.json",
          "deposit_count": 0,
          "deposits": [
            
          ]
        },
        {
          "id": 22,
          "goal_name": "College Fund",
          "goal_amount": "98751.23",
          "customer_id": 5,
          "created_at": "2019-03-04T14:48:17.688Z",
          "updated_at": "2019-03-04T14:48:17.688Z",
          "url": "http://localhost:3000/goals/22.json",
          "deposit_count": 0,
          "deposits": [
            
          ]
        },
        {
          "id": 20,
          "goal_name": "College Fund",
          "goal_amount": "125000.0",
          "customer_id": 4,
          "created_at": "2019-03-04T14:48:17.595Z",
          "updated_at": "2019-03-04T14:48:17.595Z",
          "url": "http://localhost:3000/goals/20.json",
          "deposit_count": 0,
          "deposits": [
            
          ]
        },
        {
          "id": 1,
          "goal_name": "College Fund",
          "goal_amount": "100000.0",
          "customer_id": 1,
          "created_at": "2019-03-04T14:48:16.422Z",
          "updated_at": "2019-03-04T14:48:16.422Z",
          "url": "http://localhost:3000/goals/1.json",
          "deposit_count": 1,
          "deposits": [
            {
              "id": 1,
              "deposit_amount": "1000.0",
              "goal_id": 1,
              "created_at": "2019-03-04T14:50:13.762Z",
              "updated_at": "2019-03-04T14:50:13.762Z",
              "url": "http://localhost:3000/deposits/1.json"
            }
          ]
        },
        {
          "id": 9,
          "goal_name": "Disney Stock",
          "goal_amount": "1000000.0",
          "customer_id": 2,
          "created_at": "2019-03-04T14:48:17.169Z",
          "updated_at": "2019-03-04T14:48:17.169Z",
          "url": "http://localhost:3000/goals/9.json",
          "deposit_count": 1,
          "deposits": [
            {
              "id": 2,
              "deposit_amount": "12000.0",
              "goal_id": 9,
              "created_at": "2019-03-04T14:50:28.350Z",
              "updated_at": "2019-03-04T14:50:28.350Z",
              "url": "http://localhost:3000/deposits/2.json"
            }
          ]
          
      // balance: this.customer_id.goals.goal_id.deposit_amount.sum
        }
      ]
    }
  }

  // arrayLength = (array) => {

  //   if (this.state.goals.length > 6) {
  //     this.state.goals = this.state.goals[5];
  //   }
  // }

  // getBalance = () => {
  //   this.setState({
  //     balance: this.state.deposit_amount.sum
  // })
  // }

  
  render() {
    return (
      <>
        <div className="content">
          <h2>Savings Goals Progress</h2>

          <div className="progress-buttons">
            <div className="row">
              <div className="mobile-column">
                <label htmlFor="name" className="input-label">
                  <strong>Goal:</strong>
                </label>
                  <div>
                    {this.state.goals.slice(0,5).map(goal => <div className="input-label">
                      {goal.goal_name}
                    </div>)}
                  </div>




                {/* <div
                  type="text"
                  id="name"
                  name="goal_name"
                  className="input-label"
                >
                  Kid's College
                        </div>
                <div
                  type="text"
                  id="name"
                  name="goal_name"
                  className="input-label"
                >
                  Holiday Gifts
                        </div>
                <div
                  type="text"
                  id="name"
                  name="goal_name"
                  className="input-label"
                >
                  Vacation
                        </div>
                <div
                  type="text"
                  id="name"
                  name="goal_name"
                  className="input-label"
                >
                  New Kitchen
                        </div>
                <div
                  type="text"
                  id="name"
                  name="goal_name"
                  className="input-label"
                >
                  Retirement
                        </div> */}
              </div>

              <div className="mobile-column">
                <label htmlFor="target" className="input-label">
                  <strong>Amount:</strong>
                </label>

                <div>
                    {this.state.goals.slice(0,5).map(goal => <div className="input-label">$
                      {goal.goal_amount}
                    </div>)}
                  </div>

                {/* <div>
                    {this.state.goals.slice(0,5).map(goal => <div className="input-label">
                      {goal.goal_name}
                    </div>)}
                  </div>
                  
                <div
                  type="text"
                  id="target"
                  name="target_amount"
                  className="input-label"
                >
                  $100,000.00
                        </div>
                <div
                  type="text"
                  id="target"
                  name="target_amount"
                  className="input-label"
                >
                  $2,000.00
                        </div>
                <div
                  type="text"
                  id="target"
                  name="target_amount"
                  className="input-label"
                >
                  $1,000.00
                        </div>
                <div
                  type="text"
                  id="target"
                  name="target_amount"
                  className="input-label"
                >
                  $10,000.00
                        </div>
                <div
                  type="text"
                  id="target"
                  name="target_amount"
                  className="input-label"
                >
                  $4,000,000.00
                        </div> */}
              </div>

              <div className="mobile-column">
                <label
                  htmlFor="current"
                  className="input-label"
                >
                  <strong>Balance:</strong>
                </label>

                {/* <div>
                    {this.state.goals.balance.map(balance => <div className="input-label">$
                      {balance}
                    </div>)}
                  </div> */}

                {/* <div
                  type="text"
                  id="current"
                  name="current_amount"
                  className="input-label"
                >
                  $9,500.00
                        </div>
                <div
                  type="text"
                  id="current"
                  name="current_amount"
                  className="input-label"
                >
                  $500.00
                        </div>
                <div
                  type="text"
                  id="current"
                  name="current_amount"
                  className="input-label"
                >
                  $100.00
                        </div>
                <div
                  type="text"
                  id="current"
                  name="current_amount"
                  className="input-label"
                >
                  $300.00
                        </div>
                <div
                  type="text"
                  id="current"
                  name="current_amount"
                  className="input-label"
                >
                  $45,000.00
                        </div> */}
              </div>

              <div className="mobile-column">
                <label htmlFor="progress" className="input-label">
                  <strong>Progress:</strong>
                </label>
                <div className="container">
                              <div className="skills css">100%</div> 
                            </div>
                            <div className="container">
                              <div className="skills css">100%</div> 
                            </div>
                            <div className="container">
                              <div className="skills css">100%</div> 
                            </div>
                            <div className="container">
                              <div className="skills css">100%</div> 
                            </div>
                            <div className="container">
                              <div className="skills css">100%</div> 
                            </div>
                </div>
              </div>
            </div>
          </div>
          <div className="progress-buttons">
            <div className="content">
              <div className="buttons">
                <div className="button-column">
                  <div className="button">
                    <div
                      classID="submit"
                      className="button-label"
                    >
                      <button type="edit">
                        <strong>BACK</strong>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="button-column">
                  <div className="button">
                    <div
                      classID="submit"
                      className="button-label"
                    >
                      <button type="submit">
                        <strong>EDIT</strong>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="button-column">
                  <div className="button">
                    <div
                      classID="submit"
                      className="button-label"
                    >
                      <button type="edit">
                        <strong>NEXT</strong>
                      </button>
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

export default Progress;
