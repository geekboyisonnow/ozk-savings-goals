import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import auth from './auth'

class Goal {
  constructor(rawGoalData) {
    this.goalName = rawGoalData.goal_name
    this.goalAmount = rawGoalData.goal_amount

  }

  name() {
    return this.goalName
  }

  targetAmount() {
    return this.goalAmount
  }

  // description() {
  //   return `${this.characterName} has been in ${this.filmCount} films`
  // }
}

class Progress extends Component {
  constructor(props) {
    super(props)

    this.state = {
      page: 1,
      customer_id: 8,
      goals: [],
      loading: false
    }
  }

  componentDidMount = () => {
    this.getAllGoals()
  }

  getAllGoals = () => {
    this.setState({ loading: true })

    axios
      .get(`http://localhost:3000/goals.json`,
        {},
        {
          headers: {
            Authorization: auth.authorizationHeader()
          }
        }
      )
      // , { headers: { 'Access-Control-Allow-Origin': '*' } }
      // .get(`http://localhost:3000/goals/${this.state.id}`)
      // .get(`/customers/${this.customer_id}.json`)
      // .get(`/goals/?page=${this.state.page}.json`)
      // .then(response => response.json())

      .then(rawData => {
        let goals = rawData.goals.map(rawGoalData => {
          let newGoal = new Goal(rawGoalData)

          return newGoal
        })

        this.setState({
          goals: goals,
          loading: false
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

  // getBalance = () => {
  //   this.setState({
  //     balance: this.state.deposit_amount.sum
  // })
  // }

  render() {
    return (
      <>
        <div className="content">
          <h2>Savings Goals Progress... Page {this.state.page}</h2>

          <div className="progress-buttons">
            <div className="row">
              <div className="mobile-column">
                <label htmlFor="name" className="input-label">
                  <strong>Goal:</strong>
                </label>

                <div>
                  {this.state.goals.map(goal => {
                    return <div className="input-label">
                      {goal.goal_name}</div>
                  })}
                </div>
              </div>

              <div className="mobile-column">
                <label htmlFor="target" className="input-label">
                  <strong>Amount:</strong>
                </label>

                {/* <div>
                    {this.state.goals.slice(0,5).map(goal => <div className="input-label">$
                      {goal.goal_amount}
                    </div>)}
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
                    <button onClick={this.lastPage}>
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
                    <button>
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
                    <button onClick={this.nextPage}>
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