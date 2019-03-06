import React, { Component } from 'react'
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import axios from 'axios'
import './App.css'

class Goal {
    // Method that is called when a new goal is created
    constructor(goalData) {
        this.goalName = goalData.goal_name
        this.goalAmount = goalData.goal_amount
        this.customerID = 1
        this.depositBalance = 1000.0
        this.targetDate = '01/01/2020'

        // goalData.customer_id
        this.goalURL = 'http://localhost:3000/goals/1.json'
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
            page: 1,
            goals: [],
            loading: false,
        }

        this.getGoalsFromAPI()
    }

    getGoalsFromAPI = () => {
        this.setState({ loading: true })

        fetch(`https://localhost:3000/goals/?page=${this.state.page}`)
            .then((response) => response.json())
            .then((goalData) => {
                let goals = goalData.goals.map((goalData) => {
                    let newGoal = new Goal(goalData)
                    return newGoal
                })

                this.setState({
                    goals: goals,
                    loading: false,
                })
            })
    }

    nextPage = () => {
        this.setState(
            () => {
                return { page: this.state.page + 1 }
            },
            () => {
                this.getGoalsFromAPI()
            }
        )
    }

    render() {
        return (
            <>
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
                                        {this.state.characters.map(
                                            (character) => {
                                                return (
                                                    <li>{goals.goal_name()}</li>
                                                )
                                            }
                                        )}

                                        {this.state.characters.map(
                                            (character) => {
                                                return (
                                                    <li>
                                                        {goals.goal_amount()}
                                                    </li>
                                                )
                                            }
                                        )}

                                        {this.state.characters.map(
                                            (character) => {
                                                return (
                                                    <li>
                                                        {goals.deposit_amount()}
                                                    </li>
                                                )
                                            }
                                        )}

                                        {this.state.characters.map(
                                            (character) => {
                                                return (
                                                    <li>{goals.targetDate()}</li>
                                                )
                                            }
                                        )}
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
            </>
        )
    }
}

export default Create
