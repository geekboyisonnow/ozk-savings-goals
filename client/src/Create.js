import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios'
import auth from './auth'
import './App.css'
// import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

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
            .get(`/goals.json`)
            .then(repsonse => {
                this.setState({
                    goals: Response.data
                })
            })
    }

    componentWillMount() {
        if (auth.isAuthenticated()) {
            axios.defaults.headers.common = {
                Authorization: auth.authorizationHeader()
            }
        }
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

        axios.post(`/goals/${event.target.dataset.goal_id}`, formData).then(response => {
            form.reset()
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

    // newItemGoalBalance = event => {
    //     event.preventDefault()

    //     axios
    //         .post(`/goals/1.json`,
    //             {
    //                 item: {
    //                     text: this.state.newItemText
    //                 }
    //             }
    //         )
    //         .then(response => {
    //             console.log(response.date)
    //             this.reloadAllGoals()
    //             this.setState({
    //                 newItemText: ''
    //             })
    //         })
    // }


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
                        <form onSubmit={this.createGoal} action="/new" method="post" className="row">
                            <div className="column">
                                <label htmlFor="name" className="label">
                                    Goal Name:
                                    </label>
                                <label htmlFor="target" className="label">
                                    Goal Amount:
                                    </label>
                                <label htmlFor="current" className="label">
                                    Deposit Amount:
                                    </label>
                                <label htmlFor="date" className="label">
                                    Balance:
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
                                                    {this.state.newItemText.deposit_amount}
                                                </li>
                                            )
                                        })}
                                </ul>
                            </div>
                            <div className="column">

                                <input
                                    type="text"
                                    id="name"
                                    name="goal[goal_name]"
                                    className="input-label"
                                    placeholder={this.state.newItemText.goal_name}
                                    onChange={this.changeText}
                                />

                                <input
                                    type="money"
                                    id="target"
                                    name="goal[goal_amount]"
                                    className="input-label"
                                    placeholder={this.state.newItemText.goal_amount}
                                    onChange={this.changeText}
                                />

                                <input
                                    type="money"
                                    id="current"
                                    name="deposit[deposit_amount]"
                                    className="input-label"
                                    placeholder={this.state.newItemText.deposit_amount}
                                    onChange={this.changeText}
                                />
                                <input
                                    type="money"
                                    id="date"
                                    name="deposit.balance"
                                    className="input-label"
                                    // placeholder={newItemGoalBalance}
                                    onChange={this.changeText}
                                />

                            </div>
                        </form>
                        <form onSubmit={this.newItem} >
                            <div className="button-content">
                                <div className="create">
                                    <button type="submit"
                                        onClick={this.complete}
                                        // key={index}
                                        // className={goalList}
                                        data-id={this.state.customerID}>
                                        <strong>CREATE</strong>
                                    </button>

                                    <section>
                                        Click HERE to Create Your New Goal!
                            </section>
                                </div>
                            </div>
                        </form>
                    </div>


                </div>
            </div>

        )
    }
}

export default Create
