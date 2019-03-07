import React, { Component } from 'react'
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios'
import './App.css'
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

class Create extends Component {
    constructor(props) {
        super(props)

        this.state = {
            customerID: 1,
            goals: [],
            newItemText: ''
        }
    }

    reloadAllGoals = () => {
        axios
            .get(`/goals/1.json`)
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
            .put(`/goals/1/${event.target.dataset.goal_id}`, 
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
                `/goals/1.json${
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
        event.prevent.Default()

        axios
            .post(`/goals/1.json`,
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
        event.prevent.Default()

        axios
            .post(`/goals/1.json`,
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
        event.prevent.Default()

        axios
            .post(`/goals/1.json`,
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
    //     event.prevent.Default()

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
                        <form action="/new" method="post" className="row">
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
                                                    {goal.text.deposit_amount}</li>
                                                    // {newItemGoalBalance()}
                                            )
                                        })}
                                </ul>
                            </div>
                            <div className="column">
                            <form onSubmit={this.newItem}>
                                <input
                                    type="text"
                                    id="name"
                                    name="goal_name"
                                    className="input-label"
                                    placeholder={this.state.newItemText.goal_name}
                                    onChange={this.changeText}
                                />
                                </form>
                                <form onSubmit={this.newItem}>
                                <input
                                    type="money"
                                    id="target"
                                    name="goal_amount"
                                    className="input-label"
                                    placeholder={this.state.newItemText.goal_amount}
                                    onChange={this.changeText}
                                />
                                </form>
                                <form onSubmit={this.newItem}>
                                <input
                                    type="money"
                                    id="current"
                                    name="deposit_amount"
                                    className="input-label"
                                    placeholder={this.state.newItemText.deposit_amount}
                                    onChange={this.changeText}
                                /></form>
                                <form onSubmit={this.newItem}>
                                <input
                                    type="money"
                                    id="date"
                                    name="newItemGoalBalance"
                                    className="input-label"
                                    // placeholder={newItemGoalBalance}
                                    onChange={this.changeText}
                                /></form>
                            </div>
                        </form>
                    </div>

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
                </div>
            </div>

        )
    }
}

export default Create
