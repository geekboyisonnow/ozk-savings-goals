import React, { Component } from 'react'
import axios from 'axios'
import './App.css'

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

    render() {
        return (
            <form onSubmit={this.createGoal} action="/new" method="post" className="row">

            <div className="body">
                <div className="content">

                    <h2>Create A New Savings Goals</h2>
                    <section>
                        Bank OZK helps you save today to meet your financial
                        goals for tomorrow.
                        </section>

                    <div className="column">
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
                                    {this.state.goals.map((goal, index) => {
                                            const goalList = goal.complete ? 'complete' : ''
                                            return (
                                                <li
                                                    onClick={this.complete}
                                                    key={index}
                                                    className={goalList}
                                                    data-id={goal.goal_id}
                                                >
                                                    {goal.goal_name}
                                                    {goal.goal_amount}
                                                    {goal.deposit_amount}
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

                            <div className="button-content">
                        <div className="create">
                            <button type="submit"
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
            </div>
            </form>

        )
    }
}

export default Create
