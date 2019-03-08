import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import plant from './plant.jpg';
import './App.css';

class Logon extends Component {
    constructor(props) {
        super(props);

        this.state = null;
    }

    render() {
        return (
            <>
                <div className="body">
                    <div className="home-content">
                        <div>
                            <img
                                src={plant}
                                alt="plant planted in change jar"
                            />
                        </div>
                        <div className="column">
                            <div className="text">
                                <h2>Login to your Customer Savings Goal Account</h2>

                                <Link to="/login"><button type="submit" className="plain-button">Login</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Logon;