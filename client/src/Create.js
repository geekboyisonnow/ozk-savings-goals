import React, { Component } from 'react'
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import axios from 'axios'
import './App.css'
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

class Create extends Component {
    constructor(props) {
        super(props)

        this.state = {
            goals: [],
            newItemText: ''
        }
    }

    reloadAllGoals = () => {
        axios
            .get(
                `https://localhost:3000/goals`
            )
            .then(repsonse => {
                this.setState({
                    goals: Response.data
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

    complete = event => {
        axios
            .put(
                `https://localhost:3000/goals/${event.target.dataset.goal_id}`,
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
                `https://localhost:3000/goals/${
                event.target.dataset.goal_id}`,
                {
                    item: ''
                }
            )
            .then(response => {
                this.reloadAllGoals()
            })
    }

    newGoal = event => {
        event.prevent.Default()

        axios
            .post(`https://localhost:3000/goals`,
                {
                    item: {
                        text: this.state.newItemText
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

    render() {
        return (

            <div className="body">
                <div className="content">
                    <h2>Create A New Savings Goals</h2>
                    <section>
                        Bank OZK helps you save today to meet your financial
                        goals for tomorrow.
                        </section>

                    <div className="column">
                        <form action="/new" method="post" className="row">
                            <div className="column">
                                <label htmlFor="name" className="label">
                                    Goal Name:
                                    </label>
                                <label htmlFor="target" className="label">
                                    Goal Amount:
                                    </label>
                                <label htmlFor="current" className="label">
                                    Balance:
                                    </label>
                                <label htmlFor="date" className="label">
                                    Target Date:
                                    </label>
                            </div>
                            <div className="column">
                                <ul>
                                    {this.state.goals.map
                                        ((goal, index) => {
                                            const goalList = goal.complete ? 'complete' : ''
                                            return (
                                                <li
                                                    onClick={this.complete}
                                                    key={index}
                                                    className={goalList}
                                                    data-id={goal.goal_id}
                                                >
                                                    {goal.text.goal_name}
                                                    {goal.text.goal_amount}
                                                    {goal.text.deposit_amount}
                                                    {goal.text.goal_date}</li>
                                            )
                                        })}
                                </ul>
                            </div>
                            <div className="column">
                                <input
                                    type="text"
                                    id="name"
                                    name="goal_name"
                                    className="input-label"
                                />
                                <input
                                    type="text"
                                    id="target"
                                    name="target_amount"
                                    className="input-label"
                                />
                                <input
                                    type="text"
                                    id="current"
                                    name="current_amount"
                                    className="input-label"
                                />
                                <input
                                    type="date"
                                    id="date"
                                    name="target_date"
                                    className="input-label"
                                />
                            </div>
                        </form>
                    </div>

                    <div className="button-content">
                        <div className="create">
                            <button type="submit">
                                <strong>CREATE</strong>
                            </button>

                            <section>
                                Click HERE to Create Your New Goal!
                            </section>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Create
