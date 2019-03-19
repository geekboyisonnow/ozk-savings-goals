import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import auth from './auth'

class Edit extends Component {
  constructor(props) {
    super(props)

    this.state = {
      page: 1,
      goals: [],
      newItemText: '',
      progress_value: 0
    }
  }

  reloadAllGoals = () => {
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

  componentDidMount = () => {
    this.reloadAllGoals()
  }

  changeText = event => {
    this.setState({
      newItemText: event.target.value
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

  editGoal = (event) => {
    event.preventDefault()
    let form = event.target
    let formData = new FormData(event.target)

    axios.put(`http://localhost:3000/api/goals.json`, formData).then(response => {
      form.reset()
      this.reloadAllGoals()
    })
  }

  complete = event => {
    event.preventDefault()
    axios
      .put(`/goals/${event.target.dataset.goal_id}`,
        {
          item: {
            complete: true
          }
        }
      )
      .then(response => {
        this.reloadAllGoals()
      })
  }

  // newItemGoalName = event => {
  //   event.preventDefault()

  //   axios
  //     .put(`http://localhost:3000/api/goals.json`,
  //       {
  //         item: {
  //           text: this.state.newItemText.goal_name
  //         }
  //       }
  //     )
  //     .then(response => {
  //       console.log(response.date)
  //       this.reloadAllGoals()
  //       this.setState({
  //         newItemText: ''
  //       })
  //     })
  // }

  // newItemGoalAmount = event => {
  //   event.preventDefault()

  //   axios
  //     .put(`http://localhost:3000/api/goals.json`,
  //       {
  //         item: {
  //           text: this.state.newItemText.goal_amount
  //         }
  //       }
  //     )
  //     .then(response => {
  //       console.log(response.date)
  //       this.reloadAllGoals()
  //       this.setState({
  //         newItemText: ''
  //       })
  //     })
  // }

  // newItemDepositAmount = event => {
  //   event.preventDefault()

  //   axios
  //     .put(`http://localhost:3000/api/goals.json`,
  //       {
  //         item: {
  //           text: this.state.newItemText.deposit_amount
  //         }
  //       }
  //     )
  //     .then(response => {
  //       console.log(response.date)
  //       this.reloadAllGoals()
  //       this.setState({
  //         newItemText: ''
  //       })
  //     })
  // }

  deleteGoal = event => {
    axios
      .delete(
        `http://localhost:3000/api/goals.json${
        event.target.dataset.goal_id}`,
        {
          item: ''
        }
      )
      .then(response => {
        this.reloadAllGoals()
      })
  }

  progressValue = (progress_value) => {
    progress_value = 0
    this.setState({
      progress_value: this.state.newItemText.goal_amount / this.state.newItemText.deposit_amount
    })
  }

  render() {
    return (
      <>
        <form onSubmit={this.editGoal} action="/update" method="put" className="row">
          <div className="body">
            <div className="content">
              <h2>Edit My Savings Goals</h2>
              <p></p>
              <div className="row" classID="progress">
                <div className="input-column">
                  <label htmlFor="name" className="label">
                    <strong>My Goals:</strong>
                  </label>

                  <input
                    type="text"
                    id="name"
                    name="goal[goal_name]"
                    className="label"
                    placeholder="Kid's College Fund"
                    onChange={this.complete}
                  />
                  {/* <input
                    type="text"
                    id="name"
                    name="goal_name"
                    className="label"
                    placeholder="Holiday Gifts"
                    onChange={this.complete}
                  />
                  <input
                    type="text"
                    id="name"
                    name="goal_name"
                    className="label"
                    placeholder="Vacation"
                    onChange={this.complete}
                  />
                  <input
                    type="text"
                    id="name"
                    name="goal_name"
                    className="label"
                    placeholder="New Kitchen"
                    onChange={this.complete}
                  />
                  <input
                    type="text"
                    id="name"
                    name="goal_name"
                    className="label"
                    placeholder="Retirement"
                    onChange={this.complete}
                  /> */}
                </div>
                <div className="input-column">
                  <label htmlFor="name" className="label">
                    <strong>Goal Amount:</strong>
                  </label>

                  <input
                    type="number"
                    min="0.01"
                    step="0.01"
                    max=""
                    // value="100,000.00"
                    id="target"
                    name="goal[goal_amount]"
                    className="label"
                    placeholder="100,000.00"
                    onChange={this.complete}
                  />
                  {/* <input
                    type="number"
                    min="0.01"
                    step="0.01"
                    max=""
                    // value="2,000.00"
                    id="target"
                    name="target_amount"
                    className="label"
                    placeholder="2,000.00"
                    onChange={this.complete}
                  />
                  <input
                    type="number"
                    min="0.01"
                    step="0.01"
                    max=""
                    // value="1,000.00"
                    id="target"
                    name="target_amount"
                    className="label"
                    placeholder="1,000.00"
                    onChange={this.complete}
                  />
                  <input
                    type="number"
                    min="0.01"
                    step="0.01"
                    max=""
                    // value="10,000.00"
                    id="target"
                    name="target_amount"
                    className="label"
                    placeholder="10,000.00"
                    onChange={this.complete}
                  />
                  <input
                    type="number"
                    min="0.01"
                    step="0.01"
                    max=""
                    // value="4,000,000.00"
                    id="target"
                    name="target_amount"
                    className="label"
                    placeholder="4,000,000.00"
                    onChange={this.complete}
                  /> */}
                </div>
                <div className="input-column">
                  <label htmlFor="name" className="label">
                    <strong>Deposit Amount:</strong>
                  </label>

                  <input
                    type="number"
                    min="0.01"
                    step="0.01"
                    max=""
                    // value="100,000.00"
                    id="target"
                    name="deposit[deposit_amount]"
                    className="label"
                    placeholder="100,000.00"
                    onChange={this.complete}
                  />
                  {/* <input
                    type="number"
                    min="0.01"
                    step="0.01"
                    max=""
                    // value="2,000.00"
                    id="target"
                    name="target_amount"
                    className="label"
                    placeholder="2,000.00"
                    onChange={this.complete}
                  />
                  <input
                    type="number"
                    min="0.01"
                    step="0.01"
                    max=""
                    // value="1,000.00"
                    id="target"
                    name="target_amount"
                    className="label"
                    placeholder="1,000.00"
                    onChange={this.complete}
                  />
                  <input
                    type="number"
                    min="0.01"
                    step="0.01"
                    max=""
                    // value="10,000.00"
                    id="target"
                    name="target_amount"
                    className="label"
                    placeholder="10,000.00"
                    onChange={this.complete}
                  />
                  <input
                    type="number"
                    min="0.01"
                    step="0.01"
                    max=""
                    // value="4,000,000.00"
                    id="target"
                    name="target_amount"
                    className="label"
                    placeholder="4,000,000.00"
                    onChange={this.complete}
                  /> */}
                </div>
                <div className="input-column">
                  <label htmlFor="name" className="label">
                    <strong>Balance:</strong>
                  </label>

                  {/* <div>{this.state.goals.map((goal, index) => {
                                const goalList = goal.complete ? 'complete' : ''
                                  return (
                                    <li onClick={this.complete}
                                      key={index}
                                      className={goalList}
                                      data-id={goal.goal_id}>
                                    </li>
                                  )}
                                  )}
                          </div> */}
                  <div className="button-column">
                    <div className="container">1000</div>
                    {/* <div className="container">1000</div>
                    <div className="container">1000</div>
                    <div className="container">1000</div>
                    <div className="container">1000</div> */}
                  </div>
                </div>

                <div className="column">
                  <label htmlFor="date" className="label">
                    <strong>Progress:</strong>
                  </label>
                  <div className="container">
                    <div className="skills css">100%</div>
                  </div>
                  {/* <div className="container">
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
                  </div> */}
                </div>
              </div>
            </div>
            <div className="edit-content">
              <div className="buttons">
                <div className="button-column">
                  <div
                    className="button">
                    <div
                      classID="submit"
                      className="button-label"
                    >
                      <button type="edit" onClick={this.lastPage}>
                        <strong>BACK</strong>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="button-column">
                  <div
                    className="button">
                    <div
                      classID="submit"
                      className="button-label"
                    >
                      <button type="submit">
                        <strong>UPDATE</strong>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="button-column">
                  <div
                    className="button">
                    <div
                      classID="submit"
                      className="button-label"
                    >
                      <button type="edit">
                        <strong>DELETE</strong>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="button-column">
                  <div
                    className="button">
                    <div
                      classID="submit"
                      className="button-label"
                    >
                      <button type="edit" onClick={this.nextPage}>
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
        </form>
      </>
    );
  }
}

export default Edit;
