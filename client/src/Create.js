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

    _changingText = event => {
        this.setState({
            newItemText: event.target.value
        })
    }

    createGoal = (event) => {
        event.preventDefault()
        let form = event.target
        let formData = new FormData(event.target)

        axios.post('http://localhost:3000/api/goals.json', formData).then(response => {
            console.log(response.data)
            this.setState({
                goals: response.data
            })
            this._changingText()
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

    // newItemGoalName = event => {
    //     event.preventDefault()

    //     axios
    //         .get('http://localhost:3000/api/goals.json',
    //             {
    //                 item: {
    //                     goal_name: this.state.newItemText.goal_name
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
                                    // onChange={this.changeText}
                                    type="money"
                                    name="deposits[deposit_amount]"
                                    className="input-label"
                                    placeholder="The Deposit Amount"
                                // onChange={this._changingText}
                                />

                                <div className="container">
                                    <div className="skills css">100%</div>
                                </div>
                            </div>
                            <div className="column">
                                {/* <div  className="input-label">
                                    {this.createGoal.goal_name}
                                </div> */}
                                {/* <div>
                                    {this.state.goals.map(goal =>
                                        <div key={goal.id} >

                                            {goal.goal_name}


                                        </div>
                                    )}
                                </div> */}
                                <div>
                                    {this.newItemText}
                                </div>
                            </div>
                        </div>
                        <div className="button-content">
                            <div className="create">
                                <section>
                                    Click HERE to Create Your New Goal!
                            </section>
                                <button type="submit"
                                    onChange={this._changingText}
                                //  onClick={this.newItemGoalName}
                                // key={index}
                                // className={goalList}
                                // data-id={this.state.customerID}
                                >
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
