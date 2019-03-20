import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import auth from './auth'

class Progress extends Component {
  constructor(props) {
    super(props)

    this.state = {
      page: 1,
      goals: [],
      deposits: [],
      newItemText: '',
      progress_value: 0
    }
  }

  componentDidMount = () => {
    this.getAllGoals()
    this.getAllDeposits()
  }

  getAllGoals = () => {
    if (auth.isAuthenticated()) {
      axios.defaults.headers.common = {
        Authorization: auth.authorizationHeader()
      }
    }
    axios
      .get('http://localhost:3000/api/goals.json')
      .then(response => {
        console.log(response.data)
        this.setState({
          goals: response.data
        })
      })
  }

  getAllDeposits = () => {
    if (auth.isAuthenticated()) {
      axios.defaults.headers.common = {
        Authorization: auth.authorizationHeader()
      }
    }
    axios
      .get('http://localhost:3000/api/deposits.json')
      .then(response => {
        console.log(response.data)
        this.setState({
          deposits: response.data
        })
      })
  }

  nextPage = () => {
    this.setState(
      () => {
        return { page: this.state.page + 1 }
      },
      () => {
        this.getAllGoals()
      }
    )
  }

  lastPage = () => {
    this.setState(
      () => {
        return { page: this.state.page - 1 }
      },
      () => {
        this.getAllGoals()
      }
    )
  }

  // arrayLength = (array) => {

  //   if (this.state.goals.length > 6) {
  //     this.state.goals = this.state.goals[5];
  //   }
  // }

  getBalance = () => {
    this.setState({
      balance: this.state.goal.id.deposits.sum
    })
  }

  changeText = event => {
    this.setState({
      newItemText: event.target.value
    })
  }

  render() {
    return (
      <>
        <div className="content">
          <h2>Savings Goals Progress...</h2>

          <div className="progress-buttons">
            <div className="row">
              <div className="mobile-column">
                <label htmlFor="name" className="input-label">
                  <strong>Goal:</strong>
                </label>

                <div>
                  {this.state.goals.slice(0, 5).map(goal => <div key={goal.id} className="input-label">
                    {goal.goal_name}</div>
                  )}
                </div>
              </div>

              <div className="mobile-column">
                <label htmlFor="target" className="input-label">
                  <strong>Amount:</strong>
                </label>

                <div>
                  {this.state.goals.slice(0, 5).map(goal => <div key={goal.id} className="input-label">$
                      {goal.goal_amount}
                  </div>)}
                </div>
              </div>

              <div className="mobile-column">
                <label
                  htmlFor="current"
                  className="input-label"
                >
                  <strong>Balance:</strong>
                </label>
                {/* <div key={this.state.goals.goal_id}>
                  {this.state.balance}
                </div> */}

                {/* <div>
                  {this.state.balance.map(balance => <div key={goal.id} className="input-label">$
                      {goal.balance}
                  </div>)}
                </div> */}

                {/* <div key={goal.id}>
                  {this.balance}
                </div> */}

                <div>
                  {this.state.deposits.slice(0, 5).map(deposit => <div key={deposit.id} className="input-label">
                    $ {deposit.deposit_amount}
                  </div>)}
                </div>
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
                <div className="buttons">
                  <div
                    classID="submit"
                    className="button-label"
                  >
                    <button onClick={this.lastPage}>
                      <strong>BACK</strong>
                    </button>
                  </div>
                </div>
              </div>
              <div className="button-column">
                <div className="buttons">
                  <div
                    classID="submit"
                    className="button-label"
                  >
                    <button>
                      <strong>EDIT</strong>
                    </button>
                  </div>
                </div>
              </div>
              <div className="button-column">
                <div className="buttons">
                  <div
                    classID="submit"
                    className="button-label"
                  >
                    <button onClick={this.nextPage}>
                      <strong>NEXT</strong>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="buttons">
            <h3>Page {this.state.page}</h3>
          </div>
        </div>
      </>
    );
  }
}

export default Progress;