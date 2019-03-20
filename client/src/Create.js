import React, { Component } from 'react'
import axios from 'axios'
import './App.css'
import auth from './auth'


class Create extends Component {
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

    _changeDeposit = event => {
        this.setState({
            newDepositData: event.target.value
        })
    }

    createGoal = (event) => {
        event.preventDefault()
        let form = event.target
        let formData = new FormData(event.target)

        axios.post('http://localhost:3000/api/goals.json', formData).then(response => {
            console.log(response.data)
            this.setState({
                goals: response.data,
                deposits: response.data
            })
            form.reset()
            this.reloadAllGoals()
        })


        // .then(response => {
        //     form.reset()
        //     this.reloadAllGoals()
        // }).then(response => {
        // this.changeText()
        // })
    }

    // deleteGoal = event => {
    //     if (auth.isAuthenticated()) {
    //         axios.defaults.headers.common = {
    //             Authorization: auth.authorizationHeader()
    //         }
    //     }
    //     axios
    //         .delete('http://localhost:3000/api/goals.json',
    //             {
    //                 item: ''
    //             }
    //         )
    //         .then(response => {
    //             this.reloadAllGoals()
    //         })
    // }

    // progressValue = (progress_value) => {
    //     progress_value = 0
    //     this.setState({
    //         progress_value: this.state.newItemText.goal_amount / this.state.newItemText.deposit_amount
    //     })
    // }

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

                        <div className="row">
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
                                    Current Progress:
                                    </label>
                            </div>
                            <div className="column">

                                <input
                                    // onChange={this.changeText}
                                    type="text"
                                    name="goal[goal_name]"
                                    className="input-label"
                                    placeholder="Your Goal Name"
                                // onChange={this._changingText}
                                />

                                <input
                                    // onChange={this.changeText}
                                    type="money"
                                    name="goal[goal_amount]"
                                    className="input-label"
                                    placeholder="Your Goal Amount"
                                // onChange={this._changingText}
                                />

                                <input
                                    // onChange={this._changeDeposit}
                                    type="money"
                                    name="goal[deposits][deposit_amount]"
                                    className="input-label"
                                    placeholder="The Deposit Amount"
                                />

                                <div className="container">
                                    <div className="skills css">100%</div>
                                </div>
                            </div>
                        </div>
                        <div className="button-content">
                            <div className="create">
                                <section>
                                    Click HERE to Create Your New Goal!
                            </section>
                                <button type="submit">
                                    <strong>CREATE</strong>
                                </button>
                            </div>

                        </div>
                    </div>
                </div>

            </form>

        )
    }
}

export default Create
