import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './Header'
import Title from './Title'
import Navigation from './Navigation'
import Home from './Home';
import Challenge from './Challenge'
import Edit from './Edit'
import Create from './Create'
import Progress from './Progress'
import Footer from './Footer';
import Error from './Error'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

this.state = true
  }
  render() {
    return (
      
      <Router>
        <>
        <div className="header">
        <Header />
        <Title />
        </div>
        <div className="body">
        <Navigation />
        <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/create" component={Create} />
        <Route path="/edit" component={Edit} />
        <Route path="/progress" component={Progress} />
        <Route path="/challenge" component={Challenge} />
        <Route component={Error} />
        </Switch>
        <Footer />
      </div>
      </>
      </Router>
      );
  }
}

export default App;