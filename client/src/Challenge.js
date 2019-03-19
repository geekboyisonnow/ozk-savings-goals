import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import auth from './auth'

class Challenge extends Component {
  constructor(props) {
    super(props)

    this.state = {
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

  createGoal = (event) => {
    event.preventDefault()
    let form = event.target
    let formData = new FormData(event.target)

    axios.post('http://localhost:3000/api/goals.json', formData).then(response => {
      form.reset()
      this.reloadAllGoals()
    }).then(response => {
      form.reset()
      this.reloadAllGoals()
    })
  }

  changeText = event => {
    this.setState({
      newItemText: event.target.value
    })
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

  render() {
    return (
      <>
        <div className="body">
          <div className="content">
            <h2>The Rainy Day Challenge</h2>
            <div className="rainy-content">
              <section>
                Competition can be healthy. So, try the Rainy
                Day Challenge. Here's how it works... You pick a
                savings goal that you might need for a rainy
                day, such as; $100, $1,000, $10,000, or more.
                Match your progress against others in the
                challenge. See if you can beat expectations. Are
                you ready for the Challenge? Bank OZK helps you
                save today to meet your financial goals for
                tomorrow! Enter now to take the Challenge!
                      </section>
            </div>
          </div>

          <div className="row">
            <div className="column">
              <label htmlFor="name" className="label">
                Amount:
                      </label>
              <label htmlFor="target" className="label">
                Deposit:
                      </label>
              <label htmlFor="current" className="label">
                Progress:
                      </label>
              <label htmlFor="date" className="label">
                Competition:
                      </label>
            </div>
            <div className="input-column">
              <input
                type="text"
                id="target"
                name="target_amount"
                className="label"
              />
              <input
                type="text"
                id="current"
                name="current_amount"
                className="label"
              />
              <div className="container">
                <div className="skills css">100%</div>
              </div>
              <div className="container">
                <div className="skills css">100%</div>
              </div>
            </div>
          </div>

          <div className="content">
            <button type="submit">
              <strong>ENTER</strong>
            </button>

            <section>Click Here to take the Challenge!</section>
          </div>
        </div>
      </>
    );
  }
}

export default Challenge;
