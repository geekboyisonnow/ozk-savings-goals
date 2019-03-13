import React, { Component } from 'react';
import './App.css';
// import axios from 'axios'


class Progress extends Component {
  constructor(props) {
    super(props)

    this.state = {
      customer_id: 1,      
      goals: props.goals
    }
  }

  setGoals = () => {
      this.setState({
        goals: this.props.goals
    })
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

  // componentDidMount() {
  //   axios.get('/goals.json').then(response => {
  //     console.log(response.data)
  //     this.setState({
  //       goals: response.data
  //     })
  //   })
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
                    {this.props.goals.slice(0,5).map(goal => {
                      return (
                    <div className="input-label">
                      {goal.goal_name}
                    </div>
                    )}
                    )}
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
