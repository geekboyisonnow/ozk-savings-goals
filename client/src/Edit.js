import React, {Component} from 'react';
import './App.css';
import axios from 'axios'

class Edit extends Component {
  constructor(props) {
    super(props)

    this.state = {
        goals: [],
        newItemText: '',
        progress_value: 0
    }
  }

reloadAllGoals = () => {
    axios
        .get(`/goals.json`)
        .then(response => {
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

createGoal = (event) => {
    event.preventDefault()
    let form = event.target
    let formData = new FormData(event.target)

    axios.post(`/goals.json`, formData).then(response => {
        form.reset()
        this.reloadAllGoals()
    })
}

complete = event => {
    event.preventDefault()
    axios
        .post(`/goals/${event.target.dataset.goal_id}`, 
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

deleteGoal = event => {
    axios
        .delete(
            `/goals.json${
            event.target.dataset.goal_id}`,
            {
                item: ''
            }
        )
        .then(response => {
            this.reloadAllGoals()
        })
}

newItemGoalName = event => {
    event.preventDefault()

    axios
        .post(`/goals.json`,
            {
                item: {
                    text: this.state.newItemText.goal_name
                }
            }
        )
        .then(response => {
            console.log(response.date)
            this.reloadAllGoals()
            this.setState({
                newItemText: ''
            })
        })
}

newItemGoalAmount = event => {
    event.preventDefault()

    axios
        .post(`/goals.json`,
            {
                item: {
                    text: this.state.newItemText.goal_amount
                }
            }
        )
        .then(response => {
            console.log(response.date)
            this.reloadAllGoals()
            this.setState({
                newItemText: ''
            })
        })
}

newItemDepositAmount = event => {
    event.preventDefault()

    axios
        .post(`/goals.json`,
            {
                item: {
                    text: this.state.newItemText.deposit_amount
                }
            }
        )
        .then(response => {
            console.log(response.date)
            this.reloadAllGoals()
            this.setState({
                newItemText: ''
            })
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
                <div className="body">
                  <div className="content">
                      <h2>Edit My Savings Goals</h2>
                      <p></p>
                      <div className="row" classId="progress">
                        <div className="input-column">
                          <label for="name" className="label">
                            <strong>My Goals:</strong>
                          </label>

                          <input
                            type="text"
                            id="name"
                            name="goal_name"
                            className="label"
                            placeholder="Kid's College Fund"
                          />
                          <input
                            type="text"
                            id="name"
                            name="goal_name"
                            className="label"
                            placeholder="Holiday Gifts"
                          />
                          <input
                            type="text"
                            id="name"
                            name="goal_name"
                            className="label"
                            placeholder="Vacation"
                          />
                          <input
                            type="text"
                            id="name"
                            name="goal_name"
                            className="label"
                            placeholder="New Kitchen"
                          />
                          <input
                            type="text"
                            id="name"
                            name="goal_name"
                            className="label"
                            placeholder="Retirement"
                          />
                        </div>
                        <div className="input-column">
                          <label for="name" className="label">
                            <strong>Goal Amount:</strong>
                          </label>

                          <input
                            type="number"
                            min="0.01"
                            step="0.01"
                            max=""
                            value="$100,000.00"
                            id="target"
                            name="target_amount"
                            className="label"
                            placeholder="$100,000.00"
                          />
                          <input
                            type="number"
                            min="0.01"
                            step="0.01"
                            max=""
                            value="$2,000.00"
                            id="target"
                            name="target_amount"
                            className="label"
                            placeholder="$2,000.00"
                          />
                          <input
                            type="number"
                            min="0.01"
                            step="0.01"
                            max=""
                            value="$1,000.00"
                            id="target"
                            name="target_amount"
                            className="label"
                            placeholder="$1,000.00"
                          />
                          <input
                            type="number"
                            min="0.01"
                            step="0.01"
                            max=""
                            value="$10,000.00"
                            id="target"
                            name="target_amount"
                            className="label"
                            placeholder="$10,000.00"
                          />
                          <input
                            type="number"
                            min="0.01"
                            step="0.01"
                            max=""
                            value="$4,000,000.00"
                            id="target"
                            name="target_amount"
                            className="label"
                            placeholder="$4,000,000.00"
                          />
                        </div>
                        <div className="input-column">
                          <label for="name" className="label">
                            <strong>Current Balance:</strong>
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
                          <div className="container">1000</div>
                          <div className="container">1000</div>
                          <div className="container">1000</div>
                          <div className="container">1000</div>
                          </div>
                        </div>

                        <div className="column">
                          <label for="date" className="label">
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
                        <div className="edit-content">
                            <div className="buttons">
                              <div className="button-column">
                                <div
                              class="button"
                              classId="submit"
                              className="button-label"
                                >
                              <button type="edit">
                                <strong>BACK</strong>
                              </button>
                                </div>
                              </div>
                              <div className="button-column">
                                <div
                              class="button"
                              classId="submit"
                              className="button-label"
                                >
                              <button type="submit">
                                <strong>UPDATE</strong>
                              </button>
                                </div>
                              </div>
                              <div className="button-column">
                                <div
                              class="button"
                              classId="submit"
                              className="button-label"
                                >
                              <button type="edit">
                                <strong>DELETE</strong>
                              </button>
                                </div>
                              </div>
                              <div className="button-column">
                                <div
                              class="button"
                              classId="submit"
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
                        </>
    );
  }
}

export default Edit;
